/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import clsx from 'clsx';

import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './styles.module.css';

/**
 * Contribute section component.
 */
const ContributeSection = () => {
  return (
    <div className={clsx(styles.section, styles.gray)}>
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col col--6'}>
            <h2 className={'h2'}>Want to contribute?</h2>
            <p className={'p padded'}>
              The GKH offers you a place where you can make your solution
              visible and available to the rest of the world, in an Open
              Knowledge approach! To ensure long term discoverability of your
              work, you will be able to assign Digital Object Identifiers (DOI)
              and maintain it up to date with version management
              functionalities.
            </p>
            <p className={'p padded'}>
              You are a member of a GWP activity or an EO expert and want to
              share an EO Application developed within your activity? You are in
              the right place!
            </p>
            <div className={clsx('flex-centered', styles.buttonContainer)}>
              <a
                className="button button--secondary button--lg"
                href={'mailto:secretariat@geosec.org'}
              >
                Contact us now!
              </a>
            </div>
          </div>
          <div className={clsx('col', 'col--6', styles.centered, styles.imageContainer)}>
            <img
              src={useBaseUrl('/img/frontpage/sharing-knowledge.svg')}
              alt="Sharing Knowledge image"
              className={styles.imageConfig}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Contribute section.
 */
const Contribute = () => (
  <div>
    <ContributeSection />
  </div>
);

export default Contribute;
