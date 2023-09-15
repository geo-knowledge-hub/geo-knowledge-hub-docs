/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React, { lazy, Suspense } from 'react';

// Leaflet
import 'leaflet.fullscreen';
import 'leaflet/dist/leaflet.css';

// Leaflet Fullscreen
import 'leaflet.fullscreen/Control.FullScreen.css';

import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

import Hero from '@site/src/components/pages/Hero';
import Discover from '@site/src/components/pages/Discover';
import Platform from '@site/src/components/pages/Platform';
import Contribute from '@site/src/components/pages/Contribute';

import { fetchPackages } from '../resources';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

/* 
  Page data
*/
const fetchEndpoint = '/api/packages';
const fetchUrl = 'https://gkhub.earthobservations.org';

const searchEndpoint = 'https://gkhub.earthobservations.org/search';

/* 
  Page component 
*/
const HomeComponent = () => {
  // Hooks
  const { data: records } = useQuery({
    queryKey: ['map-records'],
    queryFn: () => {
      return fetchPackages(fetchEndpoint, {
        baseURL: fetchUrl,
        params: {
          q: '_exists_:metadata.locations',
          size: 150,
        },
      });
    },
    staleTime: 300000, // 5 minutes
  });

  return (
    <Layout
      title={'Documentation'}
      description="GEO Knowledge Hub Documentation page"
    >
      <Head />

      <main>
        <Hero />
      </main>

      <section>
        <Platform />
      </section>

      <section>
        <Discover records={records || []} searchEndpoint={searchEndpoint} />
      </section>

      <section>
        <Contribute />
      </section>
    </Layout>
  );
};

/**
 * Home page component.
 */
const HomePage = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HomeComponent />
    </QueryClientProvider>
  );
};

export default HomePage;
