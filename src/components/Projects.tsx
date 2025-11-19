import React from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Chemist Warehouse",
      description:
        "Australia's largest pharmacy retailer with a comprehensive e-commerce platform. Features product catalog, online ordering, prescription services, and store locator functionality.",
      image: "/Screenshot 2025-06-30 at 12.57.02 AM copy.png",
      technologies: ["E-commerce", "Pharmacy", "Online Retail", "Healthcare"],
      liveUrl: "https://chemistwarehouse.com.au/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Rent My Ride",
      description:
        "Premium car rental platform in UAE offering luxury vehicles with zero deposit deals. Features advanced booking system, fleet management, and customer service integration.",
      image: "/Screenshot 2025-07-05 at 4.46.26 AM.png",
      technologies: ["Car Rental", "Booking System", "UAE", "Luxury Cars"],
      liveUrl: "https://www.rentmyride.ae/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Social Hall HQ",
      description:
        "An exclusive social networking platform designed to revolutionize dating culture. Features sophisticated matchmaking algorithms, premium user experiences, and community-driven interactions.",
      image: "/socialhall.png",
      technologies: [
        "Social Network",
        "Dating Platform",
        "Community",
        "Premium Experience",
      ],
      liveUrl: "https://socialhallhq.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Techbay Solutions",
      description:
        "Innovative technology solutions company with 10+ years of experience in delivering cutting-edge digital transformation services. Specializes in custom software development, web applications, and comprehensive IT consulting for businesses across various industries.",
      image: "/techbay.png",
      technologies: [
        "Software Development",
        "IT Consulting",
        "Digital Transformation",
        "Web Applications",
      ],
      liveUrl: "https://techbay.co/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "XIQ Inc",
      description:
        "Advanced prospect research and analysis platform that enables 98% faster research capabilities. Features AI-powered prospect identification, comprehensive data analytics, and intelligent insights for sales and marketing teams.",
      image: "/xiq.png",
      technologies: [
        "AI Research",
        "Data Analytics",
        "Sales Intelligence",
        "Prospect Analysis",
      ],
      liveUrl: "https://xiqinc.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Ghanda",
      description:
        "Australian lifestyle clothing brand featuring casual wear, denim, and basics for men, women, and kids. Offers contemporary fashion with a focus on comfort, quality, and accessible pricing across multiple categories.",
      image: "/ghanda.png",
      technologies: ["E-commerce", "Fashion", "Lifestyle", "Australian Brand"],
      liveUrl: "https://ghanda.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Cue",
      description:
        "Premium fashion e-commerce platform featuring signature tailoring and refined knitwear. Offers curated collections of high-end clothing and accessories with sophisticated design and seamless shopping experience.",
      image: "/cue.png",
      technologies: ["E-commerce", "Fashion", "Premium Retail", "Tailoring"],
      liveUrl: "https://www.cue.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Paysa",
      description:
        "Revolutionary digital payments platform empowering seamless financial transactions across Pakistan. Features secure payment processing, digital wallet functionality, and comprehensive financial empowerment solutions for modern digital interactions.",
      image: "/paysapk.png",
      technologies: [
        "FinTech",
        "Digital Payments",
        "Mobile Banking",
        "Financial Services",
      ],
      liveUrl: "https://www.paysa.com.pk/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "AI Vox Agency",
      description:
        "Advanced AI-powered phone automation platform that transforms customer support and sales with intelligent calling agents. Features natural conversation handling, voice recognition, and real-time analytics for 24/7 customer service.",
      image: "/aivox.png",
      technologies: [
        "AI Automation",
        "Voice Recognition",
        "Phone Systems",
        "Customer Support",
      ],
      liveUrl: "https://aivox.agency/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Software Dads",
      description:
        "Smart A.I Solutions platform offering custom web development, AI automation, and intelligent AI agents. Focused on building smarter, more efficient digital solutions for modern businesses.",
      image: "/software-dads.png",
      technologies: [
        "AI Solutions",
        "Web Development",
        "Automation",
        "AI Agents",
      ],
      liveUrl: "https://softwaredads.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Book My Studio",
      description:
        "A comprehensive studio booking platform for France, allowing users to search and book recording studios. Features studio listings, booking management, and user authentication.",
      image: "/Screenshot 2025-07-05 at 5.05.02 AM.png",
      technologies: ["Laravel", "JavaScript", "PHP", "MySQL"],
      liveUrl: "https://www.bookmystudio.fr/",
      githubUrl: "#",
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
          Projects<span className="text-cyan-400">.</span>
        </h2>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Featured Projects
          </h3>
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
                    className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800/80 hover:bg-cyan-400 rounded-lg transition-colors duration-200 group/link"
                    >
                      <ExternalLink
                        size={16}
                        className="text-white group-hover/link:text-slate-900"
                      />
                    </a>
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800/80 hover:bg-cyan-400 rounded-lg transition-colors duration-200 group/link"
                      >
                        <Github
                          size={16}
                          className="text-white group-hover/link:text-slate-900"
                        />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h4 className="text-xl font-semibold text-white">
                      {project.title}
                    </h4>
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
      </div>
    </section>
  );
};

export default Projects;
