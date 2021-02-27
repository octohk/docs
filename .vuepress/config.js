var emoji = 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/octopus_1f419.png'

module.exports = {
    title: 'Octohook documentation',
    description: 'Documentation for octohook.com',
    head: [
        ['link', { rel: 'icon', href: emoji }],
    ],
    themeConfig: {
        logo: emoji,
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
                    '/getting-started/sources',
                ],
            },
            {
                title: 'Integrations',
                collapsable: true,
                children: [
                    '/integrations/intro',
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