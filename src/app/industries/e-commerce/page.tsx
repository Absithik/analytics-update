import { Metadata } from 'next';
import EcommercePageClient from './EcommercePageClient';

export const metadata: Metadata = {
    title: "Ecommerce Analytics Consulting | MarTechRise.ai",
    description: "Master your ROI with ecommerce analytics consulting. We solve cart abandonment and funnel friction using advanced GA4 and Adobe Analytics integrations.",
};

export default function EcommerceService() {
    return <EcommercePageClient />;
}
