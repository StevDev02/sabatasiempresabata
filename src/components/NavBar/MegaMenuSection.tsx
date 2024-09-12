import { motion } from "framer-motion";
import { variants, variantsContent } from "./const/Index";

interface MegaMenuSectionProps {
  isOpen: boolean;
  isHidden: boolean;
  handleMouseLeave: () => void;
  children: React.ReactNode;
}

export default function MegaMenuSection({
  isOpen,
  isHidden,
  handleMouseLeave,
  children,
}: MegaMenuSectionProps) {
  return (
    <motion.nav
      className={`fixed grid items-end top-0 left-0 w-full h-[95dvh] bg-[#f6f6f6] z-40 ${
        isHidden ? "hidden" : ""
      }`}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.section
        className="w-full grid place-items-center z-30 h-[500px] border border-black"
        onMouseLeave={handleMouseLeave}
        animate={isOpen ? "open" : "closed"}
        variants={variantsContent}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        {children}
      </motion.section>
    </motion.nav>
  );
}
