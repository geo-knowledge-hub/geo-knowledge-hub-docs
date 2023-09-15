/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022-2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import clsx from 'clsx';

import _orderBy from 'lodash/orderBy';

import styles from './styles.module.css';

/**
 * Event Item component.
 */
const EventItem = ({ eventData }) => {
  return (
    <div className={clsx('padding-vert--md', styles.timelineItem)}>
      <div className="row">
        <div className={'col col--2'}>
          <div className={styles.date}>
            <h4>{eventData.date.toUTCString()}</h4>
          </div>
        </div>
        <div className={'col col--1'}>
          <div className={styles.circle}></div>
          <div className={styles.line}></div>
        </div>
        <div className="col col--9">
          <div className={clsx('card', styles.card)}>
            <div className={clsx('card__header', styles.titleContainer)}>
              <div className={styles.badgeContainer}>
                <span className={'badge badge--primary'}>
                  {eventData.category}
                </span>

                {eventData.isPastEvent ? (
                  <span className={'badge badge--warning'}>Done</span>
                ) : (
                  <span className={'badge badge--success'}>Upcoming</span>
                )}
              </div>
              <h3 className={styles.cardTitle}>{eventData.title}</h3>
            </div>
            <div className={'card__body'}>
              <div className={styles.description}>
                <p>{eventData.description}</p>
              </div>
            </div>
            <div className={clsx('card__footer', styles.footerContainer)}>
              <button
                className={'button button--secondary'}
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

/**
 * Latest events component.
 */
const LatestEvents = ({ events }) => {
  // Sort events by date
  const sortedEvents = _orderBy(events, 'date', ['desc']);

  return (
    <div>
      <div className={styles.timeline}>
        {sortedEvents.map((event, index) => (
          <EventItem key={index} eventData={event} />
        ))}
      </div>
    </div>
  );
};

export default LatestEvents;
