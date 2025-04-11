
import React from 'react';
import Scene from '@/components/Scene';
import TextOverlay from '@/components/TextOverlay';
import TextHighlight from '../TextHighlight';
import SkillBadge from '@/components/SkillBadge';
import ProjectCard from '../ProjectCard';

const CodeOfHopeScene: React.FC = () => {
  return (
    <Scene
      title="The Code of Hope"
      subtitle="Finding my true voice"
      backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
      overlay={<TextOverlay text="2:20–3:30" />}
    >
      <div className="prose prose-lg max-w-none">
        <TextHighlight text={"Today, I speak 5 languages, but code is my true voice. These hands that fixed broken phones now build tools to fix broken systems. My Chrome extensions optimize memory – because I know what it means to run on empty. My weather app predicts storms – because I've lived through too many."} />
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Key Projects:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <ProjectCard 
              title="Zwansave Dashboard" 
              subtitle="System Resource Optimizer"
              description="Reduced CPU load by 45% through intelligent process management"
              skills={["PHP", "JavaScript"]}
            />
            
            <ProjectCard 
              title="EurOrbit Weather" 
              subtitle="Predictive Weather App"
              description="Leverages ML models to increase forecasting accuracy in volatile regions"
              skills={["React", "Python"]}
            />
            
            <ProjectCard 
              title="WordPress/GitHub Integration" 
              subtitle="Version Control System"
              description="Seamless deployment pipeline for content management with version tracking"
              skills={["PHP", "Git"]}
            />
          </div>
          
          <p>
            My journey from repairing broken electronics to developing software solutions has given me a unique perspective. I understand systems from hardware to user experience, allowing me to create solutions that are both technically sound and accessible.
          </p>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <SkillBadge name="PHP" />
            <SkillBadge name="React" />
            <SkillBadge name="Python" />
            <SkillBadge name="Kali Linux" />
            <SkillBadge name="WordPress" />
            <SkillBadge name="JavaScript" />
            <SkillBadge name="Security Architecture" />
          </div>
        </div>
      </div>
    </Scene>
  );
};

export default CodeOfHopeScene;
