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

const TimelineItem = ({ date, title, badge, description, link }) => {
  return (
    <div className={clsx('padding-vert--md', styles.timelineItem)}>
      <div className="row">
        <div className={'col col--2'}>
          <div className={styles.date}>
            <h4>{date}</h4>
          </div>
        </div>
        <div className={'col col--1'}>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
        </div>
        <div className="col col--9">
          <div className={clsx('card', styles.card)}>
            <div className={clsx('card__header', styles.flexContainer)}>
              <h3>{title}</h3>
              <div>
                <span className="badge badge--primary">{badge}</span>
              </div>
            </div>
            <div className="card__body">
              <p>{description}</p>
            </div>
            <div
              className={clsx(
                'card__footer',
                styles.flexContainer,
                styles.flexEnd
              )}
            >
              <button
                className="button button--secondary"
                onClick={() => (window.location.href = link)}
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReleaseTimeline = ({ items }) => {
  return (
    <div className={styles.timeline}>
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ReleaseTimeline;
