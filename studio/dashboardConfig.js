export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-ny-studio',
                  apiId: 'ebfb468f-63fd-4449-9882-6ee5d6b2b1e9'
                },
                {
                  buildHookId: '5f74ea0527760c008adeff1d',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-ny',
                  apiId: 'f0aff7a1-4232-4da2-a9c4-4f82165fa09a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fmeyer1980/sanity-nuxt-events-ny',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-ny.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
