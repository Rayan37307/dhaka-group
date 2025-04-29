// This is a helper file to demonstrate framer-motion menu animation for Navbar.
// You can delete or rename this file as you wish.
import { motion, AnimatePresence } from 'framer-motion';

export const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    pointerEvents: "none" as const,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
  open: {
    opacity: 1,
    y: 0,
    pointerEvents: "auto" as const,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export function MotionMenu({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="md:hidden bg-white bg-opacity-95 backdrop-blur-md shadow-sm border-b border-gray-200 px-4 pt-2 pb-4"
        >
          {children}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
