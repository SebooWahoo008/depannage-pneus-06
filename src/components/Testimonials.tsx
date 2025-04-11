"use client";

import { useState, useEffect } from "react";
import { FaStar, FaQuoteLeft, FaTimes, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [darkMode, setDarkMode] = useState(false);

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

  const testimonials = [
    {
      id: 1,
      name: "Armen Petrosyan",
      position: "Propriétaire BMW X5",
      rating: 5,
      text: "Service remarquable et personnel très compétent. Le remplacement de mes pneus a été effectué avec une grande précision. Aucune secousse sur route, je conseille fortement cette entreprise.",
    },
    {
      id: 2,
      name: "Anastasia Ivanova",
      position: "Conductrice Volvo XC60",
      rating: 5,
      text: "Prestation exceptionnelle avec un prix très avantageux. Les techniciens ont su me recommander les meilleurs pneus pour mon véhicule. Équipe chaleureuse et expertise indéniable.",
    },
    {
      id: 3,
      name: "Pierre Lefevre",
      position: "Utilisateur Citroën C4",
      rating: 4,
      text: "Très content des recommandations pour mes nouveaux pneus. Montage efficace et résultat parfait. Je vais sans hésiter suggérer Dépannage Pneus 06 à mes proches et collègues.",
    },
    {
      id: 4,
      name: "Jessica Thompson",
      position: "Propriétaire Range Rover Evoque",
      rating: 5,
      text: "Personnel aimable qui a pris le temps de détailler les diverses options disponibles. Ravie de la qualité des pneumatiques et du service client impeccable.",
    },
    {
      id: 5,
      name: "Tigran Hakobyan",
      position: "Conducteur Mercedes GLC",
      rating: 5,
      text: "Intervention rapide suite à une crevaison sur autoroute. Réparation parfaite et conseils judicieux pour prolonger la durée de vie de mes pneus. Service digne de confiance.",
    },
    {
      id: 6,
      name: "Sergei Kuznetsov",
      position: "Chauffeur Toyota Land Cruiser",
      rating: 5,
      text: "Excellente expérience avec cette entreprise. Livraison et montage dans les délais annoncés. La qualité des pneus tout terrain choisis est extraordinaire même sur chemins difficiles.",
    },
    {
      id: 7,
      name: "Sophie Martin",
      position: "Conductrice Tesla Model 3",
      rating: 4,
      text: "Service client exemplaire et grande expertise technique. Les pneus silencieux recommandés ont amélioré considérablement le confort de conduite de ma voiture électrique.",
    },
    {
      id: 8,
      name: "James Wilson",
      position: "Propriétaire Jaguar F-Pace",
      rating: 5,
      text: "Un grand merci pour la réactivité lors de mon dépannage nocturne. Équipe disponible et professionnelle. Les nouveaux pneus sont parfaitement adaptés à ma conduite sportive.",
    },
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRatingClick = (index: number) => {
    setRating(index);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Merci pour votre avis ! Nom: ${name}, Note: ${rating}/5, Message: ${message}`
    );
    setName("");
    setPosition("");
    setRating(0);
    setMessage("");
    closeModal();
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background avec effet de gradient */}
      <div className="absolute inset-0 z-0" style={{ 
        background: darkMode 
          ? 'linear-gradient(to bottom, rgba(10, 25, 47, 0.98), rgba(17, 34, 64, 0.95))' 
          : 'linear-gradient(to bottom, rgba(12, 136, 95, 0.95), rgba(16, 185, 129, 0.9))'
      }}></div>
      
      {/* Cercles décoratifs flous */}
      <div className={`absolute top-0 left-0 w-96 h-96 rounded-full filter blur-[120px] opacity-70 z-0 ${
        darkMode ? 'bg-blue-600/15' : 'bg-green-600/10'
      }`}></div>
      <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full filter blur-[130px] opacity-70 z-0 ${
        darkMode ? 'bg-indigo-600/15' : 'bg-emerald-700/10'
      }`}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`text-sm font-semibold uppercase tracking-wider mb-4 block ${
              darkMode ? 'text-blue-300' : 'text-green-300'
            }`}
          >
            Témoignages
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent ${
              darkMode 
                ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500' 
                : 'bg-gradient-to-r from-green-400 via-green-500 to-emerald-500'
            }`}
          >
            Ce Que Disent Nos Clients
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-8"
          >
            La satisfaction de nos clients est notre priorité absolue. Découvrez les avis de personnes qui nous ont fait confiance.
          </motion.p>
          
          <motion.button
            onClick={openModal}
            className={`px-8 py-3 text-white rounded-full shadow-lg transition-all duration-300 ${
              darkMode 
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-blue-600/20' 
                : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-green-600/20'
            }`}
            whileHover={{ scale: 1.05, boxShadow: darkMode 
              ? "0 10px 25px -5px rgba(59, 130, 246, 0.5)" 
              : "0 10px 25px -5px rgba(16, 185, 129, 0.5)" 
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Partagez votre expérience
          </motion.button>
        </div>

        <div className="relative testimonial-container">
          {/* Flèches de navigation personnalisées */}
          <div className="absolute top-1/2 -left-4 sm:-left-5 z-30 transform -translate-y-1/2">
            <button className={`swiper-custom-prev rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-200 focus:outline-none transition-all duration-300 ${
              darkMode 
                ? 'hover:bg-blue-600/80 hover:border-blue-600/80' 
                : 'hover:bg-green-600/80 hover:border-green-600/80'
            }`}>
              <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 sm:-right-5 z-30 transform -translate-y-1/2">
            <button className={`swiper-custom-next rounded-full w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-200 focus:outline-none transition-all duration-300 ${
              darkMode 
                ? 'hover:bg-blue-600/80 hover:border-blue-600/80' 
                : 'hover:bg-green-600/80 hover:border-green-600/80'
            }`}>
              <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              bulletActiveClass: `swiper-pagination-bullet-active ${darkMode ? 'bg-blue-500 border-blue-500' : 'bg-green-500 border-green-500'}`,
              bulletClass: "swiper-pagination-bullet bg-gray-400 opacity-70 w-2.5 h-2.5 mx-1.5"
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.swiper-custom-prev',
              nextEl: '.swiper-custom-next',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-14 pt-2"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div 
                  className={`p-8 rounded-2xl shadow-xl border h-full flex flex-col ${
                    darkMode 
                      ? 'bg-gradient-to-b from-[#112240]/80 to-[#0a192f]/80 backdrop-blur-sm border-blue-900/20' 
                      : 'bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border-white/10'
                  }`}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      darkMode ? 'bg-blue-600/20' : 'bg-green-600/20'
                    }`}>
                      <FaQuoteLeft className={`w-3.5 h-3.5 ${
                        darkMode ? 'text-blue-400' : 'text-green-400'
                      }`} />
                    </div>
                  </div>
                  
                  <div className="mb-6 text-gray-200 flex-grow">
                    <p className="text-sm leading-relaxed">{testimonial.text}</p>
                  </div>
                  
                  <div className={`mt-auto pt-4 border-t ${
                    darkMode ? 'border-blue-900/20' : 'border-white/10'
                  }`}>
                    <p className="font-bold text-white">
                      {testimonial.name}
                    </p>
                    <p className={`text-sm ${
                      darkMode ? 'text-blue-400' : 'text-green-400'
                    }`}>
                      {testimonial.position}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Modal pour laisser un avis */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`p-8 rounded-2xl shadow-2xl max-w-md w-full ${
                  darkMode 
                    ? 'bg-gradient-to-b from-gray-900 to-[#0a192f] border border-blue-900/30' 
                    : 'bg-gradient-to-b from-gray-900 to-gray-800 border border-green-900/30'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-white">
                    Partagez votre expérience
                  </h3>
                  <button
                    onClick={closeModal}
                    className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300 transition-colors ${
                      darkMode ? 'hover:bg-blue-600/20' : 'hover:bg-green-600/20'
                    }`}
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      className="block text-gray-300 text-sm font-medium mb-2"
                      htmlFor="name"
                    >
                      Votre nom
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`bg-white/10 border rounded-lg w-full py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent ${
                        darkMode 
                          ? 'border-white/20 focus:ring-blue-500' 
                          : 'border-white/20 focus:ring-green-500'
                      }`}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-300 text-sm font-medium mb-2"
                      htmlFor="position"
                    >
                      Modèle du véhicule (optionnel)
                    </label>
                    <input
                      id="position"
                      type="text"
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className={`bg-white/10 border rounded-lg w-full py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent ${
                        darkMode 
                          ? 'border-white/20 focus:ring-blue-500' 
                          : 'border-white/20 focus:ring-green-500'
                      }`}
                      placeholder="Citroën C3"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Votre note
                    </label>
                    <div className="flex items-center space-x-2 bg-white/10 p-3 rounded-lg border border-white/20">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <motion.div
                          key={index}
                          className="cursor-pointer"
                          onClick={() => handleRatingClick(index)}
                          onMouseEnter={() => setHoverRating(index)}
                          onMouseLeave={() => setHoverRating(0)}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaStar
                            className={`w-8 h-8 ${
                              index <= (hoverRating || rating)
                                ? "text-yellow-400"
                                : "text-gray-600"
                            } transition-colors duration-200`}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-gray-300 text-sm font-medium mb-2"
                      htmlFor="message"
                    >
                      Votre message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`bg-white/10 border rounded-lg w-full py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent h-32 resize-none ${
                        darkMode 
                          ? 'border-white/20 focus:ring-blue-500' 
                          : 'border-white/20 focus:ring-green-500'
                      }`}
                      required
                      placeholder="Partagez votre expérience avec nos services..."
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      className={`w-full text-white font-medium py-3 px-6 rounded-xl shadow-lg transition-all duration-300 ${
                        darkMode 
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-blue-600/20' 
                          : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-green-600/20'
                      }`}
                      whileHover={{ 
                        scale: 1.02, 
                        boxShadow: darkMode 
                          ? "0 10px 25px -5px rgba(59, 130, 246, 0.5)" 
                          : "0 10px 25px -5px rgba(16, 185, 129, 0.5)" 
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Envoyer mon avis
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonials;
