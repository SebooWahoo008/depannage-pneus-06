"use client";

import React, { useState, useEffect } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import OptimizedIcon from './OptimizedIcon';
import { useInView } from '@/hooks/useInView';
import { fadeInUpVariants, scaleVariants } from '@/styles/variants';
import Script from 'next/script';

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: "FaCheck",
    title: "Qualité Garantie",
    description: "Tous nos pneus sont soigneusement sélectionnés parmi les meilleures marques du marché."
  },
  {
    id: 2,
    icon: "FaTruck",
    title: "Livraison Rapide",
    description: "Livraison sous 48h pour l'ensemble de nos produits disponibles en stock."
  },
  {
    id: 3,
    icon: "FaClock",
    title: "Service Rapide",
    description: "Nos techniciens qualifiés assurent un montage rapide et efficace de vos pneus."
  },
  {
    id: 4,
    icon: "FaTools",
    title: "Installation Professionnelle",
    description: "Équilibrage et montage réalisés avec du matériel de pointe par nos experts."
  },
  {
    id: 5,
    icon: "FaShieldAlt",
    title: "Garantie Complète",
    description: "Tous nos produits et services sont couverts par une garantie constructeur."
  },
  {
    id: 6,
    icon: "FaPercentage",
    title: "Prix Compétitifs",
    description: "Nous vous proposons les meilleurs tarifs grâce à nos partenariats avec les plus grands fabricants."
  }
];

const FeatureCard = ({ feature, darkMode }: { feature: Feature, darkMode: boolean }) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ triggerOnce: true });

  return (
    <motion.div 
      ref={ref}
      className={`relative overflow-hidden rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ${darkMode 
        ? 'bg-[#112240] border border-[rgba(66,153,225,0.2)]' 
        : 'bg-white border border-gray-100'}`}
      variants={{
        ...fadeInUpVariants,
        hover: {
          y: -10,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }
      }}
      initial="initial"
      animate={isInView ? "whileInView" : "initial"}
      whileHover="hover"
      role="article"
      aria-labelledby={`feature-title-${feature.id}`}
    >
      {/* Élément de design - cercle décoratif */}
      <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full ${darkMode 
        ? 'bg-blue-600/10' 
        : 'bg-green-600/10'} blur-2xl pointer-events-none`} />
      
      <motion.div 
        className={`relative mb-5 w-14 h-14 flex items-center justify-center rounded-lg ${darkMode 
          ? 'bg-gradient-to-br from-blue-600 to-indigo-600' 
          : 'bg-gradient-to-br from-green-600 to-emerald-600'} text-white shadow-md`}
        variants={{
          ...scaleVariants,
          hover: {
            scale: 1.1,
            rotate: [0, 5, 0, -5, 0],
            transition: { duration: 0.5 }
          }
        }}
        whileHover="hover"
        aria-hidden="true"
      >
        <OptimizedIcon icon={feature.icon} className="w-6 h-6" />
      </motion.div>
      
      <h3 
        id={`feature-title-${feature.id}`} 
        className={`text-lg font-bold mb-3 relative ${darkMode ? 'text-white' : 'text-gray-900'}`}
      >
        {feature.title}
      </h3>
      
      <p className={`text-sm relative z-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
      
      {/* Élément décoratif - ligne */}
      <div className={`absolute bottom-0 left-0 w-full h-1 ${darkMode 
        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 opacity-30' 
        : 'bg-gradient-to-r from-green-600 to-emerald-600 opacity-30'}`} />
    </motion.div>
  );
};

const Features = () => {
  const { ref: titleRef, isInView: isTitleInView } = useInView<HTMLDivElement>({ triggerOnce: true });
  const { ref: imageRef, isInView: isImageInView } = useInView<HTMLDivElement>({ triggerOnce: true });
  const [darkMode, setDarkMode] = useState(false);

  // Récupérer le mode d'affichage
  useEffect(() => {
    // Fonction pour mettre à jour le thème depuis le localStorage
    const updateTheme = () => {
      const storedPreference = localStorage.getItem('darkMode');
      if (storedPreference !== null) {
        setDarkMode(storedPreference === 'true');
      }
    };

    // Mise à jour initiale
    updateTheme();

    // Écouter les changements de localStorage pour darkMode
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'darkMode') {
        updateTheme();
      }
    };

    // Ajouter un écouteur d'événement pour les changements de localStorage
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dépannage Pneus 06",
    "description": "Service professionnel de pneus dans les Alpes-Maritimes. Montage, équilibrage, diagnostic et vente de pneus de qualité.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dépannage Pneus 06",
      "areaServed": "Alpes-Maritimes",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de Pneus",
        "itemListElement": features.map((feature, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": feature.title,
            "description": feature.description
          },
          "position": index + 1
        }))
      }
    }
  };

  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
      />
      <section 
        id="services" 
        className={`py-16 md:py-24 relative services-section ${darkMode ? 'bg-[#0a192f]' : 'bg-gray-50'}`}
        aria-labelledby="services-title"
      >
        {/* Cercles décoratifs */}
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full filter blur-[120px] z-0 opacity-70 pointer-events-none ${
          darkMode ? 'bg-blue-600/5' : 'bg-green-600/5'
        }`}></div>
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full filter blur-[120px] z-0 opacity-70 pointer-events-none ${
          darkMode ? 'bg-indigo-600/5' : 'bg-emerald-600/5'
        }`}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <LazyMotion features={domAnimation}>
              <motion.h2
                ref={titleRef}
                variants={fadeInUpVariants}
                initial="initial"
                animate={isTitleInView ? "whileInView" : "initial"}
                transition={{ delay: 0.1 }}
                className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                id="services-title"
              >
                Nos Services
              </motion.h2>
            </LazyMotion>
            <motion.p 
              variants={fadeInUpVariants}
              initial="initial"
              whileInView="whileInView"
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              Des services professionnels pour répondre à tous vos besoins en pneumatiques
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} darkMode={darkMode} />
            ))}
          </div>

          <motion.div
            ref={imageRef}
            variants={fadeInUpVariants}
            initial="initial"
            animate={isImageInView ? "whileInView" : "initial"}
            transition={{ delay: 0.3 }}
            className="mt-16 relative text-center"
          >
            <a href="tel:0744474444" className="inline-block">
              <button className={`py-3 px-8 rounded-lg text-lg font-medium transition-colors duration-300 flex items-center justify-center ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}>
                <OptimizedIcon icon="FaPhone" className="w-4 h-4 mr-2" />
                Contactez-nous
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Features; 