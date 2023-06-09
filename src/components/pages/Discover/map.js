/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import axios from 'axios';

import * as turfHelpers from '@turf/helpers';
import * as turfBoundingBox from '@turf/bbox';
import * as turfBoundingBoxPolygon from '@turf/bbox-polygon';
import * as turfBooleanIntersects from '@turf/boolean-intersects';

import 'leaflet.fullscreen';
import { createControlComponent } from '@react-leaflet/core';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

import rawContinentsData from '../../../../static/data/continents.geo.json';

import styles from './styles.module.css';

// Configuring GEO Knowledge Hub API address
const gkhubApiAddress = 'https://gkhub.earthobservations.org';

/**
 * Fullscreen Control component.
 */
const FullscreenControl = createControlComponent((props) =>
  L.control.fullscreen(props)
);

/**
 * Continents component.
 */
const ContinentsLayer = () => {
  // States
  const [continentsData, setContinentsData] = useState([]);

  // Hooks
  useEffect(() => {
    axios
      .get('/api/packages', {
        baseURL: gkhubApiAddress,
        params: {
          q: '_exists_:metadata.locations',
          size: 150,
        },
      })
      .then((res) => {
        // Generating bounding box for each polygon available
        const dataMutated = res.data.hits.hits
          .map((row) => {
            const validFeatures = row.metadata.locations.features.filter(
              (feature) => feature.geometry !== undefined
            );

            if (validFeatures.length === 0) {
              return null;
            }

            const rowFeatureCollection =
              turfHelpers.featureCollection(validFeatures);

            const rowBoundingBox =
              turfBoundingBox.default(rowFeatureCollection);
            const rowBoundingBoxPolygon =
              turfBoundingBoxPolygon.default(rowBoundingBox);

            row.extras = {
              bbox: rowBoundingBox,
              bboxPolygon: rowBoundingBoxPolygon,
            };

            return row;
          })
          .filter((x) => x !== null);

        // Intersecting geometries
        rawContinentsData.features.forEach((continentRow) => {
          // Creating search bbox
          const continentBbox = turfBoundingBox.default(continentRow.geometry);
          const continentBboxPolygon =
            turfBoundingBoxPolygon.default(continentBbox);

          const filteredData = dataMutated.filter((row) => {
            return turfBooleanIntersects.default(
              row.extras.bboxPolygon,
              continentBboxPolygon
            );
          });

          // Preparing bbox in the gkhub format
          const topLeftCoords = continentBboxPolygon.geometry.coordinates[0][3];
          const bottomRightCoords =
            continentBboxPolygon.geometry.coordinates[0][1];

          continentRow.properties.bbox = [
            ...topLeftCoords,
            ...bottomRightCoords,
          ];
          continentRow.properties.continent = continentRow.properties.CONTINENT;
          continentRow.properties.numberOfPackages = filteredData.length;
        });

        setContinentsData(rawContinentsData);
      });
  }, []);

  // Auxiliary functions
  const activateStyle = {
    color: '#888',
    fillOpacity: 0.3,
  };

  const deactivateStyle = {
    color: '#406078',
    fillOpacity: 0.3,
  };

  return continentsData.length !== 0 ? (
    <GeoJSON
      data={continentsData}
      style={activateStyle}
      eventHandlers={{
        mouseover: (event) => {
          event.layer.setStyle(deactivateStyle);
        },
        mouseout: (event) => {
          event.layer.setStyle(activateStyle);
        },
      }}
      onEachFeature={(feature, layer) => {
        layer.bindTooltip(
          `
            <b>Continent</b>: ${feature.properties.continent}<br/>
            <b>Number of packages</b>: ${feature.properties.numberOfPackages}
          `
        );
        layer.on('click', (event) => {
          window.open(
            `${gkhubApiAddress}/search?q=metadata.resource_type.id:(knowledge)&f=bbox:${feature.properties.bbox}`
          );
        });
      }}
    />
  ) : null;
};

/**
 * Discover map component.
 * @returns {JSX.Element}
 * @constructor
 */
export const DiscoverMap = () => (
  <div className={clsx(styles.centered, styles.margins)}>
    <div className={styles.mcontainer}>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ContinentsLayer />
        <FullscreenControl />
      </MapContainer>
    </div>
  </div>
);
