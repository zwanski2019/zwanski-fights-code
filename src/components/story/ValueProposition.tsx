
import React, { ReactNode } from 'react';

interface ValuePropositionProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ValueProposition: React.FC<ValuePropositionProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <li className="flex items-start">
      <div className="mr-3 mt-1 text-hope flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </li>
  );
};

export default ValueProposition;
