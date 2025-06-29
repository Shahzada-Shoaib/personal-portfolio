import React from 'react';

const Formation: React.FC = () => {
  const formations = [
    {
      title: 'Bachelor of Science in Computer Science',
      provider: 'Lancaster University',
      duration: '2013 - 2017',
      icon: '🎓',
      color: 'bg-blue-500'
    }
  ];

  return (
    <section id="formation" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
          Education<span className="text-cyan-400">.</span>
        </h2>

        <div className="space-y-6">
          {formations.map((formation, index) => (
            <div 
              key={index}
              className="flex items-center gap-6 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
            >
              <div className={`w-12 h-12 ${formation.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                {formation.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {formation.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {formation.provider}
                </p>
              </div>
              
              <div className="text-gray-400 text-sm">
                {formation.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formation;