import { FaClock, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Promotions = () => {
  const promos = [
    {
      id: 1,
      title: "Offre Pack 4 Pneus",
      discount: "25%",
      description: "Achetez 4 pneus identiques et bénéficiez de 25% de réduction sur l'ensemble.",
      expiresAt: "31/12/2023",
      bgClass: "bg-gradient-to-br from-green-600 to-green-700",
    },
    {
      id: 2,
      title: "Montage Offert",
      discount: "GRATUIT",
      description: "Pour tout achat de pneus, le montage et l'équilibrage sont offerts.",
      expiresAt: "31/12/2023",
      bgClass: "bg-gradient-to-br from-emerald-600 to-emerald-700",
    },
    {
      id: 3,
      title: "Remise Fidélité",
      discount: "10%",
      description: "Pour nos clients fidèles, bénéficiez de 10% de remise sur votre prochain achat.",
      expiresAt: "31/12/2023",
      bgClass: "bg-gradient-to-br from-teal-600 to-teal-700",
    }
  ];

  return (
    <section id="promos" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Cercles décoratifs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-green-600/5 filter blur-[120px] opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-600/5 filter blur-[120px] opacity-70 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Promotions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Profitez de nos offres spéciales pour équiper votre véhicule à prix réduit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {promos.map((promo, index) => (
            <motion.div 
              key={promo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              className={`rounded-xl overflow-hidden shadow-lg ${promo.bgClass} text-white`}
            >
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl md:text-2xl font-bold">{promo.title}</h3>
                  <div className="bg-white text-green-600 rounded-full px-3 py-1 font-bold text-sm md:text-base">
                    {promo.discount}
                  </div>
                </div>
                <p className="mb-6 text-white/90 text-sm md:text-base">
                  {promo.description}
                </p>
                <div className="flex items-center mb-6 text-white/80 text-sm">
                  <FaClock className="mr-2 flex-shrink-0" />
                  <span>Offre valable jusqu&apos;au {promo.expiresAt}</span>
                </div>
                <a 
                  href="tel:0744474444" 
                  className="inline-block bg-white text-green-600 font-medium py-2 px-5 rounded-lg hover:bg-gray-100 transition-colors text-sm md:text-base"
                >
                  En profiter
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <a
            href="tel:0744474444"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 md:px-8 rounded-lg transition-colors text-base md:text-lg inline-flex items-center"
          >
            <FaPhone className="mr-2" />
            Contactez-nous par téléphone
          </a>
        </div>
      </div>
    </section>
  );
};

export default Promotions; 