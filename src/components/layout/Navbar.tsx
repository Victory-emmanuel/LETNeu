
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react"; // Import Sun and Moon icons
import { useTheme } from "@/providers/ThemeProvider"; // Import useTheme hook
import { Button } from "@/components/ui/button"; // Import Button component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme(); // Get theme state and setter

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md z-50 shadow-sm dark:shadow-gray-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* Large screen logo */}
            <img
              src="https://i.postimg.cc/5Nq032m8/LETNEU-03.png"
              alt="LETNeu Logo"
              className="hidden md:block h-10"
            />
            {/* Small screen logo */}
            <img
              src="https://i.postimg.cc/QtkPzwYY/LETNEU-01.png"
              alt="LETNeu Logo"
              className="md:hidden h-10"
            />
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8  ">
          <NavLink  to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {/* Theme Toggle Button - Desktop */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-600" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-secondary" />
          </Button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
           {/* Theme Toggle Button - Mobile */}
           <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary dark:text-primary-foreground" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary dark:text-primary-foreground" />
          </Button>
          <button
            type="button"
            className="text-primary dark:text-primary-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>          
            <MobileNavLink to="/publications" onClick={toggleMenu}>Publications</MobileNavLink>
            <MobileNavLink to="/team" onClick={toggleMenu}>Team</MobileNavLink>
            <MobileNavLink to="/events" onClick={toggleMenu}>Events</MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link
      to={to}
      className="text-foreground dark:text-secondary font-medium hover:text-primary dark:hover:text-secondary transition-colors relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-highlight transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

const MobileNavLink = ({
  to,
  children,
  onClick
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-foreground dark:text-gray-300 font-medium py-2 hover:text-primary dark:hover:text-primary-foreground transition-colors"
    >
      {children}
    </Link>
  );
};

export default Navbar;
