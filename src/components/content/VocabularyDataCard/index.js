/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import {
  IdentificationIcon,
  ArrowRightCircleIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

import clsx from 'clsx';

import styles from './styles.module.css';

export default function VocabularyDataCard({
  title,
  description,
  sourceName,
  sourceLink,
  updatedAt,
  md5,
}) {
  return (
    <div className={clsx('card shadow--md margin--md', styles.card)}>
      <div className={clsx('card__header', styles.container)}>
        <h3>{title}</h3>
        <span className="badge badge--secondary">{sourceName}</span>
      </div>
      <div className={clsx('card__body', styles.contentContainer)}>
        <p className={styles.text}>{description}</p>

        <div className={styles.metadataContainer}>
          <div className={styles.content}>
            <div>
              <CalendarIcon className={styles.icon} />
            </div>
            <p className={styles.text}>
              <b>Last update</b>: {updatedAt}
            </p>
          </div>
          <div className={styles.contentMD5}>
            <div>
              <IdentificationIcon className={styles.icon} />
            </div>
            <p className={styles.text}>
              <b>Checksum</b>: {md5}
            </p>
          </div>
        </div>
      </div>
      <div className={clsx('card__footer', styles.cardFooter)}>
        <a
          href={sourceLink}
          className="button button--primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowRightCircleIcon className={styles.icon} /> Access source
        </a>
      </div>
    </div>
  );
}
