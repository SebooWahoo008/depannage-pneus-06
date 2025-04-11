"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/translations';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);
  const { t, language } = useTranslation();

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

  // Écouter les changements de langue
  useEffect(() => {
    console.log(`Hero: langue actuelle: ${language}`);
    
    const handleLanguageChange = () => {
      console.log('Hero: Événement de changement de langue détecté');
      // Force un re-render quand la langue change
      setForceUpdate(prev => prev + 1);
    };
    
    window.addEventListener('languageChange', handleLanguageChange);
    
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, [language]);

  return (
    <section className="relative w-full h-auto min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px] pb-20 sm:pb-28 md:pb-36 pt-20 sm:pt-24 md:pt-28">
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-gradient-modern-navy-black p-8 rounded-xl border border-green-900/20 text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{t('hero.emergencyTitle', 'Numéro d\'urgence')}</h3>
              <div className="flex flex-col items-center gap-4">
                <p className="text-4xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-4xl text-green-500" />
                  07 44 47 44 44
                </p>
                <a href="tel:0744474444" className="block w-full">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-6 rounded-full transition-all duration-300 text-lg flex items-center justify-center shadow-lg hover:shadow-xl">
                    <FaWhatsapp className="mr-2" />
                    {t('hero.callNowButton', 'Appeler maintenant')}
                  </button>
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full px-6 py-2.5 bg-gradient-elegant-green hover:opacity-90 text-white rounded-full transition-all duration-300"
                >
                  {t('hero.closeButton', 'Fermer')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full h-full overflow-hidden bg-[#121212]">
        {/* Dégradé principal moderne avec couleurs adaptées au thème */}
        <div className="absolute inset-0 z-0" 
          style={{ 
            background: darkMode 
              ? 'linear-gradient(to bottom, rgba(10, 25, 47, 0.95), rgba(17, 34, 64, 0.95))'
              : 'linear-gradient(to bottom, rgba(10, 25, 47, 0.95), rgba(17, 34, 64, 0.95))'
            // Le dégradé vert est remplacé par un dégradé bleu foncé pour éviter le flash vert
          }}>
        </div>
        
        {/* Effets lumineux avec nuances adaptées au thème - toujours en bleu pour éviter les flashs verts */}
        <div className="absolute inset-0 overflow-hidden hero-lights opacity-0 animate-fadeIn">
          <div className={`absolute -top-10 -left-10 w-[40%] h-[40%] rounded-full bg-blue-600/15 blur-[120px] z-0 hero-light-1`}></div>
          <div className={`absolute top-[30%] left-[10%] w-[25%] h-[30%] rounded-full bg-indigo-600/15 blur-[130px] z-0 hero-light-2`}></div>
          <div className={`absolute top-[60%] -right-10 w-[30%] h-[40%] rounded-full bg-blue-600/10 blur-[150px] z-0 hero-light-3`}></div>
          <div className={`absolute top-[10%] right-[10%] w-[25%] h-[25%] rounded-full bg-indigo-600/10 blur-[100px] z-0 hero-light-4`}></div>
          <div className={`absolute top-[50%] left-[20%] w-[30%] h-[20%] rounded-full bg-blue-800/10 blur-[120px] z-0 hero-light-5`}></div>
        </div>
        
        {/* Pattern hexagonal subtil */}
        <div className="absolute inset-0 opacity-5 mix-blend-soft-light z-0 hero-pattern" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 5 L55 20 L55 50 L30 65 L5 50 L5 20 Z" stroke="white" fill="none" /%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}>
        </div>
        
        <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 py-16 sm:py-20 md:py-24">
          <div className="text-center max-w-5xl mx-auto">
            {/* Boutons au-dessus du titre uniquement pour tablet et desktop */}
            <div className="hidden sm:block">
              <motion.div 
                className="flex flex-wrap justify-center items-center gap-3 mb-8 relative z-40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <a href="tel:0744474444" className="inline-block">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-base sm:text-lg flex items-center justify-center shadow-lg transition-colors duration-300">
                    <FaWhatsapp className="mr-2 text-white" />
                    {t('hero.callButton', 'Appeler : 07 44 47 44 44')}
                  </button>
                </a>
                
                <button
                  onClick={() => {
                    const element = document.getElementById('produits');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      setTimeout(() => {
                        const dimensionsButton = document.querySelector('button[data-tab="dimensions"]');
                        if (dimensionsButton) {
                          (dimensionsButton as HTMLButtonElement).click();
                        }
                      }, 800);
                    }
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-base sm:text-lg flex items-center justify-center shadow-lg transition-colors duration-300"
                >
                  {t('hero.dimensionsButton', 'Nos dimensions')}
                  <FaArrowRight className="ml-2" />
                </button>
                
                <button
                  onClick={() => {
                    const element = document.getElementById('produits');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                      setTimeout(() => {
                        const produitButton = document.querySelector('button[data-tab="produits"]');
                        if (produitButton) {
                          (produitButton as HTMLButtonElement).click();
                        }
                      }, 800);
                    }
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-base sm:text-lg flex items-center justify-center shadow-lg transition-colors duration-300"
                >
                  {t('hero.selectionButton', 'Notre sélection')}
                  <FaArrowRight className="ml-2" />
                </button>
              </motion.div>
            </div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-lg bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key={`title-${language}-${forceUpdate}`}
            >
              {t('hero.title', 'Spécialiste Pneumatiques')}
            </motion.h1>
            <div className="text-center">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-white text-xl sm:text-2xl font-semibold mb-4 service-available"
                key={`subtitle-${language}-${forceUpdate}`}
              >
                {t('hero.subtitle', 'Service disponible 24h/24 et 7j/7 pour tous types de véhicules')}
              </motion.p>
              
              {/* Nouveau paragraphe optimisé SEO */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mb-6 px-4"
              >
                Dépannage Pneus 06 est votre expert pneumatique de confiance à Nice et dans les Alpes-Maritimes. 
                Nous proposons un large choix de pneus été, hiver et 4 saisons pour voitures, SUV et utilitaires. 
                Montage, équilibrage, réparation et dépannage d&apos;urgence réalisés par des professionnels qualifiés. 
                Service mobile disponible à votre domicile ou sur site pour vous garantir sécurité et confort sur la route.
              </motion.p>
            </div>
            
            {/* Boutons d'origine pour mobile seulement */}
            <div className="block sm:hidden">
              <motion.div 
                className="flex flex-col gap-4 justify-center items-center relative z-40 mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <div className="w-full">
                  <a href="tel:0744474444" className="block w-full">
                    <button 
                      className="w-full bg-white hover:bg-gray-100 text-green-600 font-medium py-3 px-6 rounded-full text-base flex items-center justify-center shadow-lg transition-colors duration-300"
                    >
                      <FaWhatsapp className="mr-2 text-green-500" />
                      {t('hero.callButton', 'Appeler : 07 44 47 44 44')}
                    </button>
                  </a>
                </div>
                
                <div className="flex flex-col gap-3 w-full">
                  <button
                    onClick={() => {
                      const element = document.getElementById('produits');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => {
                          const dimensionsButton = document.querySelector('button[data-tab="dimensions"]');
                          if (dimensionsButton) {
                            (dimensionsButton as HTMLButtonElement).click();
                          }
                        }, 800);
                      }
                    }}
                    className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-6 rounded-full text-base flex items-center justify-center shadow-lg transition-all duration-300"
                  >
                    {t('hero.dimensionsButton', 'Nos dimensions')}
                    <FaArrowRight className="ml-2" />
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById('produits');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => {
                          const produitButton = document.querySelector('button[data-tab="produits"]');
                          if (produitButton) {
                            (produitButton as HTMLButtonElement).click();
                          }
                        }, 800);
                      }
                    }}
                    className="w-full bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-6 rounded-full text-base flex items-center justify-center shadow-lg transition-all duration-300"
                  >
                    {t('hero.selectionButton', 'Notre sélection')}
                    <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Image de camionnette qui empiète sur le hero et le body */}
      <div className="absolute left-1/4 sm:left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 bottom-[-60px] sm:bottom-[-80px] md:bottom-[-100px] z-20 w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-3xl px-4 lg:px-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="relative"
        >
          <Image
            src="/images/gallery/IMG-20250403-WA0011-removebg-preview.png"
            alt="Service de pneus mobile"
            width={800}
            height={500}
            className="w-full h-auto lg:scale-110 xl:scale-125 transform-gpu"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 