import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: 'Jun 2021 - Present',
      title: 'Lead Full Stack Engineer | Teamo Inc',
      location: 'Islamabad, Pakistan',
      description: 'Led full stack delivery for large-scale enterprise solutions for Fortune 500 companies including DELL and Amazon—React and Node services, data layers, and ops—resulting in a 30% increase in client satisfaction and a 25% reduction in system downtime.'
    },
    {
      period: 'Jan 2019 - Dec 2021',
      title: 'Sr. Full Stack Developer | XIQ inc',
      location: 'California, USA',
      description: 'Architected and built large-scale MERN-style applications with React and Node.js, improving application performance by 40% and reducing load times by 50%.'
    },
    {
      period: 'Aug 2018 - Dec 2019',
      title: 'Full Stack Developer | Zeikh Technologies',
      location: 'Dubai, Abu Dhabi',
      description: 'Designed and developed 15+ high-conversion web experiences with React and Node-backed integrations, contributing to a 45% growth in user base over 12 months.'
    },
    {
      period: 'Aug 2017 - Dec 2018',
      title: 'Full Stack Developer | Techbay Solutions',
      location: 'Lahore, Pakistan',
      description: 'Built responsive UIs with React and supported API-driven features with Node.js, including custom animations and micro-interactions that reduced bounce rates by 35% on key landing pages.'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
          Experience<span className="text-cyan-400">.</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:w-48 flex-shrink-0">
                  <span className="text-sm text-cyan-400 font-medium">
                    {exp.period}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <ArrowUpRight 
                      size={16} 
                      className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" 
                    />
                  </div>
                  <p className="text-cyan-300 text-sm mb-3 font-medium">
                    {exp.location}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;