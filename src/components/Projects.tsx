import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Chemist Warehouse',
      description: 'Australia\'s largest pharmacy retailer with a comprehensive e-commerce platform. Features product catalog, online ordering, prescription services, and store locator functionality.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['E-commerce', 'Pharmacy', 'Online Retail', 'Healthcare'],
      liveUrl: 'https://chemistwarehouse.com.au/',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Book My Studio',
      description: 'A comprehensive studio booking platform for France, allowing users to search and book recording studios. Features studio listings, booking management, and user authentication.',
      image: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Laravel', 'JavaScript', 'PHP', 'MySQL'],
      liveUrl: 'https://www.bookmystudio.fr/',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts with beautiful data visualizations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'Chart.js', 'Weather API', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing creative work with smooth animations and responsive design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with real-time metrics and engagement tracking.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Restaurant Website',
      description: 'An elegant restaurant website with online reservation system, menu showcase, and customer reviews.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
          Projects<span className="text-cyan-400">.</span>
        </h2>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/30 rounded-lg overflow-hidden hover:bg-slate-800/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800/80 hover:bg-cyan-400 rounded-lg transition-colors duration-200 group/link"
                    >
                      <ExternalLink size={16} className="text-white group-hover/link:text-slate-900" />
                    </a>
                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800/80 hover:bg-cyan-400 rounded-lg transition-colors duration-200 group/link"
                      >
                        <Github size={16} className="text-white group-hover/link:text-slate-900" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                    <ArrowUpRight 
                      size={16} 
                      className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" 
                    />
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-white">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/30 rounded-lg overflow-hidden hover:bg-slate-800/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-300"></div>
                  <div className="absolute top-2 right-2 flex gap-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-slate-800/80 hover:bg-cyan-400 rounded transition-colors duration-200 group/link"
                    >
                      <ExternalLink size={12} className="text-white group-hover/link:text-slate-900" />
                    </a>
                    {project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-slate-800/80 hover:bg-cyan-400 rounded transition-colors duration-200 group/link"
                      >
                        <Github size={12} className="text-white group-hover/link:text-slate-900" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                    <ArrowUpRight 
                      size={14} 
                      className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200" 
                    />
                  </div>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-slate-700/50 text-cyan-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 bg-slate-700/50 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;