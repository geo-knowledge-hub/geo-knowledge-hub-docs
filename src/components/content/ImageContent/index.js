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

export default function ImageContent({ imagePath, imageAlt }) {
  return (
    <div className={clsx(['centered', styles.imageBox])}>
      <div>
        <img
          src={imagePath}
          alt={imageAlt}
          className={clsx([styles.tinyImage, styles.imageContent])}
        />
      </div>
      <div>
        <b>Figure</b>: {imageAlt}
      </div>
    </div>
  );
}
