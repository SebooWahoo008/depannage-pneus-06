"use client";

import { useState, useEffect } from 'react';
import { FaStar, FaSpinner, FaPhone, FaTools, FaWrench, FaTruck, FaClock } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '@/translations';
import Script from 'next/script';

type TireSize = {
    category: string;
    sizes: string[];
};

type Product = {
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
};

const PneusDetails = () => {
    const [activeTab, setActiveTab] = useState<string>('presentation');
    const [activeCategory, setActiveCategory] = useState('tous');
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(3);
    const [isLoading, setIsLoading] = useState(false);
    const [pageDirection, setPageDirection] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
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

    const tabs = [
        { id: 'presentation', name: t('pneusDetails.tabs.presentation', 'Présentation') },
        { id: 'produits', name: t('pneusDetails.tabs.products', 'Notre Sélection') },
        { id: 'dimensions', name: t('pneusDetails.tabs.dimensions', 'Dimensions') },
        { id: 'services', name: t('pneusDetails.tabs.services', 'Services') }
    ];

    const categories = [
        { id: 'tous', name: t('pneusDetails.categories.all', 'Tous') },
        { id: 'ete', name: t('pneusDetails.categories.summer', 'Pneus Été') },
        { id: 'hiver', name: t('pneusDetails.categories.winter', 'Pneus Hiver') },
        { id: '4saisons', name: t('pneusDetails.categories.allSeason', 'Pneus 4 Saisons') },
        { id: 'suv', name: t('pneusDetails.categories.suv', 'SUV/4x4') },
    ];

    const products: Product[] = [
        {
            id: 1,
            name: t('pneusDetails.products.michelin.name', 'Michelin Primacy 4'),
            category: 'ete',
            image: '/images/optimized/tires.webp',
            description: t('pneusDetails.products.michelin.description', 'Excellence en tenue de route et longévité. Performance optimale sur sol sec et mouillé.'),
        },
        {
            id: 2,
            name: t('pneusDetails.products.bridgestone.name', 'Bridgestone Blizzak LM005'),
            category: 'hiver',
            image: '/images/optimized/tires.webp',
            description: t('pneusDetails.products.bridgestone.description', 'Adhérence exceptionnelle sur neige et glace. Confort et sécurité en conditions hivernales.'),
        },
        {
            id: 3,
            name: t('pneusDetails.products.continental.name', 'Continental AllSeasonContact'),
            category: '4saisons',
            image: '/images/optimized/tires.webp',
            description: t('pneusDetails.products.continental.description', 'Performance équilibrée toute l\'année. Idéal pour les climats tempérés et variables.'),
        },
        {
            id: 4,
            name: t('pneusDetails.products.pirelli.name', 'Pirelli Scorpion Verde'),
            category: 'suv',
            image: '/images/optimized/tires.webp',
            description: t('pneusDetails.products.pirelli.description', 'Spécialement conçu pour les SUV et 4x4. Alliant performance et respect de l\'environnement.'),
        },
        {
            id: 5,
            name: t('pneusDetails.products.goodyear.name', 'Goodyear Vector 4Seasons Gen-3'),
            category: '4saisons',
            image: '/images/optimized/tires.webp',
            description: t('pneusDetails.products.goodyear.description', 'Technologie innovante pour toutes les saisons. Performance constante toute l\'année.'),
        },
        {
            id: 6,
            name: t('pneusDetails.products.hankook.name', 'Hankook Ventus Prime3'),
            category: 'ete',
            image: '/images/optimized/tires.webp',
            description: t('pneusDetails.products.hankook.description', 'Excellent rapport qualité-prix. Confort de conduite et faible niveau sonore.'),
        }
    ];

    const tireSizes: TireSize[] = [
        {
            category: t('pneusDetails.tireSizes.passenger.title', 'Véhicules particuliers'),
            sizes: ['195/65 R15', '205/55 R16', '225/45 R17', '225/40 R18', '235/35 R19']
        },
        {
            category: t('pneusDetails.tireSizes.suv.title', 'SUV et 4x4'),
            sizes: ['215/65 R16', '225/65 R17', '235/60 R18', '255/55 R19', '275/45 R20']
        },
        {
            category: t('pneusDetails.tireSizes.commercial.title', 'Utilitaires'),
            sizes: ['195/70 R15C', '215/65 R16C', '225/65 R16C', '235/65 R16C']
        }
    ];

    const filteredProducts = activeCategory === 'tous' 
        ? products 
        : products.filter(product => product.category === activeCategory);

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Animation variants for page transitions
    const pageTransitionVariants = {
        hidden: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        })
    };
    
    // Enhanced paginate function with loading state
    const paginate = (pageNumber: number) => {
        setIsLoading(true);
        setPageDirection(pageNumber > currentPage ? 1 : -1);
        
        // Simulate loading delay
        setTimeout(() => {
            setCurrentPage(pageNumber);
            setIsLoading(false);
        }, 300);
    };
    
    // Same for category change
    const handleCategoryChange = (categoryId: string) => {
        if (categoryId === activeCategory) return;
        
        setIsLoading(true);
        setTimeout(() => {
            setActiveCategory(categoryId);
            setCurrentPage(1);
            setIsLoading(false);
        }, 300);
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100
            }
        }),
        hover: {
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        },
        tap: {
            scale: 0.98
        }
    };

    // Description des services
    const services = [
        {
            id: 1,
            title: t('pneusDetails.services.mounting.title', 'Montage & Équilibrage'),
            description: t('pneusDetails.services.mounting.description', 'Notre équipe procède au montage et à l\'équilibrage précis de vos pneus, garantissant confort de conduite et sécurité optimale.'),
            icon: <FaTools className="w-8 h-8 text-red-500" />
        },
        {
            id: 2,
            title: t('pneusDetails.services.alignment.title', 'Parallélisme'),
            description: t('pneusDetails.services.alignment.description', 'Un réglage précis de la géométrie de vos roues pour une tenue de route parfaite et une usure homogène de vos pneumatiques.'),
            icon: <FaWrench className="w-8 h-8 text-red-500" />
        },
        {
            id: 3,
            title: t('pneusDetails.services.mobile.title', 'Service Mobile'),
            description: t('pneusDetails.services.mobile.description', 'Notre équipe se déplace chez vous ou sur votre lieu de travail pour changer vos pneus avec notre atelier mobile entièrement équipé.'),
            icon: <FaTruck className="w-8 h-8 text-red-500" />
        },
        {
            id: 4,
            title: t('pneusDetails.services.emergency.title', 'Assistance 24/7'),
            description: t('pneusDetails.services.emergency.description', 'Un pneu crevé en pleine nuit ? Notre service d\'urgence est disponible 24h/24 et 7j/7 pour vous dépanner rapidement.'),
            icon: <FaClock className="w-8 h-8 text-red-500" />
        }
    ];

    // Fonction pour ouvrir le modal avec le produit sélectionné
    const openProductModal = (product: Product) => {
        setSelectedProduct(product);
    };

    // Fonction pour fermer le modal
    const closeProductModal = () => {
        setSelectedProduct(null);
    };

    // Composant Modal pour afficher les détails des produits
    const ProductModal = () => {
        if (!selectedProduct) return null;
        
        // Données structurées pour le produit
        const productSchema = {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": selectedProduct.name,
          "image": selectedProduct.image,
          "description": selectedProduct.description,
          "category": getCategoryName(selectedProduct.category),
          "brand": {
            "@type": "Brand",
            "name": selectedProduct.name.split(' ')[0] // Extraction de la marque du nom du produit
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "price": "Sur devis",
            "priceCurrency": "EUR"
          }
        };
        
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeProductModal}></div>
            <div className={`relative w-full max-w-lg rounded-xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden`}>
              <Script id={`product-schema-${selectedProduct.id}`} type="application/ld+json">
                {JSON.stringify(productSchema)}
              </Script>
              <div className="aspect-video w-full relative">
                <Image 
                  src={selectedProduct.image} 
                  alt={`Pneu ${selectedProduct.name} - ${t(`pneusDetails.categories.${selectedProduct.category}`, selectedProduct.category)}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{selectedProduct.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                  darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-green-100 text-green-800'
                }`}>
                  {getCategoryName(selectedProduct.category)}
                </span>
                <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{selectedProduct.description}</p>
                <div className="mt-5 flex justify-end space-x-3">
                  <button
                    onClick={closeProductModal}
                    className={`px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    {t('pneusDetails.products.close')}
                  </button>
                  <a 
                    href="tel:0744474444"
                    className={`px-4 py-2 rounded-lg ${
                      darkMode 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {t('pneusDetails.products.contact')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
    };

    // Content for presentation tab
    const renderPresentation = () => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 gap-8 items-center"
        >
            <div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {t('pneusDetails.presentation.title', 'Spécialiste en pneumatiques depuis 15 ans')}
                </h3>
                <div className={`space-y-4 text-base md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <p>{t('pneusDetails.presentation.paragraph1', 'Chez Dépannage Pneus 06, nous sommes passionés par votre sécurité sur la route. Notre équipe de professionnels qualifiés s\'engage à vous fournir les meilleurs services de pneumatiques dans la région.')}</p>
                    <p>{t('pneusDetails.presentation.paragraph2', 'Que vous ayez besoin de pneus été, hiver ou toutes saisons, nous avons ce qu\'il vous faut. Notre expertise s\'étend des véhicules particuliers aux utilitaires, en passant par les SUV et 4x4.')}</p>
                    <p>{t('pneusDetails.presentation.paragraph3', 'Nous travaillons avec les plus grandes marques du marché pour vous offrir un large choix de pneus adaptés à tous les budgets et à tous les besoins.')}</p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                    <div className={`flex items-center gap-2 p-3 rounded-lg ${
                        darkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                    }`}>
                        <FaStar className="text-yellow-500" />
                        <span className="font-medium">{t('pneusDetails.presentation.rating', '4.9/5 - 500+ avis clients')}</span>
                    </div>
                    <a href="tel:+33612345678" className={`flex items-center gap-2 p-3 rounded-lg ${
                        darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
                    }`}>
                        <FaPhone />
                        <span className="font-medium">{t('pneusDetails.presentation.phoneAction', 'Contactez-nous')}</span>
                    </a>
                </div>
            </div>
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image 
                    src="/images/optimized/punctured-car-tire-1.webp" 
                    alt={t('pneusDetails.presentation.imageAlt', 'Atelier de pneumatiques Dépannage Pneus 06')}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>
        </motion.div>
    );

    // Content for services tab
    const renderServices = () => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-6"
        >
            <h3 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {t('pneusDetails.servicesSection.title', 'Nos Services Professionnels')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                    <div 
                        key={service.id}
                        className={`p-6 rounded-lg shadow-md ${
                            darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                        } transition-colors duration-300`}
                    >
                        <div className="flex items-start">
                            <div className="mr-4">
                                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                                    {service.icon}
                                </div>
                            </div>
                            <div>
                                <h4 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                                    {service.title}
                                </h4>
                                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );

    // Content for dimensions tab
    const renderDimensions = () => (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 md:p-8"
        >
            <div className="mb-6">
                <h3 className={`text-xl md:text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {t('pneusDetails.dimensions.title', 'Dimensions Disponibles')}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('pneusDetails.dimensions.description', 'Nous disposons d\'un large stock de pneus dans toutes les dimensions standards. Si vous ne trouvez pas votre taille, n\'hésitez pas à nous contacter pour une commande spéciale.')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tireSizes.map((category, index) => (
                    <motion.div
                        key={category.category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { delay: index * 0.1 } 
                        }}
                        className={`rounded-lg p-4 shadow-sm ${
                            darkMode ? 'bg-gray-700' : 'bg-gray-50'
                        }`}
                    >
                        <h4 className={`font-semibold mb-3 pb-2 border-b ${
                            darkMode ? 'text-white border-gray-600' : 'text-gray-900 border-gray-200'
                        }`}>
                            {t(`pneusDetails.dimensions.categories.${category.category}`, category.category)}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {category.sizes.map(size => (
                                <span 
                                    key={size} 
                                    className={`inline-block px-2 py-1 text-sm rounded border transition-colors duration-200 ${
                                        darkMode 
                                            ? 'bg-gray-800 text-gray-300 border-gray-600 hover:border-blue-500' 
                                            : 'bg-white text-gray-700 border-gray-200 hover:border-green-300'
                                    }`}
                                >
                                    {size}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <a href="tel:0744474444" className="inline-block">
                    <button className={`${
                        darkMode 
                            ? 'bg-blue-600 hover:bg-blue-700' 
                            : 'bg-green-600 hover:bg-green-700'
                        } text-white font-medium py-4 px-6 rounded-lg text-base flex items-center justify-center shadow-lg`}>
                        <FaPhone className="text-white mr-2" />
                        {t('pneusDetails.dimensions.emergencyService', 'Service d\'urgence : 07 44 47 44 44')}
                    </button>
                </a>
            </div>
        </motion.div>
    );

    // Fonction pour obtenir le nom de la catégorie
    const getCategoryName = (categoryId: string): string => {
        switch(categoryId) {
            case 'ete':
                return t('pneusDetails.categories.summer', 'Pneus Été');
            case 'hiver':
                return t('pneusDetails.categories.winter', 'Pneus Hiver');
            case '4saisons':
                return t('pneusDetails.categories.allSeason', 'Pneus 4 Saisons');
            case 'suv':
                return t('pneusDetails.categories.suv', 'SUV/4x4');
            default:
                return categoryId;
        }
    };

    return (
        <section id="produits" className={`px-4 py-16 md:py-24 ${
            darkMode 
                ? 'bg-[#0a192f] text-white' 
                : 'bg-emerald-50/30 text-gray-900'
        }`}>
            <div className="max-w-7xl mx-auto">
                {/* Modal d'affichage des détails du produit */}
                <AnimatePresence>
                    {selectedProduct && <ProductModal />}
                </AnimatePresence>

                <div className="mb-12 text-center">
                    <h2 className={`text-3xl md:text-4xl font-bold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    } mb-4`}>{t('pneusDetails.title', 'Nos Pneus et Services')}</h2>
                    <p className={`text-lg ${
                        darkMode ? 'text-gray-300 bg-blue-900/70 border-blue-700/30' : 'text-gray-700 bg-green-50/90 border-green-200/50'
                    } max-w-3xl mx-auto p-4 rounded-lg backdrop-blur-sm shadow-lg border mb-8`}>
                        {t('pneusDetails.description', 'Chez Dépannage Pneus 06, nous proposons une large gamme de pneumatiques pour tous types de véhicules, des voitures particulières aux utilitaires. Nous sélectionnons avec soin chaque pneu pour vous offrir un excellent rapport qualité-prix.')}
                    </p>
                </div>

                {/* Tab navigation */}
                <div className="mb-8 overflow-x-auto no-scrollbar">
                    <div className="flex space-x-2 md:space-x-4 min-w-max md:justify-center pb-2">
                    {tabs.map((tab) => (
                            <button
                            key={tab.id}
                            data-tab={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                                className={`px-3 sm:px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ${
                                activeTab === tab.id 
                                        ? darkMode 
                                            ? 'bg-blue-600 text-white shadow-md' 
                                            : 'bg-green-600 text-white shadow-md'
                                        : darkMode
                                            ? 'bg-white/80 text-gray-700 hover:bg-white hover:text-blue-600'
                                            : 'bg-white/80 text-gray-700 hover:bg-white hover:text-green-600'
                                }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tabs Content */}
                <div className="py-6 min-h-[400px]">
                    <div className="container mx-auto px-4">
                        <AnimatePresence mode="wait">
                            {/* Presentation Tab */}
                            {activeTab === 'presentation' && renderPresentation()}

                            {/* Services Tab */}
                            {activeTab === 'services' && renderServices()}

                            {/* Products Tab */}
                            {activeTab === 'produits' && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {/* Filter categories */}
                                    <div className="mb-8 overflow-x-auto no-scrollbar">
                                        <div className="flex space-x-2 min-w-max md:justify-center pb-2">
                                            {categories.map((category) => (
                                                <button
                                                    key={category.id}
                                                    onClick={() => handleCategoryChange(category.id)}
                                                    className={`px-3 sm:px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ${
                                                        activeCategory === category.id
                                                            ? darkMode
                                                                ? 'bg-blue-600 text-white shadow-md'
                                                                : 'bg-green-600 text-white shadow-md'
                                                            : 'bg-white text-gray-700 hover:bg-gray-100'
                                                    }`}
                                                >
                                                    {category.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Products grid */}
                                    <div className="relative">
                                        {isLoading ? (
                                            <div className="flex justify-center items-center h-96">
                                                <FaSpinner className="animate-spin text-green-600 h-12 w-12" />
                                            </div>
                                        ) : (
                                            <AnimatePresence mode="wait" custom={pageDirection}>
                                                <motion.div
                                                    key={`page-${currentPage}-${activeCategory}`}
                                                    custom={pageDirection}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    variants={pageTransitionVariants}
                                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                                                >
                                                    {currentProducts.map((product, index) => (
                                                        <motion.div 
                                                            key={product.id} 
                                                            custom={index}
                                                            variants={cardVariants}
                                                            whileHover="hover"
                                                            whileTap="tap"
                                                            className={`rounded-xl shadow-md overflow-hidden group border ${
                                                                darkMode ? 'bg-gray-800 border-blue-900' : 'bg-white border-blue-600/20'
                                                            }`}
                                                            style={{ 
                                                                transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                                                                boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.4)' : '0 4px 20px rgba(0, 0, 0, 0.1)'
                                                            }}
                                                        >
                                                            <div className="flex flex-col h-full">
                                                                <div className="relative flex-shrink-0">
                                                                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                                                                        <Image 
                                                                            src={product.image} 
                                                                            alt={`Pneu ${product.name} - ${t(`pneusDetails.categories.${product.category}`, product.category)}`}
                                                                            fill
                                                                            className="object-cover" 
                                                                        />
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className={`p-4 flex-grow ${
                                                                    darkMode ? 'bg-gray-800' : 'bg-white'
                                                                }`}>
                                                                    <h3 className={`text-lg font-bold mb-2 ${
                                                                        darkMode ? 'text-white' : 'text-gray-800'
                                                                    }`}>
                                                                        {product.name}
                                                                    </h3>
                                                                    <p className={`text-sm mb-4 ${
                                                                        darkMode ? 'text-gray-300' : 'text-gray-600'
                                                                    }`}>
                                                                        {product.description}
                                                                    </p>
                                                                    <div className="mt-auto pt-2">
                                                                        <button 
                                                                            className={`w-full py-2 rounded-md transition-colors duration-300 ${
                                                                                darkMode 
                                                                                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                                                                                    : 'bg-green-600 hover:bg-green-700 text-white'
                                                                            }`}
                                                                            onClick={() => openProductModal(product)}
                                                                        >
                                                                            {t('pneusDetails.product.viewDetails', 'Voir détails')}
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            </AnimatePresence>
                                        )}

                                        {/* Pagination controls */}
                                        {totalPages > 1 && (
                                            <div className="flex justify-center mt-8">
                                                <button
                                                    onClick={() => paginate(currentPage - 1)}
                                                    disabled={currentPage === 1 || isLoading}
                                                    className={`px-4 py-2 rounded-l-md ${
                                                        darkMode
                                                            ? 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 disabled:bg-gray-900 disabled:text-gray-600'
                                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400'
                                                    } border transition-colors disabled:cursor-not-allowed`}
                                                >
                                                    {t('pneusDetails.pagination.previous', 'Précédent')}
                                                </button>
                                                <div className={`px-4 py-2 ${
                                                    darkMode
                                                        ? 'bg-gray-800 text-gray-300 border-gray-700'
                                                        : 'bg-white text-gray-700 border-gray-300'
                                                } border-t border-b flex items-center`}>
                                                    {t('pneusDetails.pagination.page', 'Page')} {currentPage} {t('pneusDetails.pagination.of', 'sur')} {totalPages}
                                                </div>
                                                <button
                                                    onClick={() => paginate(currentPage + 1)}
                                                    disabled={currentPage === totalPages || isLoading}
                                                    className={`px-4 py-2 rounded-r-md ${
                                                        darkMode
                                                            ? 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 disabled:bg-gray-900 disabled:text-gray-600'
                                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400'
                                                    } border transition-colors disabled:cursor-not-allowed`}
                                                >
                                                    {isLoading ? t('pneusDetails.product.loading', 'Chargement...') : t('pneusDetails.pagination.next', 'Suivant')}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                            
                            {/* Dimensions Tab */}
                            {activeTab === 'dimensions' && renderDimensions()}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PneusDetails; 