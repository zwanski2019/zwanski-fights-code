
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SceneProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  children: React.ReactNode;
  overlay?: React.ReactNode;
  className?: string;
  dark?: boolean;
}

const Scene: React.FC<SceneProps> = ({
  title,
  subtitle,
  backgroundImage,
  children,
  overlay,
  className,
  dark = false,
}) => {
  const sceneRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sceneRef.current) {
      observer.observe(sceneRef.current);
    }
    
    return () => {
      if (sceneRef.current) {
        observer.unobserve(sceneRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={sceneRef}
      className={cn(
        'scene-container opacity-0 transition-opacity duration-500 ease-in-out',
        dark ? 'bg-night text-white' : 'bg-white text-night',
        className
      )}
    >
      <div 
        className="relative min-h-[400px] md:min-h-[500px] overflow-hidden rounded-lg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-night/70 to-transparent"></div>
        
        <div className="relative z-10 h-full px-6 py-12 md:p-12 flex flex-col justify-end">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
          {subtitle && <p className="text-xl text-white/80 mb-6">{subtitle}</p>}
          
          {overlay && (
            <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
              {overlay}
            </div>
          )}
        </div>
      </div>
      
      <div className={cn(
        'px-6 py-8 md:p-10 rounded-b-lg',
        dark ? 'bg-night-light' : 'bg-white'
      )}>
        {children}
      </div>
    </div>
  );
};

export default Scene;
