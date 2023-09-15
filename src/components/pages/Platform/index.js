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
 * Component of the About section.
 */
const AboutSection = () => {
  return (
    <div className={clsx(styles.section, styles.gray)}>
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col col--6'}>
            <h2 className={'h2'}>EO Digital Library</h2>
            <p className={'p padded'}>
              The GEO Knowledge Hub (GKH) is a central cloud-based digital
              library providing access to Earth Observation (EO) Applications
              developed by the GEO Work Programme Activities.
            </p>
            <p className={'p padded'}>
              The GKH It is part of the GEOSS Infrastructure and helps the Group
              on Earth Observations (GEO) to advance Open Knowledge.
            </p>
          </div>
          <div className={clsx('col', 'col--6', styles.centered)}>
            <img
              src={useBaseUrl('/img/frontpage/eo-library.svg')}
              alt="EO Digital library"
              className={styles.aboutSectionImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Component of the Scope section.
 */
const ScopeSection = () => {
  return (
    <div className={styles.section}>
      <div className={'container'}>
        <div className={clsx('row', styles.flexReverse)}>
          <div className={'col col--6'}>
            <h2 className={'h2'}>Scope</h2>
            <p className={'p padded'}>
              The scope of the GKH is to promote the replicability and
              re-usability of EO Applications by sharing with the end users, all
              the Knowledge Resources essential to fully understand and re-use
              them.
            </p>
          </div>
          <div className={clsx('col', 'col--6', styles.centered)}>
            <img
              src={useBaseUrl('/img/frontpage/scope.svg')}
              alt="GKH Scope"
              className={styles.scopeSectionImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Component of the Package and resource description section.
 */
const PackagesResources = () => {
  return (
    <div className={clsx(styles.section, styles.gray)}>
      <div className={'container'}>
        <div className={'row'}>
          <div className={'col col--6'}>
            <h2 className={'h2'}>Knowledge Packages and Resources</h2>
            <p className={'p padded'}>
              Inside the GKH, users will find EO Applications organized in
              Knowledge Packages (KP). A KP is composed by Knowledge Resources.
              This way, users are able to share their applications with all the
              resources used to compose it.
            </p>
          </div>
          <div className={clsx('col', 'col--6', styles.centered)}>
            <img
              src={useBaseUrl('/img/frontpage/packages-resources.svg')}
              alt="Packages and resources"
              className={styles.packagesResourcesSectionImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Platform description component.
 */
const Platform = () => {
  return (
    <div>
      <AboutSection />
      <ScopeSection />
      <PackagesResources />
    </div>
  );
};

export default Platform;
