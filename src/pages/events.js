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

import LatestEvents from '@site/src/components/pages/LatestEvents';
import SpinnerLoading from '@site/src/components/utils/SpinnerLoading';

import styles from './releases.module.css';

import { fetchEvents } from '../resources';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

/* 
  Page data
*/
const fetchUrl =
  'https://gkhub.earthobservations.org:8443/api/events?sort[0]=date&pagination[limit]=50';

/* 
  Page component 
*/
function Events() {
  // Hooks
  const {
    data: events,
    isFetching,
    error,
  } = useQuery({
    queryKey: ['latest-events'],
    queryFn: () => {
      return fetchEvents(fetchUrl);
    },
    staleTime: 300000, // 5 minutes
  });

  const mutatedEvents = !isFetching
    ? events.map((row) => {
        const currentDate = new Date();
        const rowDate = new Date(row.attributes.date);

        const isPastEvent = currentDate > rowDate;

        return {
          title: row.attributes.title,
          description: row.attributes.description,
          category: row.attributes.category,
          date: rowDate,
          location: row.attributes.location,
          url: row.attributes.url,
          isPastEvent: isPastEvent,
        };
      })
    : [];

  return (
    <Layout
      title="Events and trains"
      description="Events related to the GEO Knowledge Hub"
    >
      <header className={clsx('hero shadow--lw margin-top--md', styles.hero)}>
        <div className="container">
          <h1 className="hero__title">Upcoming training and events</h1>
          <p className="hero__subtitle">
            Check out the upcoming training and events related to the GEO
            Knowledge Hub
          </p>
        </div>
      </header>

      <main>
        <div
          className={clsx(
            'margin-top--xl margin-bottom--lg',
            styles.timelineContainer
          )}
        >
          <div className={'container'}>
            <div className={'row flex-centered'}>
              <div className={'col col--11'}>
                {isFetching ? (
                  <SpinnerLoading />
                ) : (
                  <LatestEvents events={mutatedEvents} />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default function EventsPage() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Events />
    </QueryClientProvider>
  );
}
