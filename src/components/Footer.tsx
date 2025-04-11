
import React from 'react';
import { GithubIcon, MailIcon, PhoneIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-desert-light text-night">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mohamed "Zwanski" Ibrahim</h3>
            <p className="mb-6 text-night/80">Web Developer, Security Architect, Fighter.</p>
            <p className="text-sm">#ZwanskiFightsOn | Built with PHP & Persistence</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MailIcon size={18} className="mr-2" />
                <a href="mailto:mohaaibb4@proton.me" className="hover:text-hope transition-colors">
                  mohaaibb4@proton.me
                </a>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={18} className="mr-2" />
                <a href="tel:+21694934141" className="hover:text-hope transition-colors">
                  +216 94 934 141
                </a>
              </li>
              <li className="flex items-center">
                <GithubIcon size={18} className="mr-2" />
                <a 
                  href="https://github.com/zwanski2019" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-hope transition-colors"
                >
                  github.com/zwanski2019
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Skills</h4>
            <div className="flex flex-wrap gap-2">
              <span className="skill-tag">PHP</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Kali Linux</span>
              <span className="skill-tag">ISC2</span>
              <span className="skill-tag">RHCE</span>
              <span className="skill-tag">Wazuh</span>
              <span className="skill-tag">WordPress</span>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-desert text-center text-sm text-night/70">
          <p>© {new Date().getFullYear()} Mohamed Ibrahim. Every line of code is a step forward.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
