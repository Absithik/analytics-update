import { Metadata } from 'next';
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact MarTechRise | Enterprise Digital Analytics Consulting US & Global",
    description: "Ready to fix your tracking architecture? Contact our certified GA4, Adobe Analytics, and CDP implementation experts for a custom enterprise audit.",
};

export default function ContactPage() {
    return <ContactPageClient />;
}
