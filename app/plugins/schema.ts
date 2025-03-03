import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin({
  name: 'schema-org-plugin',
  enforce: 'pre', // Run before other plugins
  setup() {
    useSchemaOrg({
      identity: {
        type: 'Person',
        name: 'Rusu Răzvan',
        url: 'https://rusu.me',
        jobTitle: 'Web Developer & Designer',
        image: 'https://rusu.me/avatar.png',
        sameAs: [
          'https://github.com/rzrusu',
          'https://www.behance.net/rzrusu',
        ],
      },
      website: {
        type: 'WebSite',
        name: 'Rusu Răzvan - Portfolio',
        url: 'https://rusu.me',
      },
      webpage: [
        {
          type: 'WebPage',
          name: 'Rusu Răzvan - Web Developer & Designer',
          description: 'Web developer and designer portfolio showcasing projects, freelance work, and skills.',
        }
      ],
      inLanguage: 'en-US',
    })
  }
}) 