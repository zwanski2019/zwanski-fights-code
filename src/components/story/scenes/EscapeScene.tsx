
import React from 'react';
import Scene from '@/components/Scene';
import TextOverlay from '@/components/TextOverlay';
import TextHighlight from '../TextHighlight';

const EscapeScene: React.FC = () => {
  return (
    <Scene
      title="The Escape"
      subtitle="Niger → Algeria → Tunisia"
      backgroundImage="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1200&q=80"
      overlay={<TextOverlay text="0:00–0:45" />}
    >
      <div className="prose prose-lg max-w-none">
        <TextHighlight text={"My name is Mohamed Ibrahim, but I call myself Zwanski – a fighter. I left Niger because danger left no choice. Algeria was supposed to be safety, but survival meant learning to fix what others threw away. Phones, computers... broken things. They became my language when the world refused to speak mine."} />
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-8">
          <div className="flex-1">
            <p>
              When your homeland becomes unsafe, you don't just lose your home – you lose your place in the world. For me, that journey began in Niger, where political instability threatened everything I knew. The decision to leave wasn't a choice but a necessity for survival.
            </p>
            <p className="mt-4">
              Algeria offered temporary refuge, but as a migrant without official status, traditional employment remained closed to me. I discovered my first technical skills out of pure necessity – learning to repair discarded electronics that others had deemed worthless.
            </p>
          </div>
          
          <div className="md:w-1/3 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80" 
              alt="Close-up of hands repairing electronics" 
              className="w-full h-auto"
            />
            <div className="p-3 bg-desert-light text-sm text-center">
              Learning to repair what others threw away
            </div>
          </div>
        </div>
      </div>
    </Scene>
  );
};

export default EscapeScene;
