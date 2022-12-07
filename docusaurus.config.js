// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "GEO Knowledge Hub",
  tagline:
    "The open-source digital-library for open, authoritative and reproducible knowledge",
  url: "https://gkhub.earthobservations.org/",
  baseUrl: "/doc/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "GEO Secretariat",
  projectName: "geo-knowledge-hub-docs",
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "reference",
        path: "reference",
        routeBasePath: "reference",
      },
    ],
    require.resolve("@cmfcmf/docusaurus-search-local"),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "GEO Knowledge Hub Documentation",
        logo: {
          alt: "GEO Knowledge Hub",
          src: "img/base/logo-blue.svg",
        },
        items: [
          { to: 'showcase', label: 'Showcase', position: 'left' },
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Documentation",
          },
          { to: "/reference/introduction", label: "Reference", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/geo-knowledge-hub",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Introduction",
                to: "/docs/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/channels/730739436551143514",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/geosec2025",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCFJ97Bp2XXA5p7ik_wWSoqg",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/geo-knowledge-hub",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GEO Secretariat. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
