
import React from 'react';
import { cn } from '@/lib/utils';

interface TextOverlayProps {
  text: string;
  className?: string;
  position?: 'top' | 'bottom' | 'center';
  color?: string;
  animate?: boolean;
}

const TextOverlay: React.FC<TextOverlayProps> = ({
  text,
  className,
  position = 'bottom',
  color = 'text-white',
  animate = false,
}) => {
  const positionClasses = {
    top: 'top-0 left-0 right-0',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    bottom: 'bottom-0 left-0 right-0',
  };
  
  return (
    <div className={cn(
      'absolute p-4 z-20',
      positionClasses[position],
      animate && 'animate-pulse-slow',
      className
    )}>
      <div className={cn(
        'font-mono text-sm md:text-base font-semibold px-4 py-2 bg-night/80 rounded-md',
        color
      )}>
        {text}
      </div>
    </div>
  );
};

export default TextOverlay;
