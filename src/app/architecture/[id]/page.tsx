import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/constants/services';
import TechnicalBlueprintClient from './TechnicalBlueprintClient';

interface Props {
    params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const service = SERVICES.find(s => s.id === id);

    if (!service) {
        return {
            title: 'Blueprint Not Found | MarTechRise.ai',
        };
    }

    return {
        title: `Technical Blueprint: ${service.title} | MarTechRise.ai`,
        description: `Deep dive into the architecture and schematics for ${service.title}.Technical delivery breakdown.`,
    };
}

export default async function TechnicalBlueprint({ params }: Props) {
    const { id } = await params;
    const service = SERVICES.find(s => s.id === id);

    if (!service) {
        notFound();
    }

    return <TechnicalBlueprintClient service={service} />;
}
