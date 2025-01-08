import { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav className="relative flex items-center justify-between md:px-20 px-4 h-16 w-full">
      {/* Logo */}
      <div className="z-50">
        <svg width="36" height="36" id="logo-72" viewBox="0 0 53 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z" className={`${isMenuOpen ? 'fill-white': 'fill-zinc-900'}`}></path></svg>
      </div>

      {/* Mobile Menu Toggle */}
      <div onClick={toggleMenu} className="z-50 md:hidden">
        {!isMenuOpen ? (
          <HiOutlineMenuAlt4 className="w-7 h-7" />
        ) : (
          <RxCross2 className="w-7 h-7" color="white" />
        )}
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ y: -200 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, ease: "easeOut" }} className="absolute z-40 w-full h-screen left-0 top-0 bg-zinc-900 text-white pt-40 px-4">
            {["Services", "Our Work", "About Us", "Contact Us"].map((item, index) => (
              <div className="text-white block py-4 text-4xl font-[900]" key={index}>
                {item}
              </div>
            )
            )}

            <div className="mt-20 mb-10 border-[1px] border-gray-600" />
            <div className="flex gap-10 justify-end pr-8">
              <FaInstagram className="w-7 h-7" />
              <FaTwitter className="w-7 h-7" />
              <FaLinkedin className="w-7 h-7" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COMPUTER MENU */}
      <div className="hidden md:flex gap-8 items-center">
        {["Services", "Our Work", "About Us", "Contact Us"].map((item, index) => (
          <div className="text-zinc-900 font-medium text-lg" key={index}>
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
