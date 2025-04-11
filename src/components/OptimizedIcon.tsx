import React from 'react';
import { 
  FaCheck, FaTruck, FaClock, FaTools, FaShieldAlt, 
  FaPercentage, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaStar, FaCalendarAlt, FaUser
} from 'react-icons/fa';

type IconProps = {
  icon: string;
  className?: string;
};

const OptimizedIcon: React.FC<IconProps> = ({ icon, className = "" }) => {
  switch (icon) {
    case 'FaCheck':
      return <FaCheck className={className} />;
    case 'FaTruck':
      return <FaTruck className={className} />;
    case 'FaClock':
      return <FaClock className={className} />;
    case 'FaTools':
      return <FaTools className={className} />;
    case 'FaShieldAlt':
      return <FaShieldAlt className={className} />;
    case 'FaPercentage':
      return <FaPercentage className={className} />;
    case 'FaPhone':
      return <FaPhone className={className} />;
    case 'FaEnvelope':
      return <FaEnvelope className={className} />;
    case 'FaMapMarkerAlt':
      return <FaMapMarkerAlt className={className} />;
    case 'FaStar':
      return <FaStar className={className} />;
    case 'FaCalendarAlt':
      return <FaCalendarAlt className={className} />;
    case 'FaUser':
      return <FaUser className={className} />;
    default:
      return <span className={className}>icon</span>;
  }
};

export default OptimizedIcon; 