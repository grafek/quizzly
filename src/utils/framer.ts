import { Variants } from "framer-motion";

export const itemVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      duration:0.3
    },
  },

  hidden: {
    opacity: 0,
    x: -1100,
  },
  close: {
    opacity: 0,
    x: 1100,
  },
};

export const listVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      staggerDirection: -1,
    },
  },
};
