export default {
  widgets: [
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
                  buildHookId: '5f7bd129bd98afb796c040c2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4tarvurd',
                  apiId: '0b8409bd-7e3e-43ef-8331-2182d7b8e1b6'
                },
                {
                  buildHookId: '5f7bd12aae4c38a45dda4cc6',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yoc98q8g',
                  apiId: '7e68e375-8cae-4919-a7b8-28a64cb4e067'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mxayon/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yoc98q8g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
