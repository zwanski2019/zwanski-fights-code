
import React from 'react';
import Scene from '@/components/Scene';
import TextOverlay from '@/components/TextOverlay';
import TextHighlight from '../TextHighlight';
import { ShieldCheckIcon, ServerIcon } from 'lucide-react';

const BetrayalScene: React.FC = () => {
  return (
    <Scene
      title="Betrayal & Resilience"
      subtitle="Building walls against the past"
      backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
      overlay={<TextOverlay text="1:30–2:20" />}
      dark={true}
    >
      <div className="prose prose-invert prose-lg max-w-none">
        <TextHighlight text={"They sold lies as opportunities. Human traffickers. Mafia. They took everything but my mind. In Tunisia, I rebuilt myself like I rebuild code – line by line. Cybersecurity became my armor. Every vulnerability I patch now is a wall against my past."} />
        
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="flex-1">
            <p>
              The stability I found with Yasine was temporary. Organizations promising legitimate work opportunities turned out to be human trafficking networks. Their scams left me financially and emotionally devastated, forcing another dangerous journey to Tunisia.
            </p>
            <p className="mt-4">
              In Tunisia, with nothing but my technical knowledge, I began rebuilding. My experience with systems and security took on new meaning – I understood vulnerabilities not just in code but in human systems. This perspective became invaluable in cybersecurity work.
            </p>
          </div>
          
          <div className="md:w-1/3 bg-night p-5 rounded-lg border border-hope/30">
            <h4 className="text-hope text-lg font-medium mb-4">Security Certifications</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <ShieldCheckIcon className="mr-3 text-hope" size={24} />
                <div>
                  <p className="font-medium">ISC2 Certified</p>
                  <p className="text-sm text-white/70">Security Architecture</p>
                </div>
              </div>
              <div className="flex items-center">
                <ServerIcon className="mr-3 text-hope" size={24} />
                <div>
                  <p className="font-medium">Wazuh Security Architect</p>
                  <p className="text-sm text-white/70">Threat Detection & Response</p>
                </div>
              </div>
              <div className="border-t border-white/10 my-4"></div>
              <div className="text-center">
                <p className="text-hope-dark font-medium">65% Vulnerabilities Blocked</p>
                <div className="w-full bg-night-light rounded-full h-2.5 mt-2">
                  <div className="bg-hope h-2.5 rounded-full w-[65%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
};

export default BetrayalScene;
