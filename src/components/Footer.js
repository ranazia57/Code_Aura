// Footer.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  ChevronUp,
  Brain,
  Globe,
  BarChart3,
  Network,
  Code,
  Server,
  Layers,
  Link as LinkIcon,
  UserCircle,
  Home,
  User,
  Wrench,
  Folder,
  MessageCircleMore,
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (path) => {
    navigate(path);
    scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-lime-400 text-lg font-semibold flex items-center gap-2">
              About Us <UserCircle size={18} />
            </h3>
            <p className="text-sm">Build Smart. Build Fast. Build with Code Aura.</p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-[#1877F2]" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="hover:text-[#1DA1F2]" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="hover:text-[#E4405F]" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lime-400 text-lg font-semibold mb-4 flex items-center gap-2">
              Quick Links <LinkIcon size={18} />
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 cursor-pointer hover:text-white" onClick={() => handleLinkClick('/')}>
                <Home size={16} />
                Home
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-white" onClick={() => handleLinkClick('/aboutme')}>
                <User size={16} />
                About Us
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-white" onClick={() => handleLinkClick('/skills')}>
                <Wrench size={16} />
                Skills
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-white" onClick={() => handleLinkClick('/project')}>
                <Folder size={16} />
                Projects
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-white" onClick={() => handleLinkClick('/contect')}>
                <Mail size={16} />
                Contact
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lime-400 text-lg font-semibold mb-4 flex items-center gap-2">
              Contact Us <UserCircle size={18} />
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MessageCircleMore size={16} className="text-green-400" />
                <span>+92-311-6586081</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>codeaura.team@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lime-400 text-lg font-semibold mb-4 flex items-center gap-2">
              Our Services <Layers size={18} />
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Brain size={16} />
                <span>Machine Learning</span>
              </li>
              <li className="flex items-center gap-2">
                <BarChart3 size={16} />
                <span>Data Analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <Network size={16} />
                <span>Deep Learning</span>
              </li>
              <li className="flex items-center gap-2">
                <Code size={16} />
                <span>React.js Development</span>
              </li>
              <li className="flex items-center gap-2">
                <Server size={16} />
                <span>Backend Development</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} />
                <span>WordPress Development</span>
              </li>
              <li className="flex items-center gap-2">
                <Facebook size={16} />
                <span>Meta Ads</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Code Aura. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 cursor-pointer p-2 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-600 transition-colors"
        >
          <ChevronUp size={24} />
        </div>
      )}
    </footer>
  );
};

export default Footer;
