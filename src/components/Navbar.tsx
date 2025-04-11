"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaEnvelope, FaQuestionCircle, FaWhatsapp, FaMoon, FaSun } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { SiX } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '../translations';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [showCreatorModal, setShowCreatorModal] = useState(false);
    const [showConstructionModal, setShowConstructionModal] = useState<string | null>(null);
    const [showInfoModal, setShowInfoModal] = useState(false);
    const { t } = useTranslation();
    
    // Classes pour les liens inactifs
    const inactiveClass = darkMode ? 'text-white hover:text-blue-400' : 'text-green-800 hover:text-green-600';

    // Fonction pour défilement fluide avec offset pour la navbar
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Calculer l'offset pour tenir compte de la hauteur de la navbar
            const navbarHeight = 80; // Hauteur approximative de la navbar en pixels
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            // Défilement fluide
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Fermer le menu mobile si ouvert
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    useEffect(() => {
        // Appliquer la classe au document pour le thème sombre/clair
        if (darkMode) {
            document.documentElement.classList.add('dark-theme');
            document.documentElement.classList.remove('light-theme');
        } else {
            document.documentElement.classList.add('light-theme');
            document.documentElement.classList.remove('dark-theme');
        }
        
        // Sauvegarder la préférence de l'utilisateur
        localStorage.setItem('darkMode', String(darkMode));
    }, [darkMode]);

    // Gérer le stockage de la préférence utilisateur
    useEffect(() => {
        // Récupérer la préférence stockée
        const storedPreference = localStorage.getItem('darkMode');
        if (storedPreference !== null) {
            setDarkMode(storedPreference === 'true');
        }
    }, []);

    // Ajout du timer pour les modals
    useEffect(() => {
        if (showConstructionModal) {
            const timer = setTimeout(() => {
                setShowConstructionModal(null);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [showConstructionModal]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        // Stocker la préférence utilisateur
        localStorage.setItem('darkMode', String(newMode));
        
        // Déclencher un événement personnalisé pour notifier les autres composants
        window.dispatchEvent(new StorageEvent('storage', {
            key: 'darkMode',
            newValue: String(newMode),
            oldValue: String(darkMode),
            storageArea: localStorage
        }));
    };

    // Déterminer les classes de la barre de navigation
    const getNavbarClasses = () => {
        return "py-4 sm:py-6";
    };

    const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${getNavbarClasses()}`;

    // Styles en ligne pour garantir la transparence totale avec un léger flou
    const transparentStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backgroundImage: 'none',
        opacity: 0.95,
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    };

    const lightTransparentStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
        backgroundImage: 'none',
        opacity: 0.95,
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
    };

    const darkModeTransparentStyle = darkMode ? transparentStyle : lightTransparentStyle;

    const itemVariants = {
        closed: { opacity: 0, y: -10 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <>
        <nav 
            className={`${navbarClasses}`}
            style={darkModeTransparentStyle}
        >
            <div className="container mx-auto px-4 flex justify-between items-center h-16 md:h-20">
                {/* Logo */}
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    className={`text-xl sm:text-2xl font-bold transition-colors duration-300 drop-shadow-md nav-text nav-logo ${darkMode ? 'text-white' : 'text-green-800'} hover:${darkMode ? 'text-blue-400' : 'text-green-600'} transform hover:scale-105 cursor-pointer`}
                    onClick={() => window.location.href = '/'}
                >
                    Dépannage Pneus 06
                </motion.span>

                {/* Desktop Menu */}
                <motion.div 
                    className="hidden md:flex space-x-6 items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, staggerChildren: 0.1 }}
                >
                    <a 
                        href="#hero" 
                        className={`group relative px-2 ${inactiveClass}`}
                        onClick={(e) => handleSmoothScroll(e, 'hero')}
                    >
                        <span>{t('navbar.home')}</span>
                    </a>
                    <a 
                        href="#produits" 
                        className={`group relative px-2 ${inactiveClass}`}
                        onClick={(e) => handleSmoothScroll(e, 'produits')}
                    >
                        <span>{t('navbar.ourTires')}</span>
                    </a>
                    <a 
                        href="#services-modal" 
                        className={`group relative px-2 ${inactiveClass}`}
                        onClick={(e) => handleSmoothScroll(e, 'services-modal')}
                    >
                        <span>{t('navbar.servicesAndDimensions')}</span>
                    </a>
                    <a 
                        href="#contact" 
                        className={`group relative px-2 ${inactiveClass}`}
                        onClick={(e) => handleSmoothScroll(e, 'contact')}
                    >
                        <span>{t('navbar.contact')}</span>
                    </a>
                </motion.div>

                {/* Right Side Elements */}
                <div className="flex items-center space-x-3 md:space-x-4">
                    {/* Theme Toggle Button - Visible on all devices */}
                    <button
                        onClick={toggleTheme}
                        className="p-1 rounded-full focus:outline-none w-8 h-8 flex items-center justify-center"
                        aria-label={darkMode ? t('navbar.lightMode') : t('navbar.darkMode')}
                    >
                        <div className={`theme-icon-cubic flex items-center justify-center ${darkMode ? 'theme-icon-cubic-dark' : 'theme-icon-cubic-light'} w-full h-full`}>
                            {darkMode ? (
                                <FaMoon className="w-4 h-4 text-blue-300" />
                            ) : (
                                <FaSun className="w-4 h-4 text-yellow-500" />
                            )}
                        </div>
                    </button>

                    {/* Language Selector - Desktop View */}
                    <div className="hidden md:block">
                        <LanguageSelector />
                    </div>

                    {/* Menu Toggle Button - Visible only on mobile */}
                    <motion.button
                        onClick={toggleMenu} 
                        className={`md:hidden focus:outline-none ${
                            darkMode 
                                ? 'text-white hover:text-blue-400' 
                                : 'text-green-800 hover:text-green-600'
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    >
                        <div className="relative w-7 h-7 flex flex-col justify-center items-center">
                            <motion.span 
                                className={`absolute block h-0.5 rounded-full w-6 ${darkMode ? 'bg-white' : 'bg-green-800'} menu-line-top menu-toggle-button`}
                                initial={false}
                                animate={{ 
                                    rotate: isMenuOpen ? 45 : 0,
                                    y: isMenuOpen ? 0 : -8,
                                    width: isMenuOpen ? 24 : 24
                                }}
                                transition={{ duration: 0.3 }}
                            ></motion.span>
                            <motion.span 
                                className={`absolute block h-0.5 rounded-full ${darkMode ? 'bg-white' : 'bg-green-800'} menu-line-middle menu-toggle-button`}
                                initial={false}
                                animate={{ 
                                    opacity: isMenuOpen ? 0 : 1,
                                    width: isMenuOpen ? 0 : 16 
                                }}
                                transition={{ duration: 0.3 }}
                            ></motion.span>
                            <motion.span 
                                className={`absolute block h-0.5 rounded-full w-6 ${darkMode ? 'bg-white' : 'bg-green-800'} menu-line-bottom menu-toggle-button`}
                                initial={false}
                                animate={{ 
                                    rotate: isMenuOpen ? -45 : 0,
                                    y: isMenuOpen ? 0 : 8,
                                    width: isMenuOpen ? 24 : 20
                                }}
                                transition={{ duration: 0.3 }}
                            ></motion.span>
                        </div>
                    </motion.button>
                </div>
            </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    className={`fixed right-0 w-full md:w-80 shadow-none z-50 mt-16 md:mt-20 h-[500px] overflow-y-auto overflow-x-hidden relative ${
                        darkMode ? 'mobile-menu-dark' : 'bg-white/30'
                    }`}
                    style={darkMode ? darkModeTransparentStyle : { backgroundColor: 'transparent' }}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Fond avec dégradé */}
                    <div 
                        className={`absolute inset-0 ${
                            darkMode 
                                ? 'backdrop-blur-[2px]' 
                                : 'backdrop-blur-sm bg-white/30'
                        }`}
                        style={darkMode ? { backgroundColor: 'rgba(0,0,0,0.05)' } : {}}
                    ></div>
                    
                    <div className="flex flex-col space-y-2 p-5 sm:space-y-4 sm:p-6 relative z-15">
                        {/* Language Selector in Mobile Menu */}
                        <motion.div variants={itemVariants} transition={{ delay: 0.2 }}>
                            <div className={`mt-3 ${
                                darkMode 
                                    ? 'bg-white/10 border border-blue-400/10' 
                                    : 'bg-gradient-secondary/30'
                            } px-4 py-3 rounded-lg`}>
                                <div className="flex items-center justify-between">
                                    <span className={`${darkMode ? 'text-white' : 'text-gray-700'} font-medium text-base`}>
                                        {t('navbar.mobileMenu.language')}
                                    </span>
                                    <LanguageSelector />
                                </div>
                            </div>
                        </motion.div>

                        {/* Menu Items - Ajout de dividers et spacing */}
                        <div className={`mt-2 ${
                            darkMode 
                                ? 'border-t border-blue-400/10 pt-2' 
                                : 'border-t border-gray-200 pt-2'
                        }`}>
                            <motion.div variants={itemVariants} transition={{ delay: 0.3 }} className="mb-2">
                                <a href="#hero" 
                                    className={`${
                                        darkMode 
                                            ? 'text-white hover:text-blue-400 mobile-menu-item bg-white/10 border border-blue-400/10' 
                                            : 'text-gray-700 hover:text-accent-blue mobile-menu-item'
                                    } font-medium transition-colors text-lg block important-text px-4 py-3 rounded-md`}
                                    onClick={(e) => {
                                        handleSmoothScroll(e, 'hero');
                                    }}
                                >
                                    {t('navbar.home')}
                                </a>
                            </motion.div>
                            <motion.div variants={itemVariants} transition={{ delay: 0.4 }} className="mb-2">
                                <a href="#produits" 
                                    className={`${
                                        darkMode 
                                            ? 'text-white hover:text-blue-400 mobile-menu-item bg-white/10 border border-blue-400/10' 
                                            : 'text-gray-700 hover:text-accent-blue mobile-menu-item'
                                    } font-medium transition-colors text-lg block important-text px-4 py-3 rounded-md`}
                                    onClick={(e) => {
                                        handleSmoothScroll(e, 'produits');
                                    }}
                                >
                                    {t('navbar.ourTires')}
                                </a>
                            </motion.div>
                            <motion.div variants={itemVariants} transition={{ delay: 0.5 }} className="mb-2">
                                <a href="#services-modal" 
                                    className={`${
                                        darkMode 
                                            ? 'text-white hover:text-blue-400 mobile-menu-item bg-white/10 border border-blue-400/10' 
                                            : 'text-gray-700 hover:text-accent-blue mobile-menu-item'
                                    } font-medium transition-colors text-lg block important-text px-4 py-3 rounded-md`}
                                    onClick={(e) => {
                                        handleSmoothScroll(e, 'services-modal');
                                    }}
                                >
                                    {t('navbar.servicesAndDimensions')}
                                </a>
                            </motion.div>
                            <motion.div variants={itemVariants} transition={{ delay: 0.6 }} className="mb-2">
                                <a href="#contact" 
                                    className={`${
                                        darkMode 
                                            ? 'text-white hover:text-blue-400 mobile-menu-item bg-white/10 border border-blue-400/10' 
                                            : 'text-gray-700 hover:text-accent-blue mobile-menu-item'
                                    } font-medium transition-colors text-lg block important-text px-4 py-3 rounded-md`}
                                    onClick={(e) => {
                                        handleSmoothScroll(e, 'contact');
                                    }}
                                >
                                    {t('navbar.contact')}
                                </a>
                            </motion.div>
                        </div>

                        {/* Icônes des réseaux sociaux pour mobile */}
                        <motion.div variants={itemVariants} transition={{ delay: 0.7 }}>
                            <div className={`mt-2 pt-2 ${
                                darkMode 
                                    ? 'border-t border-blue-400/10' 
                                    : 'border-t border-gray-200'
                            }`}>
                                <div className="flex justify-between items-center mb-2">
                                    <p className={`${
                                        darkMode 
                                            ? 'text-white' 
                                            : 'text-gray-700'
                                    } font-medium`}>Suivez-nous</p>
                                </div>
                                
                                <div className={`flex justify-between items-center space-x-4 ${
                                    darkMode 
                                        ? 'bg-white/10 p-2 rounded-lg border border-blue-400/10' 
                                        : 'bg-gray-100/80 p-2 rounded-lg'
                                }`}>
                                    <div className="flex items-center space-x-3">
                                        <div className="relative flex items-center">
                                            <button 
                                                onClick={() => setShowCreatorModal(!showCreatorModal)}
                                                className={`transition-all duration-300 flex items-center justify-center w-8 h-8 rounded-full ${
                                                    darkMode 
                                                        ? 'bg-blue-900/30 hover:bg-blue-800/50 border border-blue-700/30 text-white' 
                                                        : 'bg-gray-200/80 hover:bg-gray-300 border border-gray-300/50 text-gray-700 hover:text-gray-900'
                                                }`}
                                            >
                                                <FaQuestionCircle className="w-4 h-4" />
                                            </button>
                                                    
                                                    {/* Modal du créateur */}
                                                    <AnimatePresence>
                                                        {showCreatorModal && (
                                                            <motion.div 
                                                                className="fixed right-4 bottom-4 w-72 bg-black/80 p-6 rounded-xl shadow-2xl z-[100] backdrop-blur-md border border-white/20"
                                                                initial={{ opacity: 0, y: 10, x: 20 }}
                                                                animate={{ opacity: 1, y: 0, x: 0 }}
                                                                exit={{ opacity: 0, y: 10, x: 20 }}
                                                            >
                                                                <div className="flex items-center mb-4">
                                                                    <Image 
                                                                        src="/images/mon-logo/Frame-3574.webp"
                                                                        alt="Logo créateur"
                                                                        width={160}
                                                                        height={160}
                                                                        className="w-28 h-28 mr-4"
                                                                        quality={100}
                                                                        priority
                                                                        unoptimized
                                                                        style={{ objectFit: 'contain' }}
                                                                    />
                                                                    <div>
                                                                        <p className="text-base font-semibold text-white">Mad Chat</p>
                                                                        <p className="text-sm text-blue-400">Développeur Full Stack</p>
                                                                    </div>
                                                                </div>
                                                                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                                                                    Concepteur et développeur de solutions web innovantes. Spécialisé dans la création d&apos;applications modernes avec React et Next.js, je combine créativité et expertise technique pour offrir des expériences utilisateur exceptionnelles.
                                                                </p>
                                                                <a 
                                                                    href="mailto:mad.chat0000@gmail.com"
                                                                    className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                                                >
                                                                    <FaEnvelope className="mr-2" /> mad.chat0000@gmail.com
                                                                </a>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                        </div>
                                        <div className="relative flex items-center">
                                            <button 
                                                onClick={() => setShowConstructionModal('facebook')}
                                                className={`transition-all duration-300 flex items-center justify-center w-8 h-8 rounded-full ${
                                                    darkMode 
                                                        ? 'bg-blue-900/30 hover:bg-blue-800/50 border border-blue-700/30 text-white' 
                                                        : 'bg-gray-200/80 hover:bg-gray-300 border border-gray-300/50 text-gray-700 hover:text-gray-900'
                                                }`}
                                            >
                                                <FaFacebook className="w-4 h-4" />
                                            </button>
                                            {showConstructionModal === 'facebook' && (
                                                <motion.div 
                                                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/80 px-3 py-1.5 rounded-lg text-xs text-white whitespace-nowrap shadow-lg z-[100] border border-white/20 backdrop-blur-md"
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 5 }}
                                                >
                                                    En construction
                                                </motion.div>
                                            )}
                                        </div>
                                        <div className="relative flex items-center">
                                            <button 
                                                onClick={() => setShowConstructionModal('twitter')}
                                                className={`transition-all duration-300 flex items-center justify-center w-8 h-8 rounded-full ${
                                                    darkMode 
                                                        ? 'bg-blue-900/30 hover:bg-blue-800/50 border border-blue-700/30 text-white' 
                                                        : 'bg-gray-200/80 hover:bg-gray-300 border border-gray-300/50 text-gray-700 hover:text-gray-900'
                                                }`}
                                            >
                                                <SiX className="w-4 h-4" />
                                            </button>
                                            {showConstructionModal === 'twitter' && (
                                                <motion.div 
                                                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/80 px-3 py-1.5 rounded-lg text-xs text-white whitespace-nowrap shadow-lg z-[100] border border-white/20 backdrop-blur-md"
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 5 }}
                                                >
                                                    En construction
                                                </motion.div>
                                            )}
                                        </div>
                                        <div className="relative flex items-center">
                                            <button 
                                                onClick={() => setShowConstructionModal('instagram')}
                                                className={`transition-all duration-300 flex items-center justify-center w-8 h-8 rounded-full ${
                                                    darkMode 
                                                        ? 'bg-blue-900/30 hover:bg-blue-800/50 border border-blue-700/30 text-white' 
                                                        : 'bg-gray-200/80 hover:bg-gray-300 border border-gray-300/50 text-gray-700 hover:text-gray-900'
                                                }`}
                                            >
                                                <FaInstagram className="w-4 h-4" />
                                            </button>
                                            {showConstructionModal === 'instagram' && (
                                                <motion.div 
                                                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/80 px-3 py-1.5 rounded-lg text-xs text-white whitespace-nowrap shadow-lg z-[100] border border-white/20 backdrop-blur-md"
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 5 }}
                                                >
                                                    En construction
                                                </motion.div>
                                            )}
                                        </div>
                                        <div className="relative flex items-center">
                                            <button 
                                                onClick={() => setShowConstructionModal('tiktok')}
                                                className={`transition-all duration-300 flex items-center justify-center w-8 h-8 rounded-full ${
                                                    darkMode 
                                                        ? 'bg-blue-900/30 hover:bg-blue-800/50 border border-blue-700/30 text-white' 
                                                        : 'bg-gray-200/80 hover:bg-gray-300 border border-gray-300/50 text-gray-700 hover:text-gray-900'
                                                }`}
                                            >
                                                <FaTiktok className="w-4 h-4" />
                                            </button>
                                            {showConstructionModal === 'tiktok' && (
                                                <motion.div 
                                                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/80 px-3 py-1.5 rounded-lg text-xs text-white whitespace-nowrap shadow-lg z-[100] border border-white/20 backdrop-blur-md"
                                                    initial={{ opacity: 0, y: 5 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 5 }}
                                                >
                                                    En construction
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Fond décoratif */}
                    <div className="absolute inset-x-0 bottom-2 flex items-center justify-center pointer-events-none">
                        <Image 
                            src={darkMode 
                                ? "/images/img-logo-nav/conception-vecteur-illustration-logo-pneu_681672-192 copy.png"
                                : "/images/img-logo-nav/conception-vecteur-illustration-logo-pneu-ligth.png"
                            }
                            alt="Logo Dépannage Pneus 06" 
                            width={320}
                            height={320}
                            className={`w-80 h-auto ${darkMode ? 'opacity-[0.08] brightness-150 filter' : 'opacity-[0.08]'}`}
                            priority
                            quality={100}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* Bouton d'information flottant */}
        <div className="fixed bottom-6 right-6 z-50">
            <motion.button
                onClick={() => setShowInfoModal(!showInfoModal)}
                className={`rounded-full p-3 shadow-lg ${
                    darkMode
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-green-600 hover:bg-green-700'
                } transition-all duration-300 text-white`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Informations"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
            </motion.button>
        </div>

        {/* Modal d'information */}
        <AnimatePresence>
            {showInfoModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
                    onClick={() => setShowInfoModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        className={`${
                            darkMode
                                ? 'bg-gray-900 border border-blue-900/30'
                                : 'bg-white border border-green-900/20'
                        } p-6 rounded-2xl text-center max-w-md mx-4`}
                        onClick={e => e.stopPropagation()}
                    >
                        <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
                            Numéro d&apos;urgence
                        </h3>
                        <div className="flex flex-col items-center gap-4">
                            <p className={`text-4xl font-bold ${
                                darkMode
                                    ? 'bg-gradient-to-r from-blue-400 to-indigo-500'
                                    : 'bg-gradient-to-r from-green-400 to-emerald-500'
                                } bg-clip-text text-transparent flex items-center justify-center gap-2`}>
                                <FaWhatsapp className={`text-4xl ${darkMode ? 'text-blue-500' : 'text-green-500'}`} />
                                07 44 47 44 44
                            </p>
                            <a href="tel:0744474444" className="block w-full">
                                <button className={`w-full ${
                                    darkMode
                                        ? 'bg-blue-600 hover:bg-blue-700'
                                        : 'bg-green-500 hover:bg-green-600'
                                    } text-white font-medium py-2.5 px-6 rounded-full transition-all duration-300 text-lg flex items-center justify-center shadow-lg hover:shadow-xl`}>
                                    <FaWhatsapp className="mr-2" />
                                    Appeler maintenant
                                </button>
                            </a>
                            <button
                                onClick={() => setShowInfoModal(false)}
                                className={`w-full px-6 py-2.5 ${
                                    darkMode
                                        ? 'border border-blue-700/50 text-white hover:bg-blue-900/30'
                                        : 'border border-green-600/50 text-gray-700 hover:bg-green-50'
                                } rounded-full transition-all duration-300`}
                            >
                                Fermer
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
};

export default Navbar;