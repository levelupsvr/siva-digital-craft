import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-royalblue pt-20 md:pt-32">
      {/* Sophisticated Background Elements - Mobile Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-sapphire/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 left-3/4 w-32 h-32 md:w-64 md:h-64 bg-swanwing/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl mx-auto"
        >
          {/* Terminal-style greeting - Mobile Responsive */}
          <motion.div
            variants={itemVariants}
            className="mb-6 md:mb-8 font-mono text-xs md:text-sm tracking-wide"
          >
            <span className="text-quicksand">user@portfolio:~$</span>
            <span className="text-shellstone ml-2">whoami</span>
          </motion.div>

          {/* Main Title - Mobile Responsive */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-space font-bold mb-4 md:mb-6 leading-tight text-swanwing px-2"
          >
            <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Sivanandana R
            </span>
          </motion.h1>

          {/* Professional Subtitle - Mobile Responsive */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter font-medium mb-6 md:mb-8 text-quicksand leading-relaxed px-2"
          >
            Computer Science with Cyber Security Student &{' '}
            <span className="text-swanwing">Full-Stack Developer</span>
          </motion.h2>

          {/* Enhanced Description - Mobile Responsive */}
          <motion.div
            variants={itemVariants}
            className="text-base md:text-lg lg:text-xl text-shellstone mb-8 md:mb-12 max-w-4xl mx-auto font-inter leading-relaxed space-y-2 px-4"
          >
            <p>B.Tech CSE CY @ MITS • Building scalable web applications</p>
            <p className="text-xs md:text-sm font-mono text-quicksand">
              React.js • Next.js • Node.js • Python • Nuxt.js
            </p>
          </motion.div>

          {/* Professional CTA Buttons - Mobile Optimized */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-sapphire to-quicksand px-6 md:px-8 py-3 md:py-4 rounded-lg text-swanwing font-semibold text-base md:text-lg shadow-xl hover:opacity-90 transition-all duration-300 w-full sm:w-auto min-w-[180px] md:min-w-[200px]"
            >
              View Projects
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="bg-shellstone px-6 md:px-8 py-3 md:py-4 rounded-lg text-sapphire font-semibold text-base md:text-lg border border-quicksand/40 hover:bg-quicksand hover:text-royalblue transition-all duration-300 w-full sm:w-auto min-w-[180px] md:min-w-[200px]"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Code Block Teaser - Mobile Responsive */}
          <motion.div
            variants={itemVariants}
            className="code-block rounded-xl p-4 md:p-6 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-8 md:mb-12 text-left bg-sapphire/80 text-swanwing overflow-x-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-quicksand rounded-full"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-swanwing rounded-full"></div>
                <div className="w-2 h-2 md:w-3 md:h-3 bg-shellstone rounded-full"></div>
              </div>
              <span className="text-shellstone text-xs md:text-sm font-mono">portfolio.ts</span>
            </div>
            <pre className="font-mono text-xs md:text-sm text-swanwing whitespace-pre-wrap">
              <code>
{`const developer = {
  name: "Sivanandana R",
  role: "Full-Stack Developer",
  education: "B.Tech CSE @ MITS",
  specialties: ["React", "Node.js", "Python"],
  status: "Building the future"
}`}
              </code>
            </pre>
            <div className="mt-2">
              <span className="text-quicksand font-mono text-xs md:text-sm">
                // Always learning, always coding
              </span>
              <span className="inline-block w-1 md:w-2 h-3 md:h-4 bg-swanwing ml-1 animate-terminal-blink"></span>
            </div>
          </motion.div>

          {/* Scroll Indicator - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-5 h-8 md:w-6 md:h-10 border-2 border-quicksand/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1 h-2 md:h-3 bg-quicksand rounded-full mt-1 md:mt-2"
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
