
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue.js", level: 75 },
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 80 }
      ]
    },
    {
      title: "Backend & Database",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C", level: 70 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Design & Tools",
      icon: "🎨",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Photoshop", level: 85 },
        { name: "Canva", level: 95 },
        { name: "UI/UX Design", level: 85 }
      ]
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "DevOps", level: 70 }
      ]
    }
  ];

  const certifications = [
    {
      title: "Linguaskill Business English Certification",
      issuer: "Cambridge",
      icon: "🏆"
    },
    {
      title: "Cryptography and Hashing in Python and Java",
      issuer: "Udemy",
      icon: "🔐"
    }
  ];

  const softSkills = [
    { skill: "Communication", description: "Created newsletters and visuals for events" },
    { skill: "Coordination", description: "Led tech and design teams for fests" },
    { skill: "PR & Marketing", description: "Promoted and publicized major events" },
    { skill: "Management", description: "Balanced leadership roles with academic success" }
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
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cherry/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
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
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, certifications, and soft skills
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cherry to-gold mx-auto mt-6"></div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            variants={itemVariants}
            className="mb-20"
          >
            <h3 className="text-2xl md:text-3xl font-outfit font-semibold text-gold mb-12 text-center">
              Technical Skills
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="glass-light rounded-2xl p-6 hover-lift"
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h4 className="text-xl font-outfit font-semibold text-white">
                      {category.title}
                    </h4>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-gold text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-dark-300 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className="bg-gradient-to-r from-cherry to-gold h-2 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={itemVariants}
            className="mb-20"
          >
            <h3 className="text-2xl md:text-3xl font-outfit font-semibold text-gold mb-12 text-center">
              Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-light rounded-2xl p-8 hover-lift text-center"
                >
                  <div className="text-5xl mb-4">{cert.icon}</div>
                  <h4 className="text-xl font-outfit font-semibold text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-gold font-medium">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-outfit font-semibold text-gold mb-12 text-center">
              Soft Skills & Leadership
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {softSkills.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="glass-light rounded-2xl p-6 hover-lift"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cherry to-wine rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-outfit font-semibold text-white mb-2">
                        {item.skill}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Volunteering Section */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <h3 className="text-2xl md:text-3xl font-outfit font-semibold text-gold mb-12 text-center">
              Community Involvement
            </h3>
            
            <div className="glass-light rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-outfit font-semibold text-white mb-4">
                    Event Contributions
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cherry rounded-full"></div>
                      <span><strong className="text-gold">TEDxMITS</strong> – Tech support and AV setup</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cherry rounded-full"></div>
                      <span><strong className="text-gold">Shreshta Fest</strong> – Creatives and event logistics</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cherry rounded-full"></div>
                      <span><strong className="text-gold">IEEE YESS</strong> – Design and venue management</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cherry rounded-full"></div>
                      <span><strong className="text-gold">Varnam Cultural Fest</strong> – Score updates and scheduling</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤝</div>
                    <p className="text-gray-400 text-lg">
                      Active contributor to college communities and flagship events
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
