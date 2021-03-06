module.exports = {
  title: 'The Radicle Registry',
  tagline: 'The Radicle Registry Developer Hub',
  url: 'https://registry.radicle.xyz',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'radicle-dev', // Usually your GitHub org/user name.
  projectName: 'registry.radicle.xyz', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: 'Radicle Registry',
      logo: {
        alt: 'Radicle Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/docs/intro', label: 'Docs', position: 'left'},
        {href: 'https://radicle.community', label: 'Community', position: 'left'},
        {to: '/docs/faq', label: 'FAQ', position: 'left'},
        {
          href: 'https://github.com/radicle-dev',
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
              label: 'Intro',
              to: '/docs/intro',
            },
            {
              label: 'Getting started',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '#radicle Freenode ',
              href: 'irc://irc.freenode.net/radicle',
            },
            {
              label: 'Forum',
              href: 'https://radicle.community/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/radicle-dev',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/radicle_xyz',
            },
          ],
        },
      ],
      copyright: `supported by monadic.xyz with ♡`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          //routeBasePath: '', // Set to empty string to remove /doc/
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/radicle-dev/registry.radicle.xyz/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
