/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

// Geometry operations
import * as turfHelpers from '@turf/helpers';
import * as turfBoundingBox from '@turf/bbox';
import * as turfBoundingBoxPolygon from '@turf/bbox-polygon';
import * as turfBooleanIntersects from '@turf/boolean-intersects';

import rawContinentsData from '../../../../static/data/continents.geo.json';

/**
 * Calculate the number of packages in each continent.
 *
 * @param {array} records Records.
 * @returns GeoJSON with the number of packages in each continent.
 */
export const calculatePackagesInContinents = (records) => {
  // Generating bounding box for each polygon available
  const dataMutated = records
    .map((row) => {
      const validFeatures = row.metadata.locations.features.filter(
        (feature) => feature.geometry !== undefined
      );

      if (validFeatures.length === 0) {
        return null;
      }

      const rowFeatureCollection = turfHelpers.featureCollection(validFeatures);

      const rowBoundingBox = turfBoundingBox.default(rowFeatureCollection);
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
    const continentBboxPolygon = turfBoundingBoxPolygon.default(continentBbox);

    const filteredData = dataMutated.filter((row) => {
      return turfBooleanIntersects.default(
        row.extras.bboxPolygon,
        continentBboxPolygon
      );
    });

    // Preparing bbox in the gkhub format
    const topLeftCoords = continentBboxPolygon.geometry.coordinates[0][3];
    const bottomRightCoords = continentBboxPolygon.geometry.coordinates[0][1];

    continentRow.properties.bbox = [...topLeftCoords, ...bottomRightCoords];
    continentRow.properties.continent = continentRow.properties.CONTINENT;
    continentRow.properties.numberOfPackages = filteredData.length;
  });

  return rawContinentsData;
};
