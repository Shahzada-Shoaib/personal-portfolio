import React from 'react';
import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      platform: 'LinkedIn',
      icon: Linkedin,
      url: '#'
    },
    {
      platform: 'Instagram', 
      icon: Mail,
      url: '#'
    },
    {
      platform: 'GitHub',
      icon: Github,
      url: '#'
    },
    {
      platform: 'E-mail',
      icon: Mail,
      url: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
          Contact<span className="text-cyan-400">.</span>
        </h2>
        
        <p className="text-gray-400 mb-16 text-lg">
          Contact me or follow my social media
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="flex items-center justify-between p-6 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
            >
              <div className="flex items-center gap-4">
                <link.icon size={24} className="text-cyan-400" />
                <span className="text-white font-medium">{link.platform}</span>
              </div>
              <ArrowUpRight 
                size={20} 
                className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;