import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://martechrise.ai'),
  title: "Build Data Pipelines That Drive US & Global Growth | MarTechRise.ai",
  description: "Stop guessing, start growing. MartechRise is the premium digital analytics consultancy, delivering flawless GA4 migrations, server-side tracking & CDP integrations.",
  keywords: ["Enterprise Digital Analytics", "GA4 Migration Experts US", "Data Strategy Consulting", "Server-Side Tracking", "Marketing Analytics Agency", "CDP Implementation"],
  openGraph: {
    title: "Build Data Pipelines That Drive US & Global Growth | MarTechRise.ai",
    description: "Stop guessing, start growing. MartechRise is the premium digital analytics consultancy, delivering flawless GA4 migrations, server-side tracking & CDP integrations.",
    url: 'https://martechrise.ai',
    siteName: 'MarTechRise.ai',
    images: [
      {
        url: '/og-image.jpg', // Placeholder for actual brand image
        width: 1200,
        height: 630,
        alt: 'MarTechRise.ai - Technical Digital Analytics Architects',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Build Data Pipelines That Drive US & Global Growth | MarTechRise.ai",
    description: "Stop guessing, start growing. MartechRise is the premium digital analytics consultancy, delivering flawless GA4 migrations, server-side tracking & CDP integrations.",
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MarTechRise.ai",
    "url": "https://martechrise.ai",
    "logo": "https://martechrise.ai/logo.png",
    "sameAs": [
      "https://linkedin.com/company/martechrise"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>
          {children}
        </main>

        {/* Mobile Audit CTA Button */}
        <div className="fixed bottom-6 right-6 z-40 lg:hidden">
          <a
            href="/contact"
            className="w-16 h-16 bg-indigo-600 rounded-full shadow-2xl flex items-center justify-center text-white active:scale-95 transition-transform"
          >
            <span className="sr-only">Request Audit</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </a>
        </div>

        <Footer />
      </body>
    </html>
  );
}
