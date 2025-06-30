import { useState } from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend Development',
    icon: '💻',
    skills: [
      { name: 'React', level: 'Expert', pct: 90 },
      { name: 'Next.js', level: 'Expert', pct: 85 },
      { name: 'HTML/CSS', level: 'Expert', pct: 95 },
      { name: 'JavaScript', level: 'Expert', pct: 90 },
    ],
  },
  {
    title: 'Backend Development',
    icon: '🔧',
    skills: [
      { name: 'Node.js', level: 'Intermediate', pct: 75 },
      { name: 'Python', level: 'Expert', pct: 85 },
      { name: 'SQL', level: 'Intermediate', pct: 80 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    skills: [
      { name: 'Git + GitHub', level: 'Expert', pct: 90 },
      { name: 'VS Code', level: 'Expert', pct: 95 },
      { name: 'Docker', level: 'Intermediate', pct: 70 },
    ],
  },
  {
    title: 'UI/UX & Design',
    icon: '🎨',
    skills: [
      { name: 'Figma', level: 'Expert', pct: 90 },
      { name: 'Photoshop', level: 'Intermediate', pct: 85 },
      { name: 'UI/UX Design', level: 'Intermediate', pct: 85 },
    ],
  },
];

const softSkills = [
  {
    icon: '🗣️',
    title: 'Communication',
    description:
      'Effectively conveyed ideas while designing event visuals and leading collaborative tech teams. Known for simplifying complex ideas into understandable formats.',
  },
  {
    icon: '🤝',
    title: 'Teamwork & Collaboration',
    description:
      'Worked with diverse teams across college fests and hackathons. Seamlessly blended creative and technical roles to deliver results.',
  },
  {
    icon: '🧠',
    title: 'Problem Solving',
    description:
      'Approached real-time issues with logical thinking during event coordination and software projects. Enjoys debugging and finding scalable solutions.',
  },
  {
    icon: '📅',
    title: 'Time Management',
    description:
      'Balanced academic life with multiple leadership roles, consistently delivering tasks before deadlines with quality.',
  },
  {
    icon: '🎯',
    title: 'Leadership',
    description:
      'Led design, tech, and coordination teams for flagship events. Empowered team members with clear direction and creative freedom.',
  },
  {
    icon: '📣',
    title: 'Marketing & Outreach',
    description:
      'Promoted campus events using visually appealing digital assets, interactive posts, and social media campaigns.',
  },
  {
    icon: '📊',
    title: 'Organization',
    description:
      'Organized assets, schedules, and workflows for events like TEDx and Shreshta, ensuring seamless delivery and team alignment.',
  },
];

const containerAnim = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  const [showSoft, setShowSoft] = useState(false);

  return (
    <section id="skills" className="py-16 px-4 bg-royalblue text-swanwing">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h2 className="text-4xl font-outfit font-bold text-quicksand">
            {showSoft ? 'Soft Skills' : 'Tech Stack'}
          </h2>
          <button
            onClick={() => setShowSoft(!showSoft)}
            className="bg-sapphire text-white px-4 py-2 rounded-md hover:bg-sapphire/80 transition font-semibold"
          >
            {showSoft ? 'Show Tech Stack' : 'Show Soft Skills'}
          </button>
        </div>

        {/* Tech Stack Section */}
        {!showSoft ? (
          <motion.div
            variants={containerAnim}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {techCategories.map((cat, i) => (
              <motion.div
                key={i}
                variants={itemAnim}
                whileHover={{ scale: 1.03 }}
                className="bg-shellstone rounded-2xl p-6 shadow-lg hover:shadow-2xl transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{cat.icon}</span>
                  <h3 className="text-xl font-semibold text-sapphire">
                    {cat.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {cat.skills.map((s, j) => (
                    <div key={j} className="space-y-1">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-royalblue">{s.name}</span>
                        <span className="text-quicksand">{s.level}</span>
                      </div>
                      <div className="w-full h-2 bg-swanwing rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.pct}%` }}
                          transition={{ duration: 0.8, delay: j * 0.1 }}
                          className="h-full bg-gradient-to-r from-sapphire to-quicksand rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          // Soft Skills Section
          <motion.div
            variants={containerAnim}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {softSkills.map((skill, i) => (
              <motion.div
                key={i}
                variants={itemAnim}
                whileHover={{ scale: 1.02 }}
                className="bg-shellstone rounded-xl p-5 shadow-md hover:shadow-lg transition text-left flex gap-4 items-start"
              >
                <div className="text-3xl">{skill.icon}</div>
                <div>
                  <h4 className="text-sapphire font-semibold text-lg mb-1">
                    {skill.title}
                  </h4>
                  <p className="text-royalblue text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
