import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary dark:bg-accent text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              {/* Large screen logo */}
              <img
                src="https://i.postimg.cc/5Nq032m8/LETNEU-03.png"
                alt="LETNeu Logo"
                className="hidden md:block h-12 brightness-0 invert"
              />
              {/* Small screen logo */}
              <img
                src="https://i.postimg.cc/QtkPzwYY/LETNEU-01.png"
                alt="LETNeu Logo"
                className="md:hidden h-10 brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-white/80">
              Advancing scientific knowledge through innovative research and
              collaboration.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              
              <li>
                <Link
                  to="/publications"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Publications
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="shrink-0 w-5 h-5 mt-0.5" />
                <span className="text-white/80">
                Multidisciplinary Laboratory Building, UNIMED, Ondo
                  Medical Village, Laje Road, Ondo 351101, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white/80">+2347075423888</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white/80">theneurolab2019@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social links and copyright */}
        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
          <div className="text-white/80 text-sm">
            © {currentYear} LETNeu. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
