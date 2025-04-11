export const fadeInUpVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.3
    }
  }
};

export const scaleVariants = {
  initial: {
    scale: 0.9,
    opacity: 0
  },
  whileInView: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

export const hoverVariants = {
  initial: {},
  hover: {
    y: -10,
    boxShadow: "0 20px 25px -5px rgba(239, 68, 68, 0.1), 0 10px 10px -5px rgba(239, 68, 68, 0.04)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export const iconHoverVariants = {
  initial: {},
  hover: {
    scale: 1.1,
    rotate: [0, -10, 10, -10, 0],
    transition: { duration: 0.5 }
  }
};

export const staggerContainerVariants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const fadeInVariants = {
  initial: {
    opacity: 0
  },
  whileInView: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}; 