"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaCheck, FaTruck, FaClock, FaTools, FaShieldAlt, FaPercent, FaTimes } from 'react-icons/fa';
import { useTranslation } from '@/translations';

interface Service {
  id: number;
  icon: React.ReactNode;
  iconColor: string;
}

const ServiceCard = ({ service, openModal }: { service: Service, openModal: (id: number) => void }) => {
  const { t } = useTranslation();
  
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-teal-900/30 cursor-pointer transform hover:-translate-y-1 hover:scale-[1.02]" 
      onClick={() => openModal(service.id)}
      role="button"
      tabIndex={0}
      aria-label={`${t(`services.items.${service.id}.title`, '')}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(service.id);
        }
      }}
    >
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          <div className={`w-12 h-12 rounded-full ${service.iconColor} bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}>
            {service.icon}
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-white text-center mb-2">
          {t(`services.items.${service.id}.title`, '')}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
          {t(`services.items.${service.id}.description`, '')}
        </p>
        <div className="mt-4 text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 rounded-full transition-colors duration-300 hover:bg-teal-100 dark:hover:bg-teal-900/40">
            {t('services.learnMore', 'En savoir plus')}
          </span>
        </div>
      </div>
    </div>
  );
};

const ServiceModal = ({ service, isOpen, closeModal }: { service: Service, isOpen: boolean, closeModal: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  
  // Fermeture du modal avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      // Focus sur le modal pour l'accessibilité
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeModal]);
  
  if (!isOpen) return null;
  
  return (
    <>
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] animate-fadeIn"
        onClick={closeModal}
        aria-hidden="true"
      />
      
      <div className="fixed inset-0 flex items-center justify-center p-4 z-[70]">
        <div 
          ref={modalRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${service.id}`}
          className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full mx-auto max-h-[90vh] overflow-auto animate-modalEnter"
        >
          <div className="p-6">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={closeModal}
              aria-label="Fermer"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-full ${service.iconColor} bg-teal-50 dark:bg-teal-900/30 flex-shrink-0 flex items-center justify-center`}>
                {service.icon}
              </div>
              <h3 id={`modal-title-${service.id}`} className="text-2xl font-bold text-gray-800 dark:text-white">
                {t(`services.items.${service.id}.title`, '')}
              </h3>
            </div>
            
            <div className="prose prose-green dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-base">
                {t(`services.items.${service.id}.description`, '')}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                {t(`services.items.${service.id}.details`, '')}
              </p>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
                onClick={closeModal}
              >
                {t('services.close', 'Fermer')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ServicesModal = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const { t } = useTranslation();

  // Définition des services avec seulement les attributs non-textuels
  const servicesList: Service[] = [
    {
      id: 1,
      icon: <FaCheck className="w-6 h-6" />,
      iconColor: "text-teal-500"
    },
    {
      id: 2,
      icon: <FaTruck className="w-6 h-6" />,
      iconColor: "text-teal-500"
    },
    {
      id: 3,
      icon: <FaClock className="w-6 h-6" />,
      iconColor: "text-teal-500"
    },
    {
      id: 4,
      icon: <FaTools className="w-6 h-6" />,
      iconColor: "text-teal-500"
    },
    {
      id: 5,
      icon: <FaShieldAlt className="w-6 h-6" />,
      iconColor: "text-teal-500"
    },
    {
      id: 6,
      icon: <FaPercent className="w-6 h-6" />,
      iconColor: "text-teal-500"
    }
  ];

  // Récupérer le mode d'affichage
  useEffect(() => {
    const updateTheme = () => {
      const storedPreference = localStorage.getItem('darkMode');
      if (storedPreference !== null) {
        setDarkMode(storedPreference === 'true');
      } else {
        // Valeur par défaut si aucune préférence n'est stockée
        setDarkMode(true); // Assumons que le thème par défaut est sombre
      }
    };

    updateTheme();

    // Écouter les changements de localStorage pour darkMode
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'darkMode') {
        updateTheme();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const openModal = (id: number) => {
    setSelectedService(id);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className={`py-16 md:py-20 lg:py-24 px-4 ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('services.title', 'Nos Services')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('services.subtitle', 'Découvrez nos services de qualité')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {servicesList.map((service) => (
            <ServiceCard key={service.id} service={service} openModal={openModal} />
          ))}
        </div>
      </div>
      
      {selectedService !== null && (
        <ServiceModal 
          service={servicesList.find(s => s.id === selectedService) as Service} 
          isOpen={selectedService !== null} 
          closeModal={closeModal} 
        />
      )}
    </section>
  );
};

export default ServicesModal; 