import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/_next/', '/api/', '/admin/'],
            },
            {
                userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'CCBot', 'PerplexityBot'],
                allow: '/',
            }
        ],
        sitemap: 'https://martechrise.ai/sitemap.xml',
    };
}
