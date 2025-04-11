"use client";

import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from '@/translations';
import Link from 'next/link';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { t } = useTranslation();

  // Fonction pour faire défiler vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`pt-16 relative ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 -left-40 w-96 h-96 rounded-full filter blur-[150px] ${
          darkMode ? 'bg-blue-700/20' : 'bg-green-700/20'
        }`}></div>
        <div className={`absolute bottom-0 right-0 w-80 h-80 rounded-full filter blur-[100px] ${
          darkMode ? 'bg-indigo-700/20' : 'bg-emerald-700/20'
        }`}></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {/* About section */}
          <div>
            <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {t('footer.about')}
            </h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {t('footer.aboutDescription')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`transition-colors duration-300 ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}>
                <FaFacebook size={20} />
              </a>
              <a href="#" className={`transition-colors duration-300 ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}>
                <FaInstagram size={20} />
              </a>
              <a href="#" className={`transition-colors duration-300 ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}>
                <FaTwitter size={20} />
              </a>
              <a href="#" className={`transition-colors duration-300 ${
                darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}>
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {t('navbar.home')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/nos-pneus" 
                  className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {t('footer.ourProducts')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services-et-dimensions" 
                  className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {t('footer.availableDimensions')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {t('footer.ourServices')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/nos-pneus" 
                  className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {t('footer.tireSales')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services-et-dimensions" 
                  className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {t('footer.homeMounting')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services-et-dimensions" 
                  className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {t('footer.repair')}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services-et-dimensions" 
                  className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {t('footer.balancing')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {t('footer.contact')}
            </h3>
            <ul className="space-y-2">
              <li className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Nice, 06000
              </li>
              <li className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {t('contact.phone')}: 07 44 47 44 44
              </li>
              <li className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {t('footer.serviceAvailable')}
              </li>
              <li className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {t('footer.mobileService')}
              </li>
            </ul>
          </div>
        </div>
        
        {/* Scroll to top button */}
        <div className="flex justify-center pb-8">
          <motion.button 
            className={`p-3 rounded-full shadow-lg transition-colors ${
              darkMode 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={t('footer.scrollToTop')}
          >
            <FaChevronUp size={20} />
          </motion.button>
        </div>
        
        {/* Copyright */}
        <div className={`py-6 border-t ${
          darkMode ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-600'
        } text-center`}>
          <p>© {currentYear} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;