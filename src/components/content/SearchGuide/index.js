/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';

import { SearchPanel } from './panel';

/**
 * Search guide component.
 */
const SearchGuide = () => {
  const searchQueryExamples = [
    {
      title: 'Example 1',
      description: <span>Basic example</span>,
      type: 'Basic',
      theme: 'Terms',
      code: 'expression',
    },
    {
      title: 'Example 1',
      description: <span>Basic example</span>,
      type: 'Basic',
      theme: 'Phrases',
      code: 'expression',
    },
    {
      title: 'Example 1',
      description: <span>Basic example</span>,
      type: 'Basic',
      theme: 'Fields',
      code: 'expression',
    },
    {
      title: 'Example 1',
      description: <span>Basic example</span>,
      type: 'Basic',
      theme: 'Combined',
      code: 'expression',
    },
    {
      title: 'Example 1',
      description: <span>Basic example</span>,
      type: 'Basic',
      theme: 'Range',
      code: 'expression',
    },
    {
      title: 'Example 1',
      description: <span>Basic example</span>,
      type: 'Basic',
      theme: 'Regular expression',
      code: 'expression',
    },
    {
      title: 'Example 1',
      description: <span>Basic example</span>,
      type: 'Basic',
      theme: 'Missing values',
      code: 'expression',
    },
    {
      title: 'Example 1',
      description: <span>Advanced example</span>,
      type: 'Advanced',
      theme: 'Boosting',
      code: 'expression',
    },
    {
      title: 'Example 1',
      description: <span>Advanced example</span>,
      type: 'Advanced',
      theme: 'Fuzziness',
      code: 'expression',
    },
    {
      title: 'Example 1',
      description: <span>Advanced example</span>,
      type: 'Advanced',
      theme: 'Proximity searches',
      code: 'expression',
    },
  ];

  return <SearchPanel searchQueryExamples={searchQueryExamples} />;
};

export default SearchGuide;
