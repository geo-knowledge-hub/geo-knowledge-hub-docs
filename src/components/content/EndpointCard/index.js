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

export default function EndpointCard({
  title,
  endpoint,
  description,
  baseUrl,
}) {
  // Auxiliary variables
  const id = title.replace(/\s+/g, '-').toLowerCase();
  const apiAddress = `${baseUrl}/${endpoint}`;

  // Auxiliary functions
  const copyToClipboard = () => {
    navigator.clipboard.writeText(endpoint);
  };

  return (
    <div className={clsx('card', styles.card)}>
      <div className={clsx('card__header', styles.header)}>
        <h3>
          <a href={`#${id}`} className={styles.anchor}>
            {title}
          </a>
        </h3>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
      <div
        className={clsx(
          'card__footer',
          'padding-horizontal--md',
          'padding-vertical--sm',
          styles.footer
        )}
      >
        <div className={styles.buttonGroup}>
          <button
            onClick={copyToClipboard}
            className={clsx('button', 'button--secondary')}
          >
            Copy endpoint
          </button>

          <a
            className={clsx('button', 'button--primary')}
            href={apiAddress}
            target="_blank"
          >
            Access
          </a>
        </div>
      </div>
    </div>
  );
}
