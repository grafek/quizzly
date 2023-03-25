import { Variants } from "framer-motion";

export const layoutVariants: Variants = {
  initial: { opacity: 0, x: -500, y: 0 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    x: 500,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export const itemVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      duration: 0.5,
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
      duration: 0.4,
    },
    y: 0,
    opacity: 1,
  },
  close: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      staggerDirection: -1,
      duration: 0.4,
    },
    opacity: 0,
    y: -500,
  },
  hidden: {
    opacity: 0,
    y: 500,
  },
};
