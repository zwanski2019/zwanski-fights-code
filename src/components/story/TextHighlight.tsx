
import React from 'react';

interface TextHighlightProps {
  text: string;
  className?: string;
}

const TextHighlight: React.FC<TextHighlightProps> = ({ 
  text,
  className = ''
}) => {
  return (
    <p className={`text-lg md:text-xl mb-4 italic ${className}`}>
      {text}
    </p>
  );
};

export default TextHighlight;
