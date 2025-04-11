import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
// import Features from '@/components/Features';  // Commenté pour utiliser ServicesModal à la place
import ServicesModal from '@/components/ServicesModal';
import PneusDetails from '@/components/PneusDetails';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
        `}
      </Script>
      <main className="flex min-h-screen flex-col bg-dark-900 text-white overflow-hidden">
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <div id="services-modal" className="scroll-mt-20">
          <ServicesModal />
        </div>
        <div id="produits pneus-details" className="scroll-mt-20">
          <PneusDetails />
        </div>
        <div id="testimonials" className="scroll-mt-20">
          <Testimonials />
        </div>
        <div id="contact" className="scroll-mt-20">
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
