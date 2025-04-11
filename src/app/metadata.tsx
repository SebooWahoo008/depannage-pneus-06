import type { Metadata, Viewport } from "next";
import { GSC_VERIFICATION } from '@/config/analytics';

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Dépannage Pneus 06 - Service de pneus professionnel",
  description: "Service professionnel de pneus dans les Alpes-Maritimes. Montage, équilibrage, diagnostic et vente de pneus de qualité.",
  keywords: "pneus, montage pneus, équilibrage pneus, diagnostic pneus, Alpes-Maritimes, service pneus",
  authors: [{ name: "Dépannage Pneus 06" }],
  creator: "Dépannage Pneus 06",
  publisher: "Dépannage Pneus 06",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://depannage-pneus-06.fr'),
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
  verification: {
    google: GSC_VERIFICATION || process.env.NEXT_PUBLIC_GSC_VERIFICATION || 'votre-code-verification-google',
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://depannage-pneus-06.fr",
    siteName: "Dépannage Pneus 06",
    title: "Dépannage Pneus 06 - Service de pneus professionnel",
    description: "Service professionnel de pneus dans les Alpes-Maritimes. Montage, équilibrage, diagnostic et vente de pneus de qualité.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dépannage Pneus 06 - Service professionnel",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dépannage Pneus 06 | Service de Pneus Professionnel',
    description: 'Service professionnel de pneus dans les Alpes-Maritimes. Montage, équilibrage, diagnostic et vente de pneus de qualité.',
  },
};

// Exporter également l'ancien format pour la compatibilité
export const defaultMetadata = metadata; 