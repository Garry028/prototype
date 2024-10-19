import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"; // React Icons
import { Link } from "react-router-dom";
import Logo from "./Logo";
const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRefs = useRef({});

  const toggleMenu = (menu, event) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      const navLink = event.target.getBoundingClientRect();
      setMenuPosition({
        x: navLink.left,
        y: navLink.bottom + window.scrollY,
      });
      setActiveMenu(menu);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !Object.values(navRefs.current).some(
          (ref) => ref && ref.contains(event.target)
        )
      ) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-neutral p-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex space-x-8 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/what-we-do"
            onClick={(e) => toggleMenu("whatWeDo", e)}
            ref={(el) => (navRefs.current["whatWeDo"] = el)}
            className="hover:text-primary cursor-pointer"
          >
            What We Do
          </Link>
          <Link
            to="/who-we-serve"
            onClick={(e) => toggleMenu("whoWeServe", e)}
            ref={(el) => (navRefs.current["whoWeServe"] = el)}
            className="hover:text-primary cursor-pointer"
          >
            Who We Serve
          </Link>
          <Link
            to="/our-company"
            onClick={(e) => toggleMenu("ourCompany", e)}
            ref={(el) => (navRefs.current["ourCompany"] = el)}
            className="hover:text-primary cursor-pointer"
          >
            Our Company
          </Link>
          <Link
            to="/news-events"
            onClick={(e) => toggleMenu("newsEvents", e)}
            ref={(el) => (navRefs.current["newsEvents"] = el)}
            className="hover:text-primary cursor-pointer"
          >
            News + Events
          </Link>
        </motion.nav>

        {/* Hamburger Menu for Mobile */}
        <motion.div
          className="ml-auto md:hidden"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? (
              <HiOutlineX className="text-primary text-3xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-primary text-3xl" />
            )}
          </button>
        </motion.div>

        <motion.div
          className="hidden md:block ml-auto"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            to="/contact"
            className="border-2 border-primary text-primary rounded-full px-4 py-2 hover:bg-primary hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 rounded-lg text-gray-700 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="space-y-4">
              <li>
                <Link
                  to="/what-we-do"
                  onClick={(e) => toggleMenu("whatWeDo", e)}
                  ref={(el) => (navRefs.current["whatWeDo"] = el)}
                  className="hover:text-primary cursor-pointer"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  to="/who-we-serve"
                  onClick={(e) => toggleMenu("whoWeServe", e)}
                  ref={(el) => (navRefs.current["whoWeServe"] = el)}
                  className="hover:text-primary cursor-pointer"
                >
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link
                  to="/our-company"
                  onClick={(e) => toggleMenu("ourCompany", e)}
                  ref={(el) => (navRefs.current["ourCompany"] = el)}
                  className="hover:text-primary cursor-pointer"
                >
                  Our Company
                </Link>
              </li>
              <li>
                <Link
                  to="/news-events"
                  onClick={(e) => toggleMenu("newsEvents", e)}
                  ref={(el) => (navRefs.current["newsEvents"] = el)}
                  className="hover:text-primary cursor-pointer"
                >
                  News + Events
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropdown Menus */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            className="absolute bg-white shadow-lg p-4 mt-2 rounded-lg text-gray-700 hidden md:block"
            style={{
              left: `${menuPosition.x}px`,
              top: `${menuPosition.y}px`,
              width: "200px",
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {activeMenu === "whatWeDo" && (
                <div className="space-y-2">
                  <li className="hover:text-primary cursor-pointer">
                    Services
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Solutions
                  </li>
                </div>
              )}
              {activeMenu === "whoWeServe" && (
                <div className="space-y-2">
                  <li className="hover:text-primary cursor-pointer">
                    Businesses
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Utilities
                  </li>
                </div>
              )}
              {activeMenu === "ourCompany" && (
                <div className="space-y-2">
                  <li className="hover:text-primary cursor-pointer">
                    About Us
                  </li>
                  <li className="hover:text-primary cursor-pointer">Careers</li>
                </div>
              )}
              {activeMenu === "newsEvents" && (
                <div className="space-y-2">
                  <li className="hover:text-primary cursor-pointer">Blog</li>
                  <li className="hover:text-primary cursor-pointer">Events</li>
                </div>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
