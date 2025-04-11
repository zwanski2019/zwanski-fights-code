
import React from 'react';
import SkillBadge from '@/components/SkillBadge';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  skills
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
      <div className="p-4">
        <p className="text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-1">
          {skills.map(skill => (
            <SkillBadge key={skill} name={skill} size="sm" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
