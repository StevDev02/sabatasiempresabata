export const variants = {
    open: {
      opacity: 1,
      y: "0%",
      scale: 1,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      opacity: 0,
      y: "-20%",
      scale: 0.95,
      boxShadow: "none",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };
  
export const variantsContent = {
    open: { opacity: 1, scale: 1 },
    closed: { opacity: 0, scale: 0.95 },
  };