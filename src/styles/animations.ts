export const fadeInUpAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export const scaleAnimation = {
  initial: { scale: 0 },
  whileInView: { scale: 1 },
  viewport: { once: true },
  transition: { 
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.2
  }
};

export const hoverAnimation = {
  y: -10,
  boxShadow: "0 20px 25px -5px rgba(239, 68, 68, 0.1), 0 10px 10px -5px rgba(239, 68, 68, 0.04)",
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 10
  }
}; 