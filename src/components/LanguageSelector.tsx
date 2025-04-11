"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';
import { useTranslation, LanguageCode } from '@/translations';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, changeLanguage, languages, languageNames, languageFlags } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // S'assurer que le composant est monté côté client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Ferme le dropdown quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode: LanguageCode) => {
    console.log(`LanguageSelector: Changement de langue vers ${langCode}`);
    changeLanguage(langCode);
    setIsOpen(false);
  };

  // Éviter le rendu côté serveur
  if (!mounted) {
    return null;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="language-selector"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="language-flag">
          <Image 
            src={languageFlags[language]} 
            alt={languageNames[language]} 
            width={20} 
            height={20}
            unoptimized
          />
        </div>
        <span className="language-text text-sm">{language.toUpperCase()}</span>
        <FaChevronDown className={`language-arrow text-xs ${isOpen ? 'language-arrow-open' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="language-dropdown"
          >
            {languages.map((langCode) => (
              <div
                key={langCode}
                className={`language-option ${langCode === language ? 'language-option-active' : ''}`}
                onClick={() => handleLanguageChange(langCode)}
              >
                <div className="language-flag mr-2">
                  <Image 
                    src={languageFlags[langCode]} 
                    alt={languageNames[langCode]} 
                    width={20} 
                    height={20}
                    unoptimized
                  />
                </div>
                <span>{languageNames[langCode]}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector; 