/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import styles from './styles.module.css';

import {
  UserGroupIcon,
  LinkIcon,
  MagnifyingGlassCircleIcon,
  GlobeAmericasIcon,
  UsersIcon,
  Square2StackIcon,
  ShieldCheckIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Communities',
    description:
      'Engage with open, reproducible sharing communities curated by Earth Observation experts.',
    icon: <UserGroupIcon className={styles.icon} />,
  },
  {
    name: 'Real-time Knowledge Exchange',
    description:
      'Share Knowledge with the GEO Community in real-time using interactive chat and feedback spaces.',
    icon: <UsersIcon className={styles.icon} />,
  },
  {
    name: 'Thematic search',
    description:
      'Search for applications using Global framework like SDGs, Sendai Framework and Paris Agreement as criteria.',
    icon: <MagnifyingGlassCircleIcon className={styles.icon} />,
  },
  {
    name: 'Spatiotemporal search',
    description: 'Search packages and resources by regions around the world.',
    icon: <GlobeAmericasIcon className={styles.icon} />,
  },
  {
    name: 'Interoperability',
    description:
      'Access the published materials using well-know standards such as OAI-PMH.',
    icon: <LinkIcon className={styles.icon} />,
  },
  {
    name: 'Rest API',
    description: 'Access and ingest data using a rich Rest API.',
    icon: <Square2StackIcon className={styles.icon} />,
  },
  {
    name: 'Preservation friendly',
    description:
      'Persistent identifiers (DOI) by default and execution of continuous data consistency validation.',
    icon: <ShieldCheckIcon className={styles.icon} />,
  },
  {
    name: 'Based on GEO Principles',
    description: 'Created based on GEO Data Management and Sharing principles.',
    icon: <DocumentDuplicateIcon className={styles.icon} />,
  },
];

export default function ApplicationFeatures() {
  return (
    <div class="container">
      <div class="row">
        {features.map((feature) => (
          <div class="col col--6">
            <div class="col-demo">
              <div class="card-demo margin--xs">
                <div class="card shadow--lw" style={{ minHeight: '150px' }}>
                  <div class="card__header">
                    <h3>
                      {feature.icon} {feature.name}
                    </h3>
                  </div>
                  <div class="card__body">
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
