
import React from 'react';
import Scene from '@/components/Scene';
import TextOverlay from '@/components/TextOverlay';
import TextHighlight from '../TextHighlight';

const YasineScene: React.FC = () => {
  return (
    <Scene
      title="Yasine's Light"
      subtitle="Finding a mentor in darkness"
      backgroundImage="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&q=80"
      overlay={<TextOverlay text="0:45–1:30" />}
    >
      <div className="prose prose-lg max-w-none">
        <TextHighlight text={"Then came Yasine. He saw a technician in a refugee. His shop wasn't just work – it was my first server, my first firewall against despair. I thought I'd found stability... until the scams began."} />
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <p>
              In the chaos of displacement, finding someone who sees your potential is rare. Yasine didn't just offer me work; he recognized skills I hadn't even fully acknowledged in myself. His repair shop became more than employment – it was my first true technical education.
            </p>
            <p className="mt-4">
              While fixing hardware, I began to understand systems on a deeper level. Each broken device presented a puzzle, teaching me to think systematically and solve problems creatively. These skills would later form the foundation of my coding journey.
            </p>
          </div>
          
          <div className="bg-desert-light rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Lessons from Yasine</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-hope">●</div>
                <div>Systematic troubleshooting of hardware issues</div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-hope">●</div>
                <div>Basic networking and server configurations</div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-hope">●</div>
                <div>Data recovery and system security fundamentals</div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-hope">●</div>
                <div>Business communications with clients</div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-hope">●</div>
                <div>Perseverance when facing seemingly unfixable problems</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Scene>
  );
};

export default YasineScene;
