
import React from 'react';
import { GithubIcon, MailIcon, PhoneIcon, LinkedinIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-desert-light/50 text-night py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-night/90">Mohamed "Zwanski" Ibrahim</h3>
          <p className="text-night/70 text-sm">
            Web Developer, Security Architect, and Digital Innovator passionate about creating impactful technological solutions.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-night/80">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-hope transition-colors">Home</a></li>
            <li><a href="/portfolio" className="hover:text-hope transition-colors">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-hope transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-night/80">Connect</h4>
          <div className="flex space-x-4 items-center">
            <a 
              href="mailto:mohaaibb4@proton.me" 
              className="text-night hover:text-hope transition-colors"
              aria-label="Email"
            >
              <MailIcon size={24} />
            </a>
            <a 
              href="tel:+21694934141" 
              className="text-night hover:text-hope transition-colors"
              aria-label="Phone"
            >
              <PhoneIcon size={24} />
            </a>
            <a 
              href="https://github.com/zwanski2019" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-night hover:text-hope transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-ibrahim-zwanski"
              target="_blank"
              rel="noopener noreferrer"
              className="text-night hover:text-hope transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <Separator className="my-6 bg-night/20" />
      
      <div className="container mx-auto px-4 text-center text-sm text-night/60">
        <p>© {new Date().getFullYear()} Mohamed Ibrahim. Every line of code tells a story.</p>
      </div>
    </footer>
  );
};

export default Footer;

