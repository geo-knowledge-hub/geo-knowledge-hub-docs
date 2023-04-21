/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import React, { lazy, Suspense } from 'react';

// Leaflet
import 'leaflet/dist/leaflet.css';

// Leaflet Fullscreen
import 'leaflet.fullscreen/Control.FullScreen.css';

import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';

import Hero from '@site/src/components/pages/Hero';
import Platform from '@site/src/components/pages/Platform';
import Contribute from '@site/src/components/pages/Contribute';

const Discover = lazy(() => import('../components/pages/Discover'));

/**
 * Home page component.
 */
const HomePage = () => {
  // Add Netlify Identity script
  if (typeof window !== 'undefined') {
    // browser code
    const document = window.document;
    let script = document.createElement('script');
    script.innerHTML = `
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }
      `;
    document.head.appendChild(script);
  }

  return (
    <Layout
      title={'Documentation'}
      description="GEO Knowledge Hub Documentation page"
    >
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <main>
        <Hero />
      </main>

      <section>
        <Platform />
      </section>

      <section>
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Discover />
            </Suspense>
          )}
        </BrowserOnly>
      </section>

      <section>
        <Contribute />
      </section>
    </Layout>
  );
};

export default HomePage;
