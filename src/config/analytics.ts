export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';
export const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION || 'votre-code-verification-google';

interface PageViewParams {
  url: string;
  title?: string;
}

interface EventParams {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = ({ url, title }: PageViewParams): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventParams): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Déclaration des types pour window.gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      params?: Record<string, unknown>
    ) => void;
  }
} 