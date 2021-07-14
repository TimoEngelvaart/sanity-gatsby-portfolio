export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60eeea22edad953c62b91b20',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dvm8hnsc',
                  apiId: '33c64e02-2bdb-4583-bb00-e73c969c2b1f'
                },
                {
                  buildHookId: '60eeea23ea32383b7a8e7bcf',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-h2o5o4jb',
                  apiId: '154e0eb3-a03b-483b-8bd4-91fb3fd64e9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TimoEngelvaart/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-h2o5o4jb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
