import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Dribbble, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f5f0] text-[#1a1a1a] px-6 py-16 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-30">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path 
            fill="#F4C542" 
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.1,76.1C26.4,83.2,10,84.8,-5.8,83.2C-21.6,81.6,-36.8,76.8,-49.6,68.8C-62.4,60.8,-72.8,49.6,-79.8,36.2C-86.8,22.8,-90.4,7.2,-88.9,-7.8C-87.4,-22.8,-80.8,-37.2,-71.1,-49.4C-61.4,-61.6,-48.6,-71.6,-34.8,-78.9C-21,-86.2,-6.2,-90.8,6.8,-90.2C19.8,-89.6,30.6,-83.6,44.7,-76.4Z" 
            transform="translate(100 100)" 
            opacity="0.1"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-16">
          {/* Top Section */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left - Logo & Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Logo */}
              <div className="space-y-4">
                <h3 className="text-3xl tracking-tight">Susith Deshan</h3>
                <p className="text-[#1a1a1a]/60">
                  UI/UX Designer &<br />Software Engineer
                </p>
              </div>

              {/* Navigation Links */}
              <div className="space-y-3">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Contact', href: '#contact' }
                ].map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="block text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Center - Large Email CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-4">
                <p className="text-[#1a1a1a]/60 text-lg tracking-wide">GET IN TOUCH</p>
                <motion.h2 
                  className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href="mailto:hello@susithdeshan.com"
                    className="group relative inline-block"
                  >
                    <span className="relative">
                      IAMSUSITHALWIS@GMAIL.COM
                      <motion.span
                        className="absolute bottom-0 left-0 w-full h-1 bg-[#F4C542]"
                        initial={{ scaleX: 0, originX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                    <ArrowUpRight className="inline-block ml-4 w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                  </a>
                </motion.h2>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { icon: Dribbble, href: 'https://dribbble.com', label: 'Dribbble' },
                  { icon: Mail, href: 'mailto:hello@susithdeshan.com', label: 'Email' }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-[#F4C542] hover:text-[#1a1a1a] transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="h-px bg-[#1a1a1a]/10"
          />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#1a1a1a]/60"
          >
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <p>© {currentYear} All rights reserved.</p>
            </div>
            
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="hover:text-[#1a1a1a] transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="hover:text-[#1a1a1a] transition-colors"
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}