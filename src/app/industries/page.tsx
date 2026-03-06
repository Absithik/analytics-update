import { Metadata } from 'next';
import IndustriesPageClient from './IndustriesPageClient';

export const metadata: Metadata = {
    title: "Industry Verticals | MarTechRise.ai",
    description: "Specialized data architectures for Ecommerce, SaaS, Fintech, and Healthcare. Tailored measurement models for your specific sector.",
};

export default function IndustriesPage() {
    return <IndustriesPageClient />;
}
