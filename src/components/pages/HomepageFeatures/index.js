/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Discover',
    Svg: require('@site/static/img/frontpage/discovering-2.svg').default,
    description: (
      <p className={'p'}>
        GEO Knowledge Hub was designed to allow users to easily find Earth
        Observation Applications
      </p>
    ),
  },
  {
    title: 'Contribute',
    Svg: require('@site/static/img/frontpage/contribute.svg').default,
    description: (
      <p className={'p'}>
        GEO Knowledge Hub enables the organized and transparent sharing of Earth
        Observation applications.
      </p>
    ),
  },
  {
    title: 'Communities',
    Svg: require('@site/static/img/frontpage/community.svg').default,
    description: (
      <p className={'p'}>
        Engage with <code>open</code>, <code>reproducible</code> sharing
        communities curated by Earth Observation experts.
      </p>
    ),
  },
];

const FeatureItem = ({ Svg, title, description }) => {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

/**
 * Features component for homepage.
 */
const HomepageFeatures = () => {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <FeatureItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageFeatures;
