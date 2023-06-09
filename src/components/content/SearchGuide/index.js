/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import Admonition from '@theme-original/Admonition';

import { SearchPanel } from './panel';

/**
 * Search guide component.
 */
const SearchGuide = () => {
  const searchQueryExamples = [
    {
      title: 'Example 1',
      description: (
        <span>
          Results with match records (Packages and resources) with the terms{' '}
          <code>open</code> or <code>science</code> in <i>any field</i>. Note
          that <i>stemming</i> is applied. So, for example, <code>science</code>{' '}
          will also match <code>sciences</code>.
        </span>
      ),
      type: 'Basic',
      theme: 'Terms',
      code: 'open science',
    },
    {
      title: 'Example 2',
      description: (
        <span>
          You can require the <i>presence</i> of both terms using the{' '}
          <code>AND</code> operator.
        </span>
      ),
      type: 'Basic',
      theme: 'Terms',
      code: 'reproducible AND science',
    },
    {
      title: 'Example 3',
      description: (
        <span>
          You can require the <i>presence</i> of both terms using the{' '}
          <code>+</code> operator.
        </span>
      ),
      type: 'Basic',
      theme: 'Terms',
      code: '+reproducible +science',
    },
    {
      title: 'Example 4',
      description: (
        <span>
          You can require the <i>absence</i> of one or more terms using the{' '}
          <code>NOT</code> operator.
        </span>
      ),
      type: 'Basic',
      theme: 'Terms',
      code: 'NOT open AND science',
    },
    {
      title: 'Example 5',
      description: (
        <span>
          You can require the <i>absence</i> of one or more terms using the{' '}
          <code>-</code> operator.
        </span>
      ),
      type: 'Basic',
      theme: 'Terms',
      code: '-open science',
    },

    {
      title: 'Example 1',
      description: (
        <span>
          Results will match records (Packages and resources) with the{' '}
          <i>phrase</i> <code>data cube</code> in any field.
        </span>
      ),
      type: 'Basic',
      theme: 'Phrases',
      code: '"data cube"',
    },
    {
      title: 'Example 2',
      description: (
        <span>
          A second example with a query to find records with the <i>phrase</i>{' '}
          <code>dialogue series</code> in any field.
        </span>
      ),
      type: 'Basic',
      theme: 'Phrases',
      code: '"dialogue series"',
    },
    {
      title: 'Example 1',
      description: (
        <span>
          Results will match records with the <i>term</i> <code>open</code> in
          the <i>field</i> <code>metadata.title</code>.
        </span>
      ),
      type: 'Basic',
      theme: 'Fields',
      code: 'metadata.title:open',
    },
    {
      title: 'Example 2',
      description: (
        <span>
          If you want to search for multiple terms in the{' '}
          <code>metadata.title</code>, you must <b>group the terms</b> using
          parenthesis:
        </span>
      ),
      type: 'Basic',
      theme: 'Fields',
      code: 'metadata.title:(open science)',
    },
    {
      title: 'Example 1',
      description: (
        <span>
          You can combine <code>simple</code>, <code>phrases</code>, and{' '}
          <code>field</code> queries to construct advanced search queries.
        </span>
      ),
      type: 'Basic',
      theme: 'Combined',
      code: '+metadata.title:"open science" -metadata.title:policy',
    },
    {
      title: 'Example 2',
      description: <span>Other example using fields and basic queries.</span>,
      type: 'Basic',
      theme: 'Combined',
      code: 'metadata.title:(-open +science)',
    },
    {
      title: 'Example 1',
      description: (
        <div>
          <div>
            Results will match any record with a publication date between{' '}
            <code>2017-01-01</code> and <code>2018-01-01</code> (both dates
            inclusive).
          </div>

          <br />

          <Admonition type="note" icon="💡" title="Tip">
            <div>Note that, partial dates are expanded to full dates:</div>

            <div>
              <ul>
                <li>2017 is expanded to 2017-01-01</li>
                <li>2017-06 is expanded to 2017-06-01</li>
              </ul>
            </div>
          </Admonition>
        </div>
      ),
      type: 'Basic',
      theme: 'Range',
      code: 'metadata.publication_date:[2017 TO 2018]',
    },
    {
      title: 'Example 2',
      description: (
        <span>
          Use square brackets (<code>[]</code>) for <i>inclusive ranges</i> (all dates from 2019 to 2022, including the first day of 2019 and the first day of 2022).
        </span>
      ),
      type: 'Basic',
      theme: 'Range',
      code: 'metadata.publication_date:[2019 TO 2022]',
    },
    {
      title: 'Example 3',
      description: (
        <span>
          Use curly brackets (<code>{'{'}{'}'}</code>) for <i>exclusive ranges</i> (all dates from 2019 to 2022, excluding the first day of 2019 and the first day of 2022).
        </span>
      ),
      type: 'Basic',
      theme: 'Range',
      code: 'metadata.publication_date:{2019 TO 2022}',
    },
    {
      title: 'Example 4',
      description: (
        <span>
          Use <code>*</code> to represent <i>any date</i>. For example, a query to
          search for all publication dates until 2017. Square and curly brackets
          can be used following the same rule defined in the previous examples.
        </span>
      ),
      type: 'Basic',
      theme: 'Range',
      code: 'metadata.publication_date:[* TO 2017]',
    },
    {
      title: 'Example 1',
      description: (
        <div>
          <div>
            Regular expressions are a powerful pattern matching language that allow to search for specific patterns in a field. For instance if you want to find all records with a DOI-prefix <code>10.1080</code>.
          </div>

          <br />

          <Admonition type="note" icon="💡" title="Tip">
            <div>
              Careful, the regular expression must match the entire field value. See the <a href="https://opensearch.org/docs/1.2/opensearch/query-dsl/term/#regex" target="_blank">regular expression syntax for further details</a>.
            </div>
          </Admonition>
        </div>
      ),
      type: 'Basic',
      theme: 'Regular expression',
      code: 'pids.doi.identifier:/10.1080-*/',
    },
    {
      title: 'Example 1',
      description: (
        <span>
          You can use the boost operator <code>^</code> when one term is more relevant than another. For instance, you can search for all records with the <i>phrase</i> <code>open science</code> in either <code>title</code> or <code>description</code> field, but rank records with the <i>phrase</i> in the <code>title</code> as the most appropriate result.
        </span>
      ),
      type: 'Advanced',
      theme: 'Boosting',
      code: 'metadata.title:"open science"^5 metadata.description:"open science"',
    },
    {
      title: 'Example 1',
      description: (
        <span>
          You can search for terms similar to but not exactly like your search term using the fuzzy operator <code>~</code>. For example, fuzziness with something like "cube".
        </span>
      ),
      type: 'Advanced',
      theme: 'Fuzziness',
      code: 'cbe~',
    },
    {
      title: 'Example 1',
      description: (
        <span>
          A <i>phrase</i> search like <code>"open science"</code> by default expect all term in exactly the same order, and thus, for instance, would not match a record containing the phrase "open access and science". A proximity search allows that the terms are not in the exact order and may include other terms in between. The proximity degree is specified by an interger after the <code>~</code> operator.
        </span>
      ),
      type: 'Advanced',
      theme: 'Proximity searches',
      code: '"open science"~5',
    },
    {
      title: 'Example 1',
      description: (
        <span>
          You can use the <code>?</code> wildcard operator in search terms to replace a single character.
        </span>
      ),
      type: 'Advanced',
      theme: 'Wildcards',
      code: 'ope?',
    },
    {
      title: 'Example 2',
      description: (
        <span>
          In the same way, you can use the <code>*</code> wildcard operator in search terms to replace zero or many characters.
        </span>
      ),
      type: 'Advanced',
      theme: 'Wildcards',
      code: 'scien*',
    },
    {
      title: 'Example 3',
      description: (
        <span>
          Both wildcard operators (<code>?</code> and <code>*</code>) can be combined.
        </span>
      ),
      type: 'Advanced',
      theme: 'Wildcards',
      code: 'ope? scien*',
    },
  ];

  return <SearchPanel searchQueryExamples={searchQueryExamples} />;
};

export default SearchGuide;
