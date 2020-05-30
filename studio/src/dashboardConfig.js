export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ed295fb02b149a89ab58bd2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-2-studio-t5vprdxo',
                  apiId: '2afb7d11-2fdd-48b2-944b-0d3a5054308f'
                },
                {
                  buildHookId: '5ed295fbd52d634355ecbbbe',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-2-web-xo9pw6iy',
                  apiId: '9cd53811-af79-44c7-a874-8124715b7f43'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cassette88/sanity-gatsby-blog-2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-2-web-xo9pw6iy.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
