import React from 'react';
import { Github, Linkedin, Twitter, Mail, Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Code Editor Visual */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 border-2 border-cyan-400 rounded-lg bg-slate-800/30 backdrop-blur-sm p-6 flex items-end justify-end">
                <div className="text-cyan-400 text-2xl font-mono">
                  {'</>'}
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
                <Code className="text-slate-900" size={24} />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Hi, I'm Dev.
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-400 font-light mb-8">
              Frontend Dev
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
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