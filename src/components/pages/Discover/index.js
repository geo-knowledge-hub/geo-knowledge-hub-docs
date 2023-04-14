/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import { DiscoverMap } from './map';

import styles from './styles.module.css';

const Discover = () => (
  <div className={'container'}>
    <h2 className={'h2 header-margin'}>Discover</h2>
    <div className={styles.centered}>
      <div className={styles.dcontainer}>
        <p className={'p'}>
          Presently, the GEO Knowledge Hub offers a diverse array of EO
          Applications. Please utilize the interactive map provided below to
          embark on a courteous and comprehensive exploration of these
          applications by continent.
        </p>
      </div>
    </div>
    <DiscoverMap />
  </div>
);

export default Discover;
