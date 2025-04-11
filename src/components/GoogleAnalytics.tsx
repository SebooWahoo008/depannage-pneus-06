"use client";

import { Suspense } from 'react';
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/config/analytics';

const GoogleAnalytics = () => {
  return (
    <Suspense fallback={null}>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </Suspense>
  );
};

export default GoogleAnalytics; 