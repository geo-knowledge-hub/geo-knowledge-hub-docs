/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import clsx from 'clsx';

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

/**
 * Hero component.
 */
const Hero = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className={'flex-centered'}>
          <p className={clsx('hero__subtitle', styles.heroSubtext)}>
            {siteConfig.tagline}
          </p>
        </div>
        <div className={'flex-centered'}>
          <div className={'container'}>
            <div className={'row'}>
              <div className={clsx('col col--6', styles.rightAligned)}>
                <a
                  className="button button--secondary button--lg"
                  href={'https://gkhub.earthobservations.org/'}
                >
                  Explore now
                </a>
              </div>
              <div className={clsx('col col--6', styles.leftAligned)}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/introduction"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
