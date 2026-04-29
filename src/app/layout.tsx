import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/common/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://martechrise.ai'),
  title: "Premium Digital Analytics Consultancy | GA4 & Server-Side Tracking US",
  description: "Enterprise-grade digital analytics implementation, GA4 migrations, and server-side tracking. We build clean data pipelines for US & Global growth. Request a technical audit.",
  keywords: [
    "Digital Analytics Consultancy US",
    "GA4 Migration Experts",
    "Server-Side GTM Implementation",
    "Adobe Analytics Architect",
    "Enterprise Data Strategy",
    "CDP Implementation Services",
    "Marketing Attribution Solutions",
    "MarTech Architecture US"
  ],
  openGraph: {
    title: "Technical Digital Analytics Architects | MarTechRise.ai",
    description: "Premium GA4 migrations, server-side tracking, and CDP integrations for modern enterprises. Build your data legacy.",
    url: 'https://martechrise.ai',
    siteName: 'MarTechRise.ai',
    images: [
      {
        url: '/og-image.jpg',
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
    title: "Premium Digital Analytics Consultancy | MarTechRise.ai",
    description: "Enterprise-grade digital analytics implementation and server-side tracking for US growth.",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N7X9H8LJ');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N7X9H8LJ"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
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
