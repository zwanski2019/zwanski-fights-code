
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface WordPressNavItemProps {
  className?: string;
}

const WordPressNavItem: React.FC<WordPressNavItemProps> = ({ className }) => {
  return (
    <Link 
      to="/wordpress" 
      className={cn(
        "px-4 py-2 text-sm font-medium text-night hover:text-night/80 transition-colors",
        className
      )}
    >
      WordPress AI
    </Link>
  );
};

export default WordPressNavItem;
