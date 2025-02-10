export const pageTransitionsUp = {
  hidden: { opacity: 0, y: 20 },
  enter: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1]
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1]
    }
  }
};

export const staggerContainer = {
  enter: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1]
    }
  }
}; 
export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  enter: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1]
    }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1]
    }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1]
    }
  }
};





