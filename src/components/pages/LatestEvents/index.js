/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022-2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

const EventItem = ({ eventData }) => {
  return (
    <div className={clsx('padding-vert--md', styles.timelineItem)}>
      <div className="row">
        <div className={'col col--2'}>
          <div className={styles.date}>
            <h4>{eventData.date}</h4>
          </div>
        </div>
        <div className={'col col--1'}>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
        </div>
        <div className="col col--9">
          <div className={clsx('card', styles.card)}>
            <div className={clsx('card__header', styles.flexContainer)}>
              <h3>{eventData.title}</h3>
              <div>
                <span className="badge badge--primary">
                  {eventData.category}
                </span>
              </div>
            </div>
            <div className="card__body">
              <div className={styles.description}>
                <p>{eventData.description}</p>
              </div>
            </div>
            <div
              className={clsx(
                'card__footer',
                styles.flexContainer,
                styles.flexEnd,
                styles.moreButtonContainer
              )}
            >
              <button
                className="button button--secondary"
                onClick={() => window.open(eventData.url, '_blank').focus()}
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

const LatestEvents = ({ events }) => {
  return (
    <div>
      <div className={styles.timeline}>
        {events.map((event, index) => (
          <EventItem key={index} eventData={event} />
        ))}
      </div>
    </div>
  );
};

export default LatestEvents;
