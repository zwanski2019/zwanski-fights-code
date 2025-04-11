
import React from 'react';
import Scene from '@/components/Scene';
import TextOverlay from '@/components/TextOverlay';
import TextHighlight from '../TextHighlight';
import ValueProposition from '../ValueProposition';
import { CodeIcon, ShieldCheckIcon, GlobeIcon } from 'lucide-react';

const CallToWorldScene: React.FC = () => {
  return (
    <Scene
      title="Call to the World"
      subtitle="Not asking for pity – offering proof"
      backgroundImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80"
      overlay={<TextOverlay text="3:30–4:20" />}
    >
      <div className="prose prose-lg max-w-none">
        <TextHighlight text={"I'm not asking for pity – I'm offering proof. A refugee can architect secure systems. A survivor can speak machine code and human hope. If your team needs someone who hacks challenges harder than they hack systems... let's connect."} />
        
        <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
          <div className="md:w-1/3">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                alt="Mohamed Ibrahim working on laptop" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-3 -right-3 bg-hope text-white px-3 py-1 rounded-md text-sm font-medium">
                Remote Work Ready
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">What I Bring to Your Team:</h3>
            
            <ul className="space-y-4">
              <ValueProposition 
                icon={<CodeIcon size={20} />}
                title="Technical Versatility"
                description="From system architecture to frontend design, I bridge technical domains others treat as separate."
              />
              <ValueProposition 
                icon={<ShieldCheckIcon size={20} />}
                title="Security-First Mindset"
                description="Having faced real-world threats, I bring practical security awareness to every project."
              />
              <ValueProposition 
                icon={<GlobeIcon size={20} />}
                title="Cultural Adaptability"
                description="Speaking 5 languages and navigating diverse environments has made me exceptionally adaptable."
              />
            </ul>
            
            <div className="mt-8">
              <a href="/contact" className="btn-primary inline-block">
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
};

export default CallToWorldScene;
