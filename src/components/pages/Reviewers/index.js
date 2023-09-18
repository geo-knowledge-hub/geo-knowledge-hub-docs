/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022-2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import styles from './styles.module.css';

/**
 * Reviewer item component.
 */
const ReviewerItem = ({ reviewerData }) => (
  <div className={styles.card}>
    <img
      src={reviewerData.avatar}
      alt={`${reviewerData.name}'s avatar`}
      className={styles.card__image}
    />
    <div className={styles.card__header}>
      <div className={styles.card__name}>
        <b>{reviewerData.name}</b>
      </div>

      <div className={styles.card__badges}>
        {reviewerData.linkedin && (
          <span class={'badge badge--secondary'}>
            <a
              href={reviewerData.linkedin}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              LinkedIn
            </a>
          </span>
        )}
        {reviewerData.orcid && (
          <span class={'badge badge--secondary'}>
            <a
              href={reviewerData.orcid}
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              ORCID
            </a>
          </span>
        )}
      </div>
    </div>
    <div className={styles.card__body}>
      <p>{reviewerData.organization}</p>
    </div>
  </div>
);

/**
 * Reviewers component.
 */
const Reviewers = ({ reviewers }) => {
  return (
    <div className={'container'}>
      <div className={'row'}>
        {reviewers.map((reviewer, index) => (
          <div className={'col col--4'} key={index}>
            <ReviewerItem key={index} reviewerData={reviewer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviewers;
