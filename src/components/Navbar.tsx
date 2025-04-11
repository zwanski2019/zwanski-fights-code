
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Zwanski</span>
            <span className="text-xs bg-desert text-white px-2 py-0.5 rounded-md">FightsOn</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'nav-link-active' : ''}`}
          >
            Story
          </Link>
          <Link 
            to="/portfolio" 
            className={`nav-link ${location.pathname === '/portfolio' ? 'nav-link-active' : ''}`}
          >
            Portfolio
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${location.pathname === '/contact' ? 'nav-link-active' : ''}`}
          >
            Contact
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <a 
            href="https://github.com/zwanski2019" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-night hover:text-hope transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
          <a 
            href="mailto:mohaaibb4@proton.me" 
            className="text-night hover:text-hope transition-colors"
            aria-label="Email"
          >
            <MailIcon size={20} />
          </a>
          <a 
            href="tel:+21694934141" 
            className="hidden md:block btn-primary text-sm px-4 py-2"
          >
            +216 94 934 141
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
