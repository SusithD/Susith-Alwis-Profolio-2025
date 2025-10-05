import { motion } from 'motion/react';
import { Palette, Code2, Server, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Design',
      icon: Palette,
      color: '#F4C542',
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Adobe XD', level: 90 },
        { name: 'Sketch', level: 80 },
        { name: 'InVision', level: 75 },
        { name: 'Prototyping', level: 90 },
        { name: 'Design Systems', level: 95 },
        { name: 'User Research', level: 85 },
        { name: 'Wireframing', level: 90 }
      ]
    },
    {
      title: 'Frontend',
      icon: Code2,
      color: '#1a1a1a',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Nuxt.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Vue.js', level: 80 }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: '#1a1a1a',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 70 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'Firebase', level: 80 },
        { name: 'SendGrid', level: 85 }
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: '#F4C542',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Vercel', level: 85 },
        { name: 'Netlify', level: 80 },
        { name: 'Postman', level: 85 },
        { name: 'Jira', level: 75 },
        { name: 'Slack', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-[#f5f5f0] text-[#1a1a1a] px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div>
            <p className="text-[#1a1a1a]/60 text-lg tracking-wide mb-4">TECHNICAL EXPERTISE</p>
            <h2 className="text-5xl md:text-7xl tracking-tight">
              Skills & Technologies
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-[#1a1a1a]/10 hover:border-[#1a1a1a]/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-3">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ 
                          backgroundColor: category.color === '#F4C542' ? '#F4C542' : '#1a1a1a',
                          color: category.color === '#F4C542' ? '#1a1a1a' : '#fff'
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl">{category.title}</h3>
                    </div>

                    {/* Skills list with hover effects */}
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                          className="group"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm group-hover:text-[#1a1a1a] transition-colors">
                              {skill.name}
                            </span>
                            <span 
                              className="text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                              style={{ color: category.color }}
                            >
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress bar */}
                          <div className="h-1.5 bg-[#1a1a1a]/5 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: category.color }}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}