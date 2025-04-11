"use client";

import React from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { fadeInUpVariants } from '@/styles/variants';
import OptimizedImage from './OptimizedImage';

interface Service {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Montage de Pneus",
    description: "Service professionnel de montage avec équipement de dernière génération",
    imageSrc: "/images/services/montage.webp",
    imageAlt: "Service de montage de pneus professionnel"
  },
  {
    id: 2,
    title: "Équilibrage",
    description: "Équilibrage précis pour une conduite plus douce et une usure uniforme",
    imageSrc: "/images/services/equilibrage.webp",
    imageAlt: "Machine d&apos;équilibrage de pneus moderne"
  },
  {
    id: 3,
    title: "Diagnostic",
    description: "Analyse complète de l&apos;état de vos pneus et géométrie",
    imageSrc: "/images/services/diagnostic.webp",
    imageAlt: "Équipement de diagnostic de pneus"
  }
];

const ServiceCard = ({ service }: { service: Service }) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUpVariants}
      initial="initial"
      animate={isInView ? "whileInView" : "initial"}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl"
    >
      <div className="aspect-w-16 aspect-h-9">
        <OptimizedImage
          src={service.imageSrc}
          alt={service.imageAlt}
          width={800}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { ref: titleRef, isInView: isTitleInView } = useInView<HTMLDivElement>({ triggerOnce: true });

  return (
    <section 
      id="services" 
      className="py-20 bg-gray-50 dark:bg-gray-900"
      aria-labelledby="services-title"
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
                id="services-title"
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              >
                Nos Services
              </h2>
              <div className="h-1 w-24 bg-accent-red mx-auto rounded-full"></div>
            </motion.div>
          </LazyMotion>
          <motion.p 
            variants={fadeInUpVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6"
          >
            Des services professionnels pour l&apos;entretien de vos pneus
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 