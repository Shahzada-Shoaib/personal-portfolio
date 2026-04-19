import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: 'Mar 2025 - Present',
      title: 'Full Stack Developer | Bitnex Technologies',
      location: 'Lahore, Pakistan',
      description:
        'Develop and maintain the VoIP Dialer web and mobile app. Built an AIO tool to analyze AI visibility of websites for growth and ranking using Lovable (low-code) and Supabase. Ship scalable apps for businesses; user-friendly interfaces with React, React Native, and Angular. Delivered 50+ responsive custom landing pages with 90+ Google PageSpeed Insights scores.',
    },
    {
      period: 'Jul 2023 - Feb 2025',
      title: 'Full Stack Developer | TriCloud Technologies',
      location: 'Lahore, Pakistan',
      description:
        'Customized themes and plugins with 90+ PageSpeed Insights scores. Rewrote HTML for SEO and accessibility standards, contributing to a 200% increase in users and stronger first-page Google visibility. Maintained graphic standards and consistent branding across product interfaces.',
    },
    {
      period: 'Mar 2023 - May 2023',
      title: 'Website Development Intern | Sisteme',
      location: 'Lahore, Pakistan',
      description:
        'Resolved complex merge conflicts on a 16-person team while keeping timelines on track (29% faster delivery). Introduced SASS for CSS preprocessing, cutting styling issues by 62%. Customized Bootstrap components to match brand guidelines, improving client approval rates by 38%.',
    },
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