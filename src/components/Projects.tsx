
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Shreshta '25 – Techno-Cultural Fest Website",
      description: "Built the official fest website, fully responsive and optimized for scale. Worked with organizers to align design with the fest's theme.",
      tech: ["Next.js", "Tailwind CSS", "Git"],
      category: "Web Development",
      status: "Live",
      image: "🎊",
      features: [
        "Fully responsive design",
        "Performance optimized",
        "Event management system",
        "Mobile-first approach"
      ]
    },
    {
      title: "TEDxMITS 2025 Website",
      description: "Migrated legacy Nuxt to React. Enhanced performance, mobile UX, and design cohesion for the prestigious TEDx event.",
      tech: ["React.js", "Tailwind CSS", "Git"],
      category: "Migration & Optimization",
      status: "Live",
      image: "🎭",
      features: [
        "Legacy system migration",
        "Performance improvements",
        "Enhanced mobile UX",
        "Modern React architecture"
      ]
    },
    {
      title: "CORE – Robotics & Engineering Conclave",
      description: "Led UI/UX design and built the official site for IEEE RAS MITS event. Focused on visual hierarchy and user flow.",
      tech: ["Figma", "Next.js", "Tailwind CSS"],
      category: "UI/UX Design",
      status: "Live",
      image: "🤖",
      features: [
        "Complete UI/UX design",
        "Visual hierarchy optimization",
        "User flow design",
        "IEEE standards compliance"
      ]
    },
    {
      title: "HashBreaker Lite",
      description: "Ethical hash cracker supporting MD5, SHA1, SHA256 with local and API-based lookup. Emphasized security and error resilience.",
      tech: ["Python", "Requests", "hashlib"],
      category: "Cybersecurity",
      status: "Open Source",
      image: "🔐",
      features: [
        "Multiple hash algorithms",
        "API integration",
        "Security focused",
        "Error handling"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-wine/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-outfit font-bold text-gradient mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work in web development, UI/UX design, and cybersecurity
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cherry to-gold mx-auto mt-6"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`glass-light rounded-2xl p-8 hover-lift cursor-pointer transition-all duration-500 ${
                  activeProject === index ? 'ring-2 ring-cherry glow-red' : ''
                }`}
                onClick={() => setActiveProject(index)}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === 'Live' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {project.status}
                        </span>
                        <span className="text-sm text-gold">{project.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-outfit font-bold text-white mb-4 line-clamp-2">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-gold font-semibold mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-cherry rounded-full"></div>
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-gold font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-wine/20 text-white rounded-full text-sm border border-wine/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  className="h-1 bg-gradient-to-r from-cherry to-gold mt-6 rounded-full origin-left"
                />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">
              Want to see more of my work or collaborate on a project?
            </p>
            <motion.a
              href="https://github.com/levelupsvr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cherry to-wine px-8 py-4 rounded-full text-white font-semibold glow-red hover:glow-red transition-all duration-300"
            >
              <span>View GitHub Profile</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
