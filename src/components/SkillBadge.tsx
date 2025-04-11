
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  icon,
  className,
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2',
  };
  
  return (
    <div className={cn(
      'inline-flex items-center rounded-full bg-desert-light text-night font-medium',
      sizeClasses[size],
      className
    )}>
      {icon && <span className="mr-1.5">{icon}</span>}
      {name}
    </div>
  );
};

export default SkillBadge;
