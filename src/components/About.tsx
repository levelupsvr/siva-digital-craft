import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-shellstone text-sapphire relative overflow-hidden">
      {/* Soft glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-28 -left-24 w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-br from-quicksand/40 to-sapphire/30 opacity-20 blur-3xl"
        animate={{ scale: [1, 1.05, 0.95, 1], opacity: [0.15, 0.25, 0.2, 0.25] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-0 w-[160px] h-[160px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-tr from-swanwing/60 to-quicksand/40 opacity-30 blur-2xl"
        animate={{ scale: [0.9, 1.2, 1], opacity: [0.15, 0.3, 0.2, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold text-sapphire mb-4 tracking-tight">
              About Me
            </h2>
            <p className="text-swanwing text-lg sm:text-xl max-w-2xl mx-auto font-medium">
              Developer. Designer. Team Player. Always Learning.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-sapphire to-quicksand mx-auto mt-5 rounded-full"></div>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants} className="bg-white/50 backdrop-blur-lg p-6 md:p-10 rounded-3xl shadow-xl space-y-6">
            <p className="text-base md:text-lg leading-relaxed font-medium text-sapphire">
              I’m a <span className="text-quicksand font-semibold">Full-Stack Developer</span> who loves turning ideas into smart, scalable, and aesthetic products using
              <span className="text-quicksand font-semibold"> React</span>, <span className="text-quicksand font-semibold">Next.js</span>, and
              <span className="text-quicksand font-semibold"> Tailwind CSS</span>.
              I’ve contributed to events like <span className="text-quicksand font-semibold">TEDxMITS</span> and
              <span className="text-quicksand font-semibold"> Shreshta</span> through tech, design, and collaboration.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-medium text-sapphire">
              I’m currently in my second year of <span className="text-quicksand font-semibold">B.Tech in Computer Science & Cyber Security</span> at
              <span className="text-quicksand font-semibold"> Muthoot Institute of Technology and Science</span>, Kerala.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-medium text-sapphire">
              Outside development, I enjoy crafting intuitive UI/UX, leading creative teams, and diving deep into
              <span className="text-quicksand font-semibold"> cybersecurity</span> and <span className="text-quicksand font-semibold">cryptography</span>.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10 mt-10"
          >
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="bg-sapphire/10 backdrop-blur-md text-center px-6 py-5 rounded-2xl shadow-lg border border-swanwing max-w-xs w-full"
            >
              <div className="text-4xl font-bold text-quicksand mb-2">5+</div>
              <div className="text-sapphire font-semibold tracking-wide text-sm md:text-base">Major Projects</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="bg-sapphire/10 backdrop-blur-md text-center px-6 py-5 rounded-2xl shadow-lg border border-swanwing max-w-xs w-full"
            >
              <div className="text-4xl font-bold text-sapphire mb-2">10+</div>
              <div className="text-quicksand font-semibold tracking-wide text-sm md:text-base">Technologies</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

