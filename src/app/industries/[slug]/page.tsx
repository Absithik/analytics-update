import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { INDUSTRIES } from '@/constants/industries';
import { CASE_STUDIES } from '@/constants';
import IndustryDetailClient from './IndustryDetailClient';

interface Props {
    params: { slug: string };
}

// Generate dynamic SEO metadata based on the industry route
export function generateMetadata({ params }: Props): Metadata {
    const industry = INDUSTRIES.find(ind => ind.slug === params.slug);

    if (!industry) {
        return {
            title: 'Industry Not Found | MarTechRise.ai'
        };
    }

    return {
        title: `${industry.name} Analytics & Strategic Models | MarTechRise.ai`,
        description: `Vertical-specific measurement architecture for ${industry.name}. Solving ${industry.challenges?.join(', ')} with technical precision.`,
    };
}

export default async function IndustryDetailPage({ params }: Props) {
    const { slug } = await params;
    const industry = INDUSTRIES.find(ind => ind.slug === slug);

    if (!industry) {
        notFound();
    }

    const relatedCase = CASE_STUDIES.find(cs => cs.industry === industry.name);

    return <IndustryDetailClient industry={industry} relatedCase={relatedCase} />;
}
