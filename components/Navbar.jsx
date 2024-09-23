"use client";

import { useState } from "react"; // Import useState to handle menu toggle
import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          METAVERSUS
        </h2>

        {/* Hamburger Menu Icon */}
        <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
          <img
            src={menuOpen ? "/menu.svg" : "/menu.svg"} // Toggle between close and menu icons
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
          />
        </div>

        {/* Fullscreen Menu (for larger screens) */}
        <div className="hidden sm:flex space-x-6 text-white">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:hidden absolute top-16 left-0 right-0 bg-black p-4 rounded-lg z-50"
        >
          <ul className="flex flex-col space-y-4 text-white">
            <li>
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
