/*
 * This file is part of GEO Knowledge Hub Docs.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO Knowledge Hub Docs is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GEO Knowledge Hub',
  tagline:
    'The open-source digital library for open, authoritative and reproducible knowledge',
  url:
    process.env.GEO_KNOWLEDGE_HUB_DOCS_URL ||
    'https://gkhub.earthobservations.org/',
  baseUrl: '/doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GEO Secretariat',
  projectName: 'geo-knowledge-hub-docs',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'reference',
        path: 'extras/reference',
        routeBasePath: 'reference',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'development',
        path: 'extras/development',
        routeBasePath: 'development',
      },
    ],
    require.resolve('@cmfcmf/docusaurus-search-local'),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GEO Knowledge Hub',
        logo: {
          alt: 'GEO Knowledge Hub',
          src: 'img/base/logo-gkhub.svg',
        },
        items: [
          {
            to: 'https://gkhub.earthobservations.org/feed',
            position: 'left',
            label: 'Feed',
            target: '_self'
          },
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'User guides',
          },
          // Temporary disabled
          // { to: "/reference/introduction", label: "Reference", position: "left" },
          {
            to: '/development/introduction',
            label: 'Development',
            position: 'left',
          },
          {
            to: 'releases',
            label: 'Releases',
            position: 'left'
          },
          {
            href: 'https://github.com/geo-knowledge-hub',
            label: 'GitHub',
            position: 'right',
          }
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/channels/730739436551143514',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/geosec2025',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCFJ97Bp2XXA5p7ik_wWSoqg',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/geo-knowledge-hub',
              },
            ],
          },
        ],
        copyright: `GEO Knowledge Hub ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
