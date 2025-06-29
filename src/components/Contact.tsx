import React from 'react';
import { Linkedin, Github, Mail, ArrowUpRight, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const contactLinks = [
    {
      platform: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/shehzadasalman/'
    },
    {
      platform: 'GitHub',
      icon: Github,
      url: 'https://github.com/ShehzadaSalman'
    },
    {
      platform: 'E-mail',
      icon: Mail,
      url: 'mailto:shehzada.salman072@gmail.com'
    }
  ];

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/ShahzadaMSalmanResume.pdf';
    link.download = 'Shahzada_M_Salman_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
          Contact<span className="text-cyan-400">.</span>
        </h2>
        
        <p className="text-gray-400 mb-16 text-lg">
          Let's connect and discuss opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
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

        {/* Resume Download Button */}
        <div className="flex justify-center">
          <button
            onClick={handleResumeDownload}
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;