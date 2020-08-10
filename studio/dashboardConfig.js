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
                  buildHookId: '5f31b7408288ad25a7bf6444',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-38bdp81g',
                  apiId: 'bd7c41a2-a06c-4c74-9df0-971deefca67b'
                },
                {
                  buildHookId: '5f31b740ea11bf558bacfe85',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1u1ir822',
                  apiId: 'e7759c02-87fa-40e2-a3fe-ffc1a9ddbf09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geisera/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1u1ir822.netlify.app', category: 'apps'}
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
