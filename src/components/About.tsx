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
    <section id="about" className="py-24 relative overflow-hidden bg-shellstone">
      {/* Animated background elements */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-quicksand/40 to-sapphire/30 opacity-30 blur-3xl"
        initial={{ scale: 0.8, opacity: 0.15 }}
        animate={{ scale: [0.8, 1.1, 0.9, 1], opacity: [0.15, 0.25, 0.18, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-0 w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-swanwing/60 to-quicksand/40 opacity-40 blur-2xl"
        initial={{ scale: 0.8, opacity: 0.2 }}
        animate={{ scale: [0.8, 1.2, 1, 0.9], opacity: [0.2, 0.4, 0.3, 0.4] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror", delay: 2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[220px] bg-gradient-to-r from-quicksand/30 via-swanwing/40 to-sapphire/30 opacity-25 blur-2xl rounded-full"
        initial={{ opacity: 0.1, y: 40 }}
        animate={{ opacity: [0.1, 0.3, 0.2, 0.3], y: [40, 0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, repeatType: "mirror", delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-6xl font-outfit font-extrabold text-sapphire mb-4 tracking-tight">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sapphire to-quicksand mx-auto rounded-full"></div>
          </motion.div>

          {/* Centered Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-10 text-center mx-auto"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-outfit font-semibold text-quicksand mb-5 tracking-wide">
                Full-Stack Developer & Tech Enthusiast
              </h3>
              <div className="space-y-6 text-sapphire text-lg leading-relaxed font-medium">
                <p>
                  I’m a dedicated developer with a passion for building robust, scalable, and visually engaging web applications using
                  <span className="text-quicksand font-semibold"> React</span>, <span className="text-quicksand font-semibold">Next.js</span>, and <span className="text-quicksand font-semibold">Tailwind CSS</span>.
                  My journey includes contributing to flagship events like
                  <span className="text-quicksand font-semibold"> TEDxMITS</span> and <span className="text-quicksand font-semibold">Shreshta</span>, where I blend creativity with technical expertise.
                </p>
                <p>
                  Currently, I’m a second-year <span className="text-quicksand font-semibold">B.Tech Computer Science and Engineering with Cyber Security</span> student at
                  <span className="text-quicksand font-semibold"> Muthoot Institute of Technology and Science, Kerala</span>. I thrive on continuous learning and pushing the boundaries of modern web development.
                </p>
                <p>
                  Beyond coding, I enjoy designing delightful user experiences, supporting college communities, and exploring the latest in
                  <span className="text-quicksand font-semibold"> cybersecurity</span> and <span className="text-quicksand font-semibold">cryptography</span>.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8">
              <motion.div
                whileHover={{ scale: 1.07 }}
                className="bg-white/70 backdrop-blur-md p-7 rounded-2xl text-center shadow-xl border border-swanwing flex-1"
              >
                <div className="text-4xl font-extrabold text-quicksand mb-2">5+</div>
                <div className="text-sapphire font-semibold tracking-wide">Major Projects</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.07 }}
                className="bg-white/70 backdrop-blur-md p-7 rounded-2xl text-center shadow-xl border border-swanwing flex-1"
              >
                <div className="text-4xl font-extrabold text-sapphire mb-2">10+</div>
                <div className="text-quicksand font-semibold tracking-wide">Technologies</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
