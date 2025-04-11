"use client";

import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import './globals.css';

const GoogleAnalytics = dynamic(() => import('@/components/GoogleAnalytics'), {
  ssr: false,
  loading: () => null,
});

// Importer directement le composant SimpleCookieBanner
import SimpleCookieBanner from '@/components/SimpleCookieBanner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentLang, setCurrentLang] = useState('fr');
  
  // Récupérer la langue depuis le localStorage au chargement
  useEffect(() => {
    const storedLanguage = localStorage.getItem('userLanguage');
    if (storedLanguage) {
      setCurrentLang(storedLanguage);
      document.documentElement.lang = storedLanguage;
    }
    
    // Écouter les changements de langue
    const handleLanguageChange = (e: CustomEvent) => {
      if (e.detail) {
        setCurrentLang(e.detail);
        document.documentElement.lang = e.detail;
      }
    };
    
    window.addEventListener('languageChange', handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);
  
  return (
    <html lang={currentLang} className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FF6B00" />
        <link rel="canonical" href="https://depannage-pneus-06.fr/" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="dns-prefetch"
          href="https://fonts.gstatic.com"
        />
      </head>
      <body className="antialiased bg-black">
        <Suspense fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900">
            <img 
              src="/images/gallery/IMG-20250403-WA0011-removebg-preview.png" 
              alt="Chargement" 
              className="w-40 h-auto animate-pulse"
            />
            <div className="absolute bottom-20 w-16 h-1 bg-blue-600 rounded animate-pulse"></div>
          </div>
        }>
          {children}
        </Suspense>
        
        <SimpleCookieBanner />
        
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
      </body>
    </html>
  );
}
