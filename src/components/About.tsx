import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
          About<span className="text-cyan-400">.</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image Placeholder */}
          <div className="flex-shrink-0">
            <div className="w-64 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg"></div>
          </div>

          {/* About Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Web Developer
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I am following for a career in technology. Currently, my focus is on learning and mastering essential web development skills. I have a solid foundation in <span className="text-white font-medium">HTML, CSS, Git</span> and <span className="text-white font-medium">JavaScript</span>.
              </p>
            </div>

            <div>
              <p className="text-gray-400 leading-relaxed">
                Currently, my focus is on learning and mastering essential web development skills. I have a solid foundation in modern web technologies and frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;