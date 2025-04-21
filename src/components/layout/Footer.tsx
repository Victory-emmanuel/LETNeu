
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
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white  rounded-full flex items-center justify-center">
                <span className="text-primary dark:text-secondary font-bold text-lg">LN</span>
              </div>
              <span className="font-heading font-bold text-xl">LETNeu</span>
            </Link>
            <p className="mt-4 text-sm text-white/80">
              Advancing scientific knowledge through innovative research and collaboration.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/research" className="text-white/80 hover:text-white transition-colors">Research</Link></li>
              <li><Link to="/publications" className="text-white/80 hover:text-white transition-colors">Publications</Link></li>
              <li><Link to="/team" className="text-white/80 hover:text-white transition-colors">Team</Link></li>
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="shrink-0 w-5 h-5 mt-0.5" />
                <span className="text-white/80">123 Research Avenue, Sciencetown, ST 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white/80">info@researchlab.edu</span>
              </li>
            </ul>
          </div>

      
        </div>

        {/* Social links and copyright */}
        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
          <div className="text-white/80 text-sm">
            © {currentYear} Research Lab. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
