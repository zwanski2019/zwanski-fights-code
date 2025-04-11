
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Scene from '@/components/Scene';
import TextOverlay from '@/components/TextOverlay';
import SkillBadge from '@/components/SkillBadge';
import { ShieldCheckIcon, CodeIcon, GlobeIcon, ServerIcon } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              From Survival to Code: The Journey of Mohamed "Zwanski" Ibrahim
            </h1>
            <p className="text-xl text-muted-foreground">
              A documentary of resilience, technology, and the power of persistence
            </p>
          </div>
          
          {/* Scene 1: The Escape */}
          <Scene
            title="The Escape"
            subtitle="Niger → Algeria → Tunisia"
            backgroundImage="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1200&q=80"
            overlay={<TextOverlay text="0:00–0:45" />}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl mb-4 italic">
                "My name is Mohamed Ibrahim, but I call myself Zwanski – a fighter. I left Niger because danger left no choice. Algeria was supposed to be safety, but survival meant learning to fix what others threw away. Phones, computers... broken things. They became my language when the world refused to speak mine."
              </p>
              
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
          
          {/* Scene 2: Yasine's Light */}
          <Scene
            title="Yasine's Light"
            subtitle="Finding a mentor in darkness"
            backgroundImage="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&q=80"
            overlay={<TextOverlay text="0:45–1:30" />}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl mb-4 italic">
                "Then came Yasine. He saw a technician in a refugee. His shop wasn't just work – it was my first server, my first firewall against despair. I thought I'd found stability... until the scams began."
              </p>
              
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
          
          {/* Scene 3: Betrayal & Resilience */}
          <Scene
            title="Betrayal & Resilience"
            subtitle="Building walls against the past"
            backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
            overlay={<TextOverlay text="1:30–2:20" />}
            dark={true}
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-lg md:text-xl mb-4 italic">
                "They sold lies as opportunities. Human traffickers. Mafia. They took everything but my mind. In Tunisia, I rebuilt myself like I rebuild code – line by line. Cybersecurity became my armor. Every vulnerability I patch now is a wall against my past."
              </p>
              
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
          
          {/* Scene 4: The Code of Hope */}
          <Scene
            title="The Code of Hope"
            subtitle="Finding my true voice"
            backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
            overlay={<TextOverlay text="2:20–3:30" />}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl mb-4 italic">
                "Today, I speak 5 languages, but code is my true voice. These hands that fixed broken phones now build tools to fix broken systems. My Chrome extensions optimize memory – because I know what it means to run on empty. My weather app predicts storms – because I've lived through too many."
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Key Projects:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-4 border-b">
                      <h4 className="font-medium">Zwansave Dashboard</h4>
                      <p className="text-sm text-gray-600">System Resource Optimizer</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-3">Reduced CPU load by 45% through intelligent process management</p>
                      <div className="flex flex-wrap gap-1">
                        <SkillBadge name="PHP" size="sm" />
                        <SkillBadge name="JavaScript" size="sm" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-4 border-b">
                      <h4 className="font-medium">EurOrbit Weather</h4>
                      <p className="text-sm text-gray-600">Predictive Weather App</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-3">Leverages ML models to increase forecasting accuracy in volatile regions</p>
                      <div className="flex flex-wrap gap-1">
                        <SkillBadge name="React" size="sm" />
                        <SkillBadge name="Python" size="sm" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="p-4 border-b">
                      <h4 className="font-medium">WordPress/GitHub Integration</h4>
                      <p className="text-sm text-gray-600">Version Control System</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm mb-3">Seamless deployment pipeline for content management with version tracking</p>
                      <div className="flex flex-wrap gap-1">
                        <SkillBadge name="PHP" size="sm" />
                        <SkillBadge name="Git" size="sm" />
                      </div>
                    </div>
                  </div>
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
          
          {/* Scene 5: Call to the World */}
          <Scene
            title="Call to the World"
            subtitle="Not asking for pity – offering proof"
            backgroundImage="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80"
            overlay={<TextOverlay text="3:30–4:20" />}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl mb-4 italic">
                "I'm not asking for pity – I'm offering proof. A refugee can architect secure systems. A survivor can speak machine code and human hope. If your team needs someone who hacks challenges harder than they hack systems... let's connect."
              </p>
              
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
                    <li className="flex items-start">
                      <CodeIcon className="mr-3 mt-1 text-hope flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Technical Versatility</p>
                        <p className="text-sm text-gray-600">From system architecture to frontend design, I bridge technical domains others treat as separate.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ShieldCheckIcon className="mr-3 mt-1 text-hope flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Security-First Mindset</p>
                        <p className="text-sm text-gray-600">Having faced real-world threats, I bring practical security awareness to every project.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <GlobeIcon className="mr-3 mt-1 text-hope flex-shrink-0" size={20} />
                      <div>
                        <p className="font-medium">Cultural Adaptability</p>
                        <p className="text-sm text-gray-600">Speaking 5 languages and navigating diverse environments has made me exceptionally adaptable.</p>
                      </div>
                    </li>
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
          
          {/* Closing Scene */}
          <div className="relative mt-16 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80" 
              alt="Tunisian sunrise" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/80 to-transparent flex flex-col items-center justify-center text-center px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Every line of code is a step forward
              </h2>
              <p className="text-xl text-white/80 mb-6">
                #ZwanskiFightsOn | Built with PHP & Persistence
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
