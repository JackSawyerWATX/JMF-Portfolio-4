"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "custom-bg p-3 xxs:p-4 xs:p-6 sm:p-8 rounded-lg xxs:rounded-xl flex items-center justify-center space-y-4 xxs:space-y-6 xs:space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;
