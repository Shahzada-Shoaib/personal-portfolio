import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: 'Jun 2023 - Aug 2024',
      title: 'Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sodales finibus. Donec eget est nisl nec nulla interdum facilisis. Proin est tellus elementum, interdum quis sit, volutpate lectus. Mauris rutrum risus ac mi feugiat gravida. Ut rhoncus libero finibus lorem finibus, vel iaculis risus hendrerit. Integer nec elementum fellis.'
    },
    {
      period: 'Jan 2022 - Dec 2022',
      title: 'Ipsum | Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sodales finibus. Donec eget est nisl nec nulla interdum facilisis. Proin est tellus elementum, interdum quis sit, volutpate lectus. Mauris rutrum risus ac mi feugiat gravida. Ut rhoncus libero finibus lorem finibus, vel iaculis risus hendrerit.'
    },
    {
      period: 'Aug 2019 - Dec 2020',
      title: 'Lorem Ipsum | Lorem Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie sodales finibus. Donec eget est nisl nec nulla interdum facilibus. Proin est tellus elementum, interdum quis sit, volutpate lectus. Mauris rutrum risus ac mi feugiat gravida. Ut rhoncus libero finibus lorem finibus, vel iaculis risus hendrerit. Integer nec elementum fellis.'
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-slate-900/50">
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
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <ArrowUpRight 
                      size={16} 
                      className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" 
                    />
                  </div>
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