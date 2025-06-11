
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-40 h-40 bg-cherry/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-outfit font-bold text-gradient mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cherry to-gold mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image/Avatar Placeholder */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative mx-auto lg:mx-0 w-80 h-80 rounded-2xl glass-light overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cherry/20 to-gold/20 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-cherry to-wine rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">SR</span>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center animate-float">
                  <span className="text-gold font-bold">⚡</span>
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-cherry/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-cherry font-bold">💻</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-gold rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-cherry rounded-full"></div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-outfit font-semibold text-gold mb-6">
                  Passionate Tech Explorer
                </h3>
                
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    I'm a passionate tech explorer building dynamic web apps with 
                    <span className="text-gold font-semibold"> React, Next.js, and Tailwind</span>. 
                    I've contributed to flagship events like 
                    <span className="text-cherry font-semibold"> TEDxMITS</span> and 
                    <span className="text-cherry font-semibold"> Shreshta</span> and enjoy 
                    bridging aesthetics with functionality in every project.
                  </p>
                  
                  <p>
                    As a second-year <span className="text-gold font-semibold">B.Tech Computer Science and Engineering</span> student 
                    at <span className="text-cherry font-semibold">Muthoot Institute of Technology and Science, Kerala</span>, 
                    I'm constantly learning and pushing the boundaries of what's possible in web development.
                  </p>
                  
                  <p>
                    When I'm not coding, you'll find me designing user experiences that make people smile, 
                    contributing to college communities, or exploring the latest in 
                    <span className="text-gold font-semibold"> cybersecurity and cryptography</span>.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-light p-6 rounded-xl text-center hover-lift"
                >
                  <div className="text-3xl font-bold text-cherry mb-2">5+</div>
                  <div className="text-gray-400">Major Projects</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-light p-6 rounded-xl text-center hover-lift"
                >
                  <div className="text-3xl font-bold text-gold mb-2">10+</div>
                  <div className="text-gray-400">Technologies</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
