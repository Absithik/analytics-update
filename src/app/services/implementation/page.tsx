import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/constants';
import ServiceDetail from '@/app/services/[id]/page';

export const metadata: Metadata = {
    title: "GA4 Implementation Services | MarTechRise.ai",
    description: "Enterprise-grade GA4 deployment and migration. Scalable measurement architecture for global digital properties.",
};

// Reusing the ServiceDetail component with the specific ID
export default function ImplementationServicePage() {
    const service = SERVICES.find(s => s.id === 'digital-analytics');

    if (!service) return notFound();

    return <ServiceDetail params={{ id: 'digital-analytics' }} />;
}
