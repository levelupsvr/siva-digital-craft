import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "levelupsvr24@gmail.com",
      link: "mailto:levelupsvr24@gmail.com"
    },
  
    {
      icon: "💼",
      label: "GitHub",
      value: "levelupsvr",
      link: "https://github.com/levelupsvr"
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "sivanandana-r-pillai",
      link: "https://linkedin.com/in/sivanandana-r-pillai-86b0822b3"
    },
    {
      icon: "📸",
      label: "Instagram",
      value: "_level_up_svr",
      link: "https://www.instagram.com/_level_up_svr?igsh=eDgwaHZ4aTNpMGxn"
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
    <section id="contact" className="py-20 relative overflow-hidden bg-swanwing">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sapphire/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-quicksand/20 rounded-full blur-3xl"></div>
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
            <h2 className="text-4xl md:text-6xl font-outfit font-bold text-sapphire mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-royalblue max-w-3xl mx-auto">
              Ready to collaborate? Have a project in mind? Let's discuss how we can work together to create something amazing.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-sapphire to-quicksand mx-auto mt-6"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-outfit font-semibold text-quicksand mb-8">
                  Get In Touch
                </h3>
                <p className="text-royalblue text-lg mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and design. Feel free to reach out 
                  through any of the channels below.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-4 bg-shellstone p-6 rounded-xl hover:shadow-lg transition-shadow group"
                  >
                    <div className="text-3xl">{contact.icon}</div>
                    <div>
                      <div className="text-quicksand font-semibold">{contact.label}</div>
                      <div className="text-royalblue group-hover:text-sapphire transition-colors">
                        {contact.value}
                      </div>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-5 h-5 text-sapphire" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Response Promise */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-shellstone p-6 rounded-xl border border-quicksand/40"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-2xl">⚡</div>
                  <h4 className="text-xl font-outfit font-semibold text-quicksand">Quick Response</h4>
                </div>
                <p className="text-royalblue">
                  I typically respond to messages within 24 hours. Looking forward to hearing from you!
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="bg-shellstone p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-outfit font-semibold text-sapphire mb-8">
                Send a Message
              </h3>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-quicksand/20 border border-quicksand/40 text-sapphire p-4 rounded-xl mb-6"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-quicksand font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-swanwing border border-quicksand/40 rounded-xl px-4 py-3 text-sapphire focus:border-sapphire focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-quicksand font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-swanwing border border-quicksand/40 rounded-xl px-4 py-3 text-sapphire focus:border-sapphire focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-quicksand font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-swanwing border border-quicksand/40 rounded-xl px-4 py-3 text-sapphire focus:border-sapphire focus:outline-none transition-colors"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-quicksand font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-swanwing border border-quicksand/40 rounded-xl px-4 py-3 text-sapphire focus:border-sapphire focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-sapphire/50 cursor-not-allowed'
                      : 'bg-gradient-to-r from-sapphire to-quicksand hover:opacity-90'
                  } text-swanwing`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-swanwing/30 border-t-swanwing rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
