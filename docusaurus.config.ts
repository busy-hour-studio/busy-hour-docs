// Note: type annotations allow type checking and IDEs autocompletion

import type { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config = {
  title: 'Busy Hour',
  tagline:
    'Built-in in-app messaging, video & audio calls, and activity feeds wihout headaches.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.busyhour.id',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/busy-hour-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'busy-hour-studio', // Usually your GitHub org/user name.
  projectName: 'busy-hour-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/',
        },
        blog: false,
        //  {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Busy Hour',
        logo: {
          alt: 'Busy Hour Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Busy-Hour-Studio/busy-hour-docs/tree/main',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'React',
                to: 'docs/react',
              },
              {
                label: 'React Native',
                to: 'docs/react-native',
              },
              {
                label: 'Node.js',
                to: '/docs/nodejs',
              },
              {
                label: 'More',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://x.com/busyhourcare',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Dashboard',
                href: 'https://busyhour.id/dashboard',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/busy-hour-studio',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Busy Hour. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    },
  plugins: ['docusaurus-plugin-sass'],
} satisfies Config;

module.exports = config;
