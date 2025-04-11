import { useEffect, useState, useCallback } from 'react';

// Import des fichiers de traduction
import fr from './fr.json';
import en from './en.json';
import ru from './ru.json';
import hy from './hy.json';

export const translations = {
  fr,
  en,
  ru,
  hy
};

export type LanguageCode = keyof typeof translations;
export type TranslationsType = Record<string, Record<string, string>>;

export const languageNames: Record<LanguageCode, string> = {
  fr: 'Français',
  en: 'English',
  ru: 'Русский',
  hy: 'Հայերեն'
};

export const languageFlags: Record<LanguageCode, string> = {
  fr: '/images/flags/fr.svg',
  en: '/images/flags/gb.svg',
  ru: '/images/flags/ru.svg',
  hy: '/images/flags/am.svg'
};

// Fonction pour obtenir une valeur imbriquée dans un objet en utilisant un chemin comme "hero.title"
export function getTranslation(obj: TranslationsType | Record<string, string>, path: string, defaultValue: string = ''): string {
  const keys = path.split('.');
  let result: unknown = obj;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return defaultValue;
    }
  }
  
  return typeof result === 'string' ? result : defaultValue;
}

// Event pour forcer la mise à jour des composants qui utilisent les traductions
const LANGUAGE_CHANGE_EVENT = 'languageChange';

// Hook personnalisé pour utiliser les traductions
export function useTranslation() {
  const [language, setLanguage] = useState<LanguageCode>('fr');
  const [forceUpdate, setForceUpdate] = useState(0);
  
  // Initialisation de la langue
  useEffect(() => {
    // Fonction pour récupérer et définir la langue initiale
    const initializeLanguage = () => {
      try {
        // Récupérer la langue depuis le localStorage
        const storedLanguage = window.localStorage.getItem('userLanguage') as LanguageCode | null;
        
        if (storedLanguage && translations[storedLanguage]) {
          console.log(`Langue stockée trouvée: ${storedLanguage}`);
          setLanguage(storedLanguage);
        } else {
          // Utiliser la langue du navigateur ou français par défaut
          const browserLang = navigator.language.split('-')[0] as LanguageCode;
          if (translations[browserLang]) {
            console.log(`Langue du navigateur utilisée: ${browserLang}`);
            setLanguage(browserLang);
            window.localStorage.setItem('userLanguage', browserLang);
          } else {
            console.log('Langue par défaut utilisée: fr');
            window.localStorage.setItem('userLanguage', 'fr');
          }
        }
      } catch (error) {
        console.error('Erreur lors de l\'initialisation de la langue:', error);
        setLanguage('fr'); // Fallback à français en cas d'erreur
      }
    };

    initializeLanguage();
    
    // Écouter les changements externes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'userLanguage' && e.newValue) {
        const newLang = e.newValue as LanguageCode;
        if (translations[newLang] && newLang !== language) {
          console.log(`Langue changée via le stockage: ${newLang}`);
          setLanguage(newLang);
          setForceUpdate(prev => prev + 1);
        }
      }
    };
    
    // Écouter les événements de changement de langue personnalisés
    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent<LanguageCode>;
      console.log(`Événement personnalisé de changement de langue reçu:`, customEvent.detail);
      if (customEvent.detail && translations[customEvent.detail]) {
        setLanguage(customEvent.detail);
        setForceUpdate(prev => prev + 1);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener(LANGUAGE_CHANGE_EVENT, handleCustomEvent);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleCustomEvent);
    };
  }, [language]);
  
  const changeLanguage = useCallback((newLanguage: LanguageCode) => {
    if (translations[newLanguage] && newLanguage !== language) {
      console.log(`Changement de langue: ${language} -> ${newLanguage}`);
      
      try {
        // Mettre à jour localStorage
        window.localStorage.setItem('userLanguage', newLanguage);
        
        // Mettre à jour l'état local
        setLanguage(newLanguage);
        setForceUpdate(prev => prev + 1);
        
        // Émettre un événement personnalisé pour informer les autres composants
        window.dispatchEvent(new CustomEvent(LANGUAGE_CHANGE_EVENT, { detail: newLanguage }));
      } catch (error) {
        console.error('Erreur lors du changement de langue:', error);
      }
    }
  }, [language]);
  
  const t = useCallback((key: string, defaultValue: string = '') => {
    return getTranslation(translations[language], key, defaultValue);
  }, [language, forceUpdate]);
  
  return {
    t,
    language,
    changeLanguage,
    languages: Object.keys(translations) as LanguageCode[],
    languageNames,
    languageFlags
  };
} 