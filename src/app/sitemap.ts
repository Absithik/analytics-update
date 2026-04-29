import { MetadataRoute } from 'next';
import { SERVICES, CASE_STUDIES } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://martechrise.ai';

    // Core Pages
    const corePages: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/industries`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        }
    ];

    // Dynamic Service Blueprints
    const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
        url: `${baseUrl}/architecture/${service.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // Dynamic Case Studies
    const caseStudyPages: MetadataRoute.Sitemap = CASE_STUDIES.map((study) => ({
        url: `${baseUrl}/case-studies/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [...corePages, ...servicePages, ...caseStudyPages];
}
