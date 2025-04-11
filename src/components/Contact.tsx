"use client";

import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/translations';
import { BsPhone, BsGeoAlt, BsEnvelope, BsWhatsapp } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Contact = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { t } = useTranslation();

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

  return (
    <section id="contact" className={`py-16 w-full ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{t('contact.title')}</h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-4">
            <div className={`flex items-start p-6 rounded-xl ${
              darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white shadow-md'
            }`}>
              <div className={`flex items-center justify-center p-3 rounded-full mr-4 ${
                darkMode ? 'bg-blue-600/10 text-blue-500' : 'bg-green-600/10 text-green-500'
              }`}>
                <BsPhone size={24} />
              </div>
              <div>
                <h4 className={`text-lg font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {t('contact.phone')}
                </h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>07 44 47 44 44</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {t('contact.available247')}
                </p>
              </div>
            </div>
            
            <div className={`flex items-start p-6 rounded-xl ${
              darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white shadow-md'
            }`}>
              <div className={`flex items-center justify-center p-3 rounded-full mr-4 ${
                darkMode ? 'bg-blue-600/10 text-blue-500' : 'bg-green-600/10 text-green-500'
              }`}>
                <BsWhatsapp size={24} />
              </div>
              <div>
                <h4 className={`text-lg font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {t('contact.whatsapp')}
                </h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>07 44 47 44 44</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {t('contact.instantMessaging')}
                </p>
              </div>
            </div>
            
            <div className={`flex items-start p-6 rounded-xl ${
              darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white shadow-md'
            }`}>
              <div className={`flex items-center justify-center p-3 rounded-full mr-4 ${
                darkMode ? 'bg-blue-600/10 text-blue-500' : 'bg-green-600/10 text-green-500'
              }`}>
                <BsGeoAlt size={24} />
              </div>
              <div>
                <h4 className={`text-lg font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {t('contact.location')}
                </h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Nice, 06000</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {t('contact.mobileService')}
                </p>
              </div>
            </div>
            
            <div className={`flex items-start p-6 rounded-xl ${
              darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white shadow-md'
            }`}>
              <div className={`flex items-center justify-center p-3 rounded-full mr-4 ${
                darkMode ? 'bg-blue-600/10 text-blue-500' : 'bg-green-600/10 text-green-500'
              }`}>
                <BsEnvelope size={24} />
              </div>
              <div>
                <h4 className={`text-lg font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {t('contact.email')}
                </h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>contact@pneus06.fr</p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {t('contact.emailResponseTime')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="md:col-span-2">
            <div className={`rounded-xl overflow-hidden h-full ${
              darkMode ? 'border border-gray-700' : 'shadow-md'
            }`}>
              <h3 className={`p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} font-semibold`}>
                {t('contact.findUs')}
              </h3>
              <div className="h-[400px] w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92300.15811387892!2d7.189335529455576!3d43.70335374752064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0106a852d31%3A0x40819a5fd979a70!2sNice!5e0!3m2!1sfr!2sfr!4v1680887579884!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('contact.mapTitle')}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 