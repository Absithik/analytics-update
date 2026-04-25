import { Metadata } from 'next';
import AuditPageClient from "./AuditPageClient";

export const metadata: Metadata = {
    title: "Free Technical Audit | MarTechRise",
    description: "Request a free technical audit for your digital analytics implementation.",
};

export default function AuditPage() {
    return <AuditPageClient />;
}
