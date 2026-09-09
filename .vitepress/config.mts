import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NativeDev',
  description: 'Native Linux development environment manager for Debian and Ubuntu',
  lang: 'en-US',

  // GitHub Pages project-page deployment: https://sayedsahin.github.io/nativedev/
  // Change this if the repository name or deployment target is different.
  base: '/nativedev/',

  head: [
    ['link', { rel: 'icon', href: '/nativedev/images/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap' }],
    ['meta', { name: 'theme-color', content: '#1F6F6B' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'NativeDev Documentation' }],
    ['meta', { property: 'og:description', content: 'Native Linux development environment manager for Debian and Ubuntu based distributions.' }],
  ],

  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  // README.md here is project/setup notes for maintainers, not a docs page.
  srcExclude: ['README.md'],

  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    lineNumbers: false,
  },

  themeConfig: {
    logo: { light: '/images/logo-mark.svg', dark: '/images/logo-mark-dark.svg' },
    siteTitle: 'NativeDev',

    nav: [
      { text: 'Guide', link: '/getting-started', activeMatch: '^/(getting-started|features)/?' },
      { text: 'Reference', link: '/architecture', activeMatch: '^/(architecture|security|updating|uninstalling|troubleshooting)' },
      { text: 'FAQ', link: '/faq' },
      {
        text: 'Links',
        items: [
          { text: 'Releases', link: 'https://github.com/sayedsahin/nativedev/releases' },
          { text: 'Report an issue', link: 'https://github.com/sayedsahin/nativedev/issues' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Installation & First Launch', link: '/getting-started' },
        ],
      },
      {
        text: 'Features',
        items: [
          { text: 'Dashboard', link: '/features/dashboard' },
          { text: 'Local Development', link: '/features/local-development' },
          { text: 'PHP Management', link: '/features/php' },
          { text: 'Node.js Management', link: '/features/nodejs' },
          { text: 'Services & Databases', link: '/features/services-and-databases' },
          { text: 'Developer Tools', link: '/features/developer-tools' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Architecture', link: '/architecture' },
          { text: 'Security Model', link: '/security' },
          { text: 'Updating', link: '/updating' },
          { text: 'Uninstalling', link: '/uninstalling' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
        ],
      },
      {
        text: 'Development',
        items: [
          { text: 'Contributing', link: '/contributing' },
          { text: 'FAQ', link: '/faq' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sayedsahin/nativedev' },
    ],

    editLink: {
      pattern: 'https://github.com/sayedsahin/nativedev/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
      label: 'On this page',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © NativeDev contributors',
    },

    lastUpdatedText: 'Last updated',

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
  },
})
