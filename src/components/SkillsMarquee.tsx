import React from 'react';

const SkillsMarquee: React.FC = () => {
  const skills = [
    'JAVASCRIPT',
    'REACT.JS',
    'VUE.JS',
    'NODE.JS',
    'TYPESCRIPT',
    'SHOPIFY',
    'SQL',
    'NOSQL',
    'AGILE',
    'CI/CD',
    'AWS',
    'THIRD-PARTY INTEGRATION',
    'CONTENTFUL',
    'PRISMIC',
    'STRAPI',
    'HEADLESS CMS'
  ];

  return (
    <div className="border-y border-slate-800 bg-slate-900/50 py-4 overflow-hidden">
      <div className="flex animate-scroll">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex items-center whitespace-nowrap mx-8 text-sm font-medium text-gray-400"
          >
            <span>{skill}</span>
            <span className="mx-8 text-cyan-400">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;