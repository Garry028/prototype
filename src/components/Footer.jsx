import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary py-10 text-neutral">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-semibold">ChargerHelp</h1>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-4 md:space-y-0">
            <Link to="/service" className="hover:text-secondary">Reliability as a Service</Link>
            <Link to="/learning" className="hover:text-secondary">Learning & Development</Link>
            <Link to="/about" className="hover:text-secondary">About Us</Link>
            <Link to="/careers" className="hover:text-secondary">Careers</Link>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-right">
            <p>ChargerHelp!<br />Los Angeles, CA</p>
            <Link to="mailto:sales@chargerhelp.com" className="hover:text-secondary">sales@chargerhelp.com</Link><br />
            <Link to="mailto:media@chargerhelp.com" className="hover:text-secondary">media@chargerhelp.com</Link>
          </div>
        </div>

        {/* Social Icons and Legal */}
        <div className="mt-10 border-t border-neutral-600 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs">&copy; ChargerHelp! 2025 | <Link to="/legal" className="hover:text-secondary">Legal</Link></p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-secondary"><FaInstagram size={20} /></Link>
            <Link to="#" className="hover:text-secondary"><FaTwitter size={20} /></Link>
            <Link to="#" className="hover:text-secondary"><FaYoutube size={20} /></Link>
            <Link to="#" className="hover:text-secondary"><FaLinkedin size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
