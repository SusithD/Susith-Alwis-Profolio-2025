import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-[#1a1a1a] text-white px-6 py-24 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-8">
            {/* Icon header */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <MessageCircle className="w-8 h-8 text-[#F4C542]" />
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[#F4C542] tracking-[0.3em] text-sm uppercase"
              >
                Get In Touch
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="w-24 h-24 rounded-full bg-[#F4C542] text-[#1a1a1a] flex items-center justify-center text-4xl mx-auto mb-8">
                👋
              </div>
            </motion.div>
            
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight">
                {'Got a project?'.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="inline-block mr-4"
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl text-white/70 max-w-3xl mx-auto"
              >
                Tell me about it — I'll reply within 48 hours.
              </motion.p>
              
              {/* Yellow accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="h-px w-32 bg-[#F4C542] origin-center mx-auto"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="mailto:susith@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F4C542] text-black px-8 py-4 rounded-full hover:bg-[#F4C542]/90 transition-all flex items-center gap-2 text-lg w-full sm:w-auto justify-center"
              >
                <Mail className="w-5 h-5" />
                Send Me an Email
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/20 text-white px-8 py-4 rounded-full hover:border-white/40 hover:bg-white/5 transition-all flex items-center gap-2 text-lg w-full sm:w-auto justify-center"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-white/10 pt-12"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="space-y-2 text-center md:text-left">
                <p className="text-white/60">Susith Deshan Alwis</p>
                <p className="text-white/40 text-sm">
                  UI/UX Designer & Software Engineer
                </p>
              </div>
              
              <div className="flex gap-6">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
              </div>
              
              <div className="text-white/40 text-sm">
                © 2025 All rights reserved
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}