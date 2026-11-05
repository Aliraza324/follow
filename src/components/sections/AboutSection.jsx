import { useState } from 'react'
import { motion } from 'framer-motion'
import { aboutData } from '../../mockup/about'
import { UsersAnimatedIcon, MessageAnimatedIcon, TrophyAnimatedIcon } from '../../icons'
import aboutImage from '../../assets/Gemini_Generated_Image_6lzt7r6lzt7r6lzt.jpg'

export const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const iconMap = {
    connect: UsersAnimatedIcon,
    discuss: MessageAnimatedIcon,
    participate: TrophyAnimatedIcon
  }

  return (
    <section id="about" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-3 sm:mb-4"
            >
              <span className="w-1 h-4 bg-red-600 rounded-full shrink-0" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-primary">
                {aboutData.pretitle}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.14] text-slate-900 mb-6"
            >
              {aboutData.headlinePart1}{' '}
              <span className="text-primary">
                {aboutData.headlinePart2}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-700 font-semibold mb-3 leading-relaxed"
            >
              {aboutData.paragraph1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm sm:text-base text-slate-500 font-normal mb-8 sm:mb-10 leading-relaxed"
            >
              {aboutData.paragraph2}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4"
            >
              {aboutData.pillars.map((pillar) => {
                const IconComp = iconMap[pillar.id] || UsersAnimatedIcon
                const isHovered = hoveredCard === pillar.id

                return (
                  <div
                    key={pillar.id}
                    onMouseEnter={() => setHoveredCard(pillar.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 hover:bg-blue-50 border border-blue-100/90 text-center flex flex-col items-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-default group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white mb-3 shadow-md shadow-blue-600/25 group-hover:scale-105 transition-transform duration-300">
                      <IconComp isHovered={isHovered} size={22} className="text-white" />
                    </div>

                    <h4 className="text-base font-semibold font-black text-slate-900 mb-1">
                      {pillar.title}
                    </h4>

                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                )
              })}
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative p-2"
            >
              

              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Rangers Celebration"
                  className="w-full h-auto object-cover "
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
