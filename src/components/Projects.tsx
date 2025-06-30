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
      gradient: "from-purple-500 to-pink-500",
      website: "https://shreshtamits.in/",
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
      gradient: "from-red-500 to-orange-500",
      website: "https://tedxmits.in/",
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
      gradient: "from-blue-500 to-cyan-500",
      // No website property - button will not appear
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
      gradient: "from-green-500 to-emerald-500",
     
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
        staggerChildren: 0.15
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

  const handleProjectClick = (e, projectIndex) => {
    e.preventDefault();
    setActiveProject(projectIndex);
  };

  const handleWebsiteClick = (e, website) => {
    e.stopPropagation();
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden bg-swanwing">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-0 w-48 h-48 md:w-96 md:h-96 bg-sapphire/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-0 w-48 h-48 md:w-96 md:h-96 bg-quicksand/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15] 
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-royalblue/5 rounded-full blur-2xl"
          animate={{ 
            rotate: [0, 360],
            scale: [0.8, 1.1, 0.8] 
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-sapphire mb-4 md:mb-6 px-2">
              Featured Projects
            </h2>
            <p className="text-base md:text-xl text-royalblue max-w-3xl mx-auto px-4 leading-relaxed">
              A showcase of my recent work in web development, UI/UX design, and cybersecurity
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-sapphire to-quicksand mx-auto mt-4 md:mt-6 rounded-full"
            />
          </motion.div>

          {/* Enhanced Projects Grid with Professional Hover Effects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                className={`group relative rounded-2xl md:rounded-3xl p-6 md:p-8 cursor-pointer transition-all duration-500 backdrop-blur-sm border overflow-hidden ${
                  activeProject === index 
                    ? 'bg-white/95 border-quicksand/50 shadow-2xl shadow-quicksand/20' 
                    : 'bg-shellstone border-white/20 hover:border-quicksand/30'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
                onClick={(e) => handleProjectClick(e, index)}
              >
                {/* Subtle 3D Transform */}
                <motion.div
                  variants={{
                    rest: { 
                      scale: 1,
                      y: 0,
                      rotateX: 0,
                      rotateY: 0,
                    },
                    hover: { 
                      scale: 1.02,
                      y: -8,
                      rotateX: 2,
                      rotateY: 1,
                    },
                    tap: { 
                      scale: 0.98,
                      y: -4
                    }
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="absolute inset-0 rounded-2xl md:rounded-3xl"
                />

                {/* Smooth Gradient Background */}
                <motion.div
                  variants={{
                    rest: { 
                      opacity: 0,
                      scale: 0.9,
                    },
                    hover: { 
                      opacity: 0.08,
                      scale: 1.05,
                    }
                  }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br ${project.gradient}`}
                />

                {/* Elegant Shimmer Effect */}
                <motion.div
                  variants={{
                    rest: { x: "-150%", opacity: 0 },
                    hover: { x: "150%", opacity: 0.6 }
                  }}
                  transition={{ 
                    duration: 1.2, 
                    ease: "easeInOut",
                    delay: 0.1
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 blur-sm"
                />

                {/* Enhanced Shadow */}
                <motion.div
                  variants={{
                    rest: { 
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)"
                    },
                    hover: { 
                      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)"
                    }
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 rounded-2xl md:rounded-3xl"
                />

                {/* Content with Refined Animations */}
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 space-y-4 sm:space-y-0">
                    <div className="flex items-center space-x-3 md:space-x-4">
                      <motion.div 
                        variants={{
                          rest: { scale: 1, rotate: 0 },
                          hover: { scale: 1.15, rotate: 8 }
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="text-3xl md:text-4xl filter drop-shadow-sm"
                      >
                        {project.image}
                      </motion.div>
                      <div>
                        <div className="flex flex-col space-y-2 mb-2">
                          <motion.span 
                            variants={{
                              rest: { scale: 1, y: 0 },
                              hover: { scale: 1.05, y: -1 }
                            }}
                            transition={{ duration: 0.3 }}
                            className={`px-3 py-1 rounded-full text-xs font-semibold w-fit transition-all duration-300 ${
                              project.status === 'Live' 
                                ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            }`}
                          >
                            {project.status}
                          </motion.span>
                          <motion.span 
                            variants={{
                              rest: { opacity: 0.8 },
                              hover: { opacity: 1 }
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-xs md:text-sm text-quicksand font-medium"
                          >
                            {project.category}
                          </motion.span>
                        </div>
                      </div>
                    </div>

                    {/* Conditionally Rendered Visit Website Button */}
                    {project.website && (
                      <motion.button
                        onClick={(e) => handleWebsiteClick(e, project.website)}
                        variants={{
                          rest: { 
                            scale: 1,
                            opacity: 0.8,
                          },
                          hover: { 
                            scale: 1.1,
                            opacity: 1,
                          }
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-sapphire to-quicksand px-4 py-2 rounded-full text-white text-xs md:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <span>Visit Site</span>
                        <motion.svg 
                          className="w-3 h-3 md:w-4 md:h-4" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          whileHover={{ x: 2, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </motion.svg>
                      </motion.button>
                    )}
                  </div>

                  {/* Smooth Title Animation */}
                  <motion.h3 
                    variants={{
                      rest: { 
                        color: "rgb(17, 34, 80)", // royalblue
                        y: 0,
                        scale: 1
                      },
                      hover: { 
                        color: "rgb(48, 80, 125)", // sapphire
                        y: -2,
                        scale: 1.01
                      }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-xl md:text-2xl font-outfit font-bold mb-4 leading-tight"
                  >
                    {project.title}
                  </motion.h3>

                  {/* Enhanced Description */}
                  <motion.p 
                    variants={{
                      rest: { opacity: 0.85 },
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-sapphire mb-6 leading-relaxed text-sm md:text-base"
                  >
                    {project.description}
                  </motion.p>

                  {/* Refined Features Animation */}
                  <div className="mb-6">
                    <motion.h4 
                      variants={{
                        rest: { opacity: 0.8 },
                        hover: { opacity: 1 }
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-quicksand font-semibold mb-3 text-sm md:text-base"
                    >
                      Key Features:
                    </motion.h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex} 
                          variants={{
                            rest: { x: 0, opacity: 0.8 },
                            hover: { x: 6, opacity: 1 }
                          }}
                          transition={{ 
                            delay: featureIndex * 0.08,
                            duration: 0.4,
                            ease: "easeOut"
                          }}
                          className="flex items-center space-x-2"
                        >
                          <motion.div 
                            variants={{
                              rest: { scale: 1, rotate: 0 },
                              hover: { scale: 1.3, rotate: 90 }
                            }}
                            transition={{ duration: 0.4 }}
                            className="w-1.5 h-1.5 bg-gradient-to-r from-sapphire to-quicksand rounded-full flex-shrink-0"
                          />
                          <span className="text-xs md:text-sm text-royalblue">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Professional Tech Stack */}
                  <div>
                    <motion.h4 
                      variants={{
                        rest: { opacity: 0.8 },
                        hover: { opacity: 1 }
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-quicksand font-semibold mb-3 text-sm md:text-base"
                    >
                      Technologies:
                    </motion.h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          variants={{
                            rest: { 
                              scale: 1,
                              y: 0,
                              backgroundColor: "rgb(245, 240, 233)", // swanwing
                              borderColor: "rgb(216, 200, 194)" // shellstone
                            },
                            hover: { 
                              scale: 1.08,
                              y: -3,
                              backgroundColor: "rgb(255, 255, 255)",
                              borderColor: "rgb(68, 127, 152)" // quicksand
                            }
                          }}
                          transition={{ 
                            delay: techIndex * 0.06,
                            duration: 0.4,
                            ease: "easeOut"
                          }}
                          className="px-3 py-1 text-sapphire rounded-full text-xs md:text-sm border font-medium shadow-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Elegant Progress Indicator */}
                  <motion.div
                    variants={{
                      rest: { 
                        scaleX: 0, 
                        opacity: 0.6,
                        height: "2px"
                      },
                      hover: { 
                        scaleX: 1, 
                        opacity: 1,
                        height: "4px"
                      }
                    }}
                    transition={{ 
                      duration: 0.6, 
                      ease: "easeInOut",
                      delay: 0.1
                    }}
                    className={`bg-gradient-to-r ${project.gradient} mt-6 rounded-full origin-left shadow-lg`}
                  />
                </div>

                {/* Subtle Border Glow */}
                <motion.div
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r ${project.gradient} opacity-20 blur-sm -z-10`}
                />
              </motion.div>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12 md:mt-16 px-4"
          >
            <motion.p 
              className="text-royalblue mb-6 text-base md:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Want to see more of my work or collaborate on a project?
            </motion.p>
            <motion.a
              href="https://github.com/levelupsvr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                y: -4,
                boxShadow: "0 20px 40px rgba(48, 80, 125, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-sapphire to-quicksand px-6 md:px-8 py-3 md:py-4 rounded-full text-swanwing font-semibold hover:opacity-95 transition-all duration-300 text-sm md:text-base shadow-xl"
            >
              <span>View GitHub Profile</span>
              <motion.svg 
                className="w-4 h-4 md:w-5 md:h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                whileHover={{ x: 3, scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
