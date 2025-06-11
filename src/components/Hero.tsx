
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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cherry/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl mx-auto"
        >
          {/* Terminal-style greeting */}
          <motion.div
            variants={itemVariants}
            className="mb-8 font-mono text-sm tracking-wide"
          >
            <span className="text-emerald-400">user@portfolio:~$</span>
            <span className="text-slate-300 ml-2">whoami</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-display font-space font-bold mb-6 leading-tight"
          >
            <span className="text-gradient">Sivanandana R</span>
          </motion.h1>

          {/* Professional Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-headline font-inter font-medium mb-8 text-slate-300 leading-relaxed"
          >
            Computer Science Student &{' '}
            <span className="text-gradient-accent">Full-Stack Developer</span>
          </motion.h2>

          {/* Enhanced Description */}
          <motion.div
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-4xl mx-auto font-inter leading-relaxed space-y-2"
          >
            <p>B.Tech CSE @ MITS • Building scalable web applications</p>
            <p className="text-sm font-mono text-slate-500">
              React.js • Next.js • Node.js • Python • TypeScript
            </p>
          </motion.div>

          {/* Professional CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-wine to-cherry px-8 py-4 rounded-lg text-white font-semibold text-lg glow-primary hover:glow-primary transition-all duration-300 min-w-[200px] shadow-xl"
            >
              View Projects
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="glass-light px-8 py-4 rounded-lg text-gold font-semibold text-lg border border-gold/30 hover:border-gold hover:glow-accent transition-all duration-300 min-w-[200px]"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Code Block Teaser */}
          <motion.div
            variants={itemVariants}
            className="code-block rounded-xl p-6 max-w-2xl mx-auto mb-12 text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-slate-400 text-sm font-mono">portfolio.ts</span>
            </div>
            <pre className="font-mono text-sm text-slate-300">
              <code>
{`const developer = {
  name: "Sivanandana R",
  role: "Full-Stack Developer",
  education: "B.Tech CSE @ MITS",
  specialties: ["React", "Node.js", "Python"],
  status: "Building the future"`}
              </code>
            </pre>
            <div className="mt-2">
              <span className="text-emerald-400 font-mono text-sm">
                // Always learning, always coding
              </span>
              <span className="inline-block w-2 h-4 bg-slate-300 ml-1 animate-terminal-blink"></span>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-wine/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1 h-3 bg-wine rounded-full mt-2"
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
