import React from 'react';
import clsx from "clsx";
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
