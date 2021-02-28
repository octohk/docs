module.exports = {
    title: 'Octohook documentation',
    description: 'Documentation for octohook.com',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
    ],
    themeConfig: {
        logo: '/logo.png',
        lastUpdated: 'Last Updated',
        docsRepo: 'octohk/docs',
        editLinks: true,
        editLinkText: 'Edit this page',
        nav: [
            { text: 'Documentation', link: '/' },
            { text: 'Back to Octohook', link: 'https://octohook.com' },
        ],
        sidebar: [
            {
                title: 'Getting Started',
                collapsable: false,
                children: [
                    ['/', 'Introduction'],
                    '/getting-started/teams',
                    '/getting-started/sources',
                    '/getting-started/workflows',
                    '/getting-started/integrations',
                ],
            },
            {
                title: 'Workflow Nodes',
                collapsable: true,
                children: [
                    '/workflows/fill-template',
                ],
            },
            {
                title: 'Integrations',
                collapsable: true,
                children: [
                    '/integrations/github',
                    '/integrations/segment',
                    '/integrations/sentry',
                ],
            },
        ],
    },
    domain: 'https://docs.octohook.com/',
    plugins: {
        'seo': {
            type: _ => 'website',
            description: (_, $site) => $site.description,
            // image: (_, $site) => $site.domain + 'hero.png',
        }
    },
}