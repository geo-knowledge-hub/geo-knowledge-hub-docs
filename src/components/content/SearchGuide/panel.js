/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import styles from './panel.module.css';

// Configuring GEO Knowledge Hub API address
const gkhubApiAddress = 'https://gkhub.earthobservations.org';

/**
 * Search panel component to present query examples.
 */
export const SearchPanel = ({ searchQueryExamples, itemsPerPage = 3 }) => {
  // States
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState('Basic');
  const [selectedTheme, setSelectedTheme] = useState(null);

  // Data
  const themes = searchQueryExamples
    .map((e) => ({ name: e.theme, type: e.type }))
    .filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.name === value.name)
    );

  const types = Array.from(new Set(searchQueryExamples.map((e) => e.type)));

  const filteredExamples = searchQueryExamples.filter((queryExampleRow) => {
    if (selectedTheme === 'all') {
      return queryExampleRow.type === selectedTab;
    }

    return (
      queryExampleRow.theme === selectedTheme &&
      queryExampleRow.type === selectedTab
    );
  });

  // Pagination
  const totalPages = Math.ceil(filteredExamples.length / itemsPerPage);

  const paginatedExamples = filteredExamples.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Hooks
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTheme, selectedTab]);

  useEffect(() => {
    setSelectedTheme(null);
  }, [selectedTab]);

  return (
    <div className={'container'}>
      <div className={'row'}>
        <ul className={'tabs tabs--block'}>
          {types.map((type, index) => (
            <li
              key={index}
              className={`tabs__item ${
                selectedTab === type ? 'tabs__item--active' : ''
              }`}
              onClick={() => {
                setSelectedTab(type);
              }}
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
      <div className={'row'}>
        <div className={styles.segment}>
          <p>
            These tabs show examples of each query type that can be performed in
            GEO Knowledge Hub. Start exploring by clicking on the tabs. In the
            desired tab, choose the example query and use it. You can edit the
            example and adapt it to your needs.
          </p>
          <ul className={'pills pills--block'}>
            {themes
              .filter((theme) => theme.type === selectedTab)
              .map((theme, index) => (
                <li
                  key={index}
                  className={`pills__item ${
                    selectedTheme === theme.name ? 'pills__item--active' : ''
                  }`}
                  onClick={() => {
                    let valueToSet =
                      selectedTheme === theme.name ? null : theme.name;
                    setSelectedTheme(valueToSet);
                  }}
                >
                  {theme.name}
                </li>
              ))}
          </ul>

          <div className={'container'}>
            <div className={'row'}>
              {paginatedExamples.map((example, index) => (
                <div key={index} className={'col col--12 margin-top--md'}>
                  <div
                    className={clsx(
                      'card',
                      'margin-bottom--md',
                      styles.cardShadow
                    )}
                  >
                    <div className="card__header">
                      <h3>{example.title}</h3>
                    </div>
                    <div className="card__body">
                      <p>{example.description}</p>
                      <pre contentEditable id={`${example.title}-${index}`}>
                        {example.code}
                      </pre>
                    </div>
                    <div className={clsx('card__footer', styles.accessButton)}>
                      <button
                        className="button button--success"
                        onClick={() => {
                          const exampleValue = document.getElementById(
                            `${example.title}-${index}`
                          ).innerText;
                          const componentsUrl = encodeURIComponent(
                            `${exampleValue}`
                          );
                          const exampleUrl = `${gkhubApiAddress}/search?q=${componentsUrl}`;

                          window.open(exampleUrl);
                        }}
                      >
                        Use
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedTheme !== null ? (
              <div className={'row flex-centered'}>
                <nav>
                  <ul className="pagination">
                    <li
                      className={`pagination__item ${
                        currentPage === 1 ? 'disabled' : ''
                      }`}
                    >
                      <a
                        className={'pagination__link'}
                        onClick={() => {
                          if (currentPage !== 1) {
                            setCurrentPage(currentPage - 1);
                          }
                        }}
                      >
                        Previous
                      </a>
                    </li>
                    {[...Array(totalPages)].map((_, index) => (
                      <li
                        key={index}
                        className={`pagination__item ${
                          currentPage === index + 1 ? 'disabled' : 'active'
                        }`}
                      >
                        <a
                          className="pagination__link"
                          onClick={() => setCurrentPage(index + 1)}
                          href={'#'}
                        >
                          {index + 1}
                        </a>
                      </li>
                    ))}
                    <li
                      className={`pagination__item ${
                        currentPage === totalPages ? 'disabled' : ''
                      }`}
                    >
                      <a
                        className="pagination__link"
                        onClick={() => setCurrentPage(currentPage + 1)}
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
