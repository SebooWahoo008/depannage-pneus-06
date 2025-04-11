"use client";

import React, { useState, useEffect } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { fadeInUpVariants } from '@/styles/variants';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/atelier-1.jpg",
    alt: "Notre atelier moderne équipé de machines de dernière génération",
    width: 800,
    height: 600,
    category: "atelier"
  },
  {
    id: 2,
    src: "/images/gallery/equipement-1.jpg",
    alt: "Machine d'équilibrage professionnelle",
    width: 800,
    height: 600,
    category: "equipement"
  },
  {
    id: 3,
    src: "/images/gallery/service-1.jpg",
    alt: "Technicien effectuant un diagnostic de pneus",
    width: 800,
    height: 600,
    category: "service"
  },
  {
    id: 4,
    src: "/images/gallery/atelier-2.jpg",
    alt: "Zone de montage des pneus",
    width: 800,
    height: 600,
    category: "atelier"
  },
  {
    id: 5,
    src: "/images/gallery/equipement-2.jpg",
    alt: "Machine de diagnostic de pneus",
    width: 800,
    height: 600,
    category: "equipement"
  },
  {
    id: 6,
    src: "/images/gallery/service-2.jpg",
    alt: "Service de montage de pneus en cours",
    width: 800,
    height: 600,
    category: "service"
  }
];

const GalleryImage = ({ image, index, darkMode }: { image: GalleryImage; index: number; darkMode: boolean }) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUpVariants}
      initial="initial"
      animate={isInView ? "whileInView" : "initial"}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`overflow-hidden rounded-xl shadow-lg ${darkMode ? 'border border-blue-800/20' : ''}`}
    >
      <motion.div
        className="relative aspect-[4/3] overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className={`absolute inset-0 ${darkMode ? 'bg-blue-900/10' : 'bg-black/5'} z-10`}></div>
        <img 
          src={image.src} 
          alt={image.alt} 
          className="w-full h-full object-cover transition-transform duration-500"
          loading="lazy"
        />
        <div className={`absolute bottom-0 left-0 right-0 p-4 ${darkMode ? 'bg-gradient-to-t from-[#0a192f]/90 to-transparent' : 'bg-gradient-to-t from-black/70 to-transparent'}`}>
          <p className="text-white text-sm font-medium">{image.alt}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Gallery = () => {
  const { ref: titleRef, isInView: isTitleInView } = useInView<HTMLDivElement>({ triggerOnce: true });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const storedPreference = localStorage.getItem('darkMode');
      if (storedPreference !== null) {
        setDarkMode(storedPreference === 'true');
      }
    };

    updateTheme();

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

  return (
    <section 
      id="galerie" 
      className={`py-20 ${darkMode ? 'bg-[#0a192f]' : 'bg-white'}`}
      aria-labelledby="gallery-title"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <LazyMotion features={domAnimation}>
            <motion.div
              ref={titleRef}
              variants={fadeInUpVariants}
              initial="initial"
              animate={isTitleInView ? "whileInView" : "initial"}
              className="inline-block"
            >
              <h2 
                id="gallery-title"
                className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-black'} mb-4`}
              >
                Notre Galerie
              </h2>
              <div className="h-1 w-24 bg-accent-red mx-auto rounded-full"></div>
            </motion.div>
          </LazyMotion>
          <motion.p 
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mt-6`}
          >
            Découvrez notre atelier et nos équipements professionnels
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryImage key={image.id} image={image} index={index} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery; 