import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
          About<span className="text-cyan-400">.</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          {/* <div className="flex-shrink-0">
             <div className="w-64 h-80 rounded-lg overflow-hidden shadow-xl">
             <img 
               src="/shoaibdp.png" 
               alt="Shahzada Shoaib"
               className="w-full h-full object-cover"
             />
           </div>
          </div> */}

          {/* About Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Full Stack Developer
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Results-driven Full Stack Developer with 3+ years of experience
                building robust, user-centric web and mobile applications. I work
                across the{" "}
                <span className="text-white font-medium">
                  MERN stack (MongoDB, Express, React, Node.js) and React Native
                </span>
                , with solid JavaScript fundamentals and modern tooling.
              </p>
            </div>

            <div>
              <p className="text-gray-400 leading-relaxed">
                Currently focused on learning and mastering essential web
                development skills. I combine strong technical skills with deep
                understanding of UX principles to deliver high-performance
                applications that drive business growth and enhance user
                engagement.
              </p>
            </div>

            <div>
              <p className="text-gray-400 leading-relaxed">
                Proficient in Agile methodologies, CI/CD, and cloud
                technologies. Skilled in creating scalable APIs and services,
                polished web UIs, and React Native mobile experiences that
                improve performance and user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
