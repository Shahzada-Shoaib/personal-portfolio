import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
          About<span className="text-cyan-400">.</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-80 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/WhatsApp Image 2025-06-28 at 4.33.32 PM.jpeg" 
                alt="Shahzada M. Salman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Sr. Software Engineer
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Results-driven Lead Software Engineer with 7+ years of experience in developing robust, 
                user-centric web applications. I have a solid foundation in <span className="text-white font-medium">JavaScript, React.js, Vue.js, Node.js</span>, 
                and modern web technologies.
              </p>
            </div>

            <div>
              <p className="text-gray-400 leading-relaxed">
                Currently focused on learning and mastering essential web development skills. 
                I combine strong technical skills with deep understanding of UX principles to deliver 
                high-performance applications that drive business growth and enhance user engagement.
              </p>
            </div>

            <div>
              <p className="text-gray-400 leading-relaxed">
                Proficient in Agile methodologies, CI/CD, and cloud technologies. 
                Skilled in creating scalable back-end systems and intuitive front-end interfaces 
                that significantly improve application performance and user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;