/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import clsx from 'clsx';

import 'leaflet.fullscreen';

import { createControlComponent } from '@react-leaflet/core';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

import styles from './styles.module.css';

/**
 * Fullscreen Control component.
 */
const FullscreenControl = createControlComponent((props) =>
  L.control.fullscreen(props)
);

/**
 * Continents component.
 */
const ContinentsLayer = ({ continentsData, searchEndpoint }) => {
  // Auxiliary configurations
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
            `${searchEndpoint}?q=metadata.resource_type.id:(knowledge)&f=bbox:${feature.properties.bbox}`
          );
        });
      }}
    />
  ) : null;
};

/**
 * Discover map component.
 */
export const DiscoverMap = ({ continentsData, searchEndpoint }) => (
  <div className={clsx(styles.centered, styles.margins)}>
    <div className={styles.mcontainer}>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ContinentsLayer
          continentsData={continentsData}
          searchEndpoint={searchEndpoint}
        />
        <FullscreenControl />
      </MapContainer>
    </div>
  </div>
);
