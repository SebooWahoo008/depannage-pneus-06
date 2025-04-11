import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../translations';

type MobileMenuProps = {
  isOpen: boolean;
  closeMenu: () => void;
  navLinks: { href: string; label: string }[];
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, closeMenu, navLinks }) => {
  const { t } = useTranslation();
  
  if (!isOpen) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-white dark:bg-slate-900 shadow-lg overflow-hidden"
    >
      <div className="px-4 py-5">
        <div className="flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={closeMenu}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{t('navbar.followUs')}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.053 1.805.249 2.227.418.562.217.96.477 1.382.896.419.42.679.819.896 1.381.17.422.365 1.057.418 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.17-.249 1.805-.418 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.17-1.057.365-2.227.418-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.053-1.805-.249-2.227-.418-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.17-.422-.365-1.057-.418-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053-1.17.249-1.805.418-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.17 1.057-.365 2.227-.418 1.266-.058 1.646-.07 4.85-.07zm0 2.122c-3.153 0-3.505.012-4.759.069-1.148.053-1.77.244-2.188.407-.55.213-.943.465-1.356.879-.413.413-.666.806-.879 1.355-.163.417-.354 1.04-.407 2.188-.057 1.254-.069 1.606-.069 4.759s.012 3.505.069 4.759c.053 1.148.244 1.77.407 2.188.213.55.465.943.879 1.355.413.413.806.666 1.355.879.417.163 1.04.354 2.188.407 1.254.057 1.606.069 4.759.069s3.505-.012 4.759-.069c1.148-.053 1.77-.244 2.188-.407.55-.213.943-.465 1.356-.879.413-.413.666-.806.879-1.355.163-.417.354-1.04.407-2.188.057-1.254.069-1.606.069-4.759s-.012-3.505-.069-4.759c-.053-1.148-.244-1.77-.407-2.188-.213-.55-.465-.943-.879-1.355-.413-.413-.806-.666-1.355-.879-.417-.163-1.04-.354-2.188-.407-1.254-.057-1.606-.069-4.759-.069zm0 3.067c3.285 0 5.947 2.662 5.947 5.947s-2.662 5.947-5.947 5.947-5.947-2.662-5.947-5.947 2.662-5.947 5.947-5.947zm0 9.804c2.128 0 3.855-1.727 3.855-3.857s-1.727-3.855-3.855-3.855-3.855 1.727-3.855 3.855 1.727 3.857 3.855 3.857zm7.563-10.061c.767 0 1.39-.623 1.39-1.39 0-.767-.623-1.39-1.39-1.39-.767 0-1.39.623-1.39 1.39 0 .767.623 1.39 1.39 1.39z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu; 