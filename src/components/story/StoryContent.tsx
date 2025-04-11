
import React from 'react';
import StoryHeader from './StoryHeader';
import EscapeScene from './scenes/EscapeScene';
import YasineScene from './scenes/YasineScene';
import BetrayalScene from './scenes/BetrayalScene';
import CodeOfHopeScene from './scenes/CodeOfHopeScene';
import CallToWorldScene from './scenes/CallToWorldScene';
import ClosingBanner from './ClosingBanner';

const StoryContent: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <StoryHeader />
      
      <div className="space-y-16">
        {/* Scene 1: The Escape */}
        <EscapeScene />
        
        {/* Scene 2: Yasine's Light */}
        <YasineScene />
        
        {/* Scene 3: Betrayal & Resilience */}
        <BetrayalScene />
        
        {/* Scene 4: The Code of Hope */}
        <CodeOfHopeScene />
        
        {/* Scene 5: Call to the World */}
        <CallToWorldScene />
      </div>
      
      {/* Closing Scene */}
      <ClosingBanner />
    </div>
  );
};

export default StoryContent;
