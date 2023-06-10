/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import Layout from '@theme/Layout';

import clsx from 'clsx';

import styles from './releases.module.css';

import ReleaseTimeline from '@site/src/components/pages/ReleaseTimeline';

/* 
  Page data
*/
const moreUrl =
  'https://github.com/geo-knowledge-hub/geo-knowledge-hub/releases';

const productReleases = [
  {
    title: 'Version 1.6.0',
    description: (
      <div>
        <div>
          In this new version of the GEO Knowledge Hub, we have introduced improvements to the package management interface, revised DOI Mint operations, and general improvements to our infrastructure.
        </div>

        <div>
          This version also introduces the integration of the GEO Knowledge Hub with the <a href='https://gkhub.earthobservations.org/feed/' target='_blank'>GEO Knowledge Hub Feed</a> component.
        </div>
      </div>
    ),
    badge: 'Major Release',
    date: 'June 10, 2023',
    link: 'https://github.com/geo-knowledge-hub/geo-knowledge-hub/releases/tag/v1.6.0',
  },
  {
    title: 'Version 1.5.0',
    description: (
      <>
        New GEO Knowledge Hub version launched! In this version, the{' '}
        <code>Featured communities</code> was introduced. Deposit interface now
        have <code>Import metadata</code> operation. Also, we now use the{' '}
        <a
          href="https://inveniordm.docs.cern.ch/releases/versions/version-v11.0.0/"
          target="_blank"
        >
          InvenioRDM v11
        </a>
        .
      </>
    ),
    badge: 'Major Release',
    date: 'March 17, 2023',
    link: 'https://github.com/geo-knowledge-hub/geo-knowledge-hub/releases/tag/v1.5.0',
  },
  {
    date: 'January 10, 2023',
    title: 'Version 1.4.1',
    badge: 'Minor Release',
    description: (
      <>
        In this new version of the GEO Knowledge Hub, we have introduced{' '}
        <a href="https://github.com/mailhog/MailHog" target="_blank">
          MailHog
        </a>{' '}
        as the tool to support the development of e-mail services. Also, some
        minor bugs were fixed.
      </>
    ),
    link: 'https://github.com/geo-knowledge-hub/geo-knowledge-hub/releases/tag/v1.4.1',
  },
];

/* 
  Page component 
*/
export default function Releases() {
  return (
    <Layout
      title="Release timeline"
      description="GEO Knowledge Hub Release timeline"
    >
      <header className={clsx('hero shadow--lw margin-top--md', styles.hero)}>
        <div className="container">
          <h1 className="hero__title">Releases</h1>
          <p className="hero__subtitle">
            Check out the latest GEO Knowledge Hub releases and updates
          </p>
        </div>
      </header>

      <main>
        <div
          className={clsx(
            'margin-top--xl margin-bottom--lg',
            styles.timelineContainer
          )}
        >
          <div className={'container'}>
            <div className={'row flex-centered'}>
              <div className={'col col--11'}>
                <ReleaseTimeline items={productReleases} moreUrl={moreUrl} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
