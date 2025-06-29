import React from 'react';
import { Github, Linkedin, Twitter, Mail, Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-cyan-400/20 shadow-2xl">
                <img 
                  src="/WhatsApp Image 2025-06-28 at 4.33.32 PM.jpeg" 
                  alt="Shahzada M. Salman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                <Code className="text-slate-900" size={32} />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-cyan-400">Shahzada</span>.
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-400 font-light mb-6">
              Sr. Software Engineer
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl">
              Results-driven Lead Software Engineer with 7+ years of experience in developing robust, 
              user-centric web applications. Expert in JavaScript (React.js, Vue.js, Node.js), Shopify, 
              and SQL/NoSQL databases.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/ShehzadaSalman"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/shehzadasalman/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:shehzada.salman072@gmail.com"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;