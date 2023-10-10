/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022-2023 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React from 'react';
import Layout from '@theme/Layout';

import clsx from 'clsx';

import Reviewers from '@site/src/components/pages/Reviewers';
import SpinnerLoading from '@site/src/components/utils/SpinnerLoading';

import styles from './style.module.css';

import { fetchReviewers } from '../../resources';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

/* 
  Page data
*/
const assetsUrl = 'https://gkhub.earthobservations.org:10443';

const fetchUrl =
  'https://gkhub.earthobservations.org:10443/api/users?populate=*&pagination[limit]=50';

/* 
  Page component 
*/
function ReviewersPageComponent() {
  // Hooks
  const {
    data: reviewers,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['reviewers'],
    queryFn: () => {
      return fetchReviewers(fetchUrl);
    },
    staleTime: 300000, // 5 minutes
  });

  const mutatedReviewers = !isFetching
    ? reviewers.map((row) => ({
        name: row.name,
        linkedin: row.linkedin,
        orcid: row.orcid,
        organization: row.organization,
        avatar: `${assetsUrl}${row.avatar.url}`,
      }))
    : [];

  return (
    <Layout title={'Reviewers'} description={'GEO Knowledge Hub reviewers'}>
      <header className={clsx('hero shadow--lw margin-top--md', styles.hero)}>
        <div className={'container'}>
          <h1 className={'hero__title'}>Reviewers</h1>
          <p className={'hero__subtitle'}>
            Community reviewers of the GEO Knowledge Hub content
          </p>
        </div>
      </header>

      <main>
        <div className={clsx('margin-top--xl margin-bottom--lg')}>
          <div className={'container'}>
            <div className={'row flex-centered'}>
              <div className={'col col--11'}>
                {isFetching ? (
                  <SpinnerLoading />
                ) : (
                  <Reviewers reviewers={mutatedReviewers} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

/**
 * Reviewers page component
 */
export default function ReviewersPage() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReviewersPageComponent />
    </QueryClientProvider>
  );
}
