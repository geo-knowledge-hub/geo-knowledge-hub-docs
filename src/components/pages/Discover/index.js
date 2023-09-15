/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import clsx from 'clsx';

import _isEmpty from 'lodash/isEmpty';

import { DiscoverMap } from './map';
import { SpinnerLoading } from './loader';

import { calculatePackagesInContinents } from './toolbox';

import styles from './styles.module.css';

/**
 * Discover component.
 */
const Discover = ({ records, searchEndpoint }) => {
  // Preparing data
  const continentsData = calculatePackagesInContinents(records);

  // Check if map render is ready
  const isMapRenderDataReady = !_isEmpty(records);

  console.log('isMapRenderDataReady');
  console.log(isMapRenderDataReady);

  return (
    <div className={clsx(styles.section)}>
      <div className={'container'}>
        <h2 className={'h2'}>Discover</h2>
        <div className={styles.centered}>
          <div className={styles.descriptionContainer}>
            <p className={'p padded'}>
              Presently, the GEO Knowledge Hub offers a diverse array of EO
              Applications. Please utilize the interactive map provided below to
              embark on a courteous and comprehensive exploration of these
              applications by continent.
            </p>
          </div>
        </div>

        {isMapRenderDataReady ? (
          <DiscoverMap
            continentsData={continentsData}
            searchEndpoint={searchEndpoint}
          />
        ) : (
          <SpinnerLoading />
        )}
      </div>
    </div>
  );
};

export default Discover;
