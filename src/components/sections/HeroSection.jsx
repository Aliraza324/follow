import { useState } from 'react'
import { motion } from 'framer-motion'
import { heroData } from '../../mockup/hero'
import { SmoothLink } from '../common/SmoothLink'
import { UsersAnimatedIcon } from '../../icons'
import heroBg from '../../assets/heroBg.png'
import shieldIcon from '../../assets/heroIcons (1).png'
import chatIcon from '../../assets/heroIcons (2).png'
import calendarIcon from '../../assets/heroIcons (1).jpg'

export const HeroSection = ({ onOpenDemo }) => {
  const [sectionHovered, setSectionHovered] = useState(false)

  return (
    <section
      id="hero"
      onMouseEnter={() => setSectionHovered(true)}
      onMouseLeave={() => setSectionHovered(false)}
      className="relative min-h-[640px] lg:min-h-[740px] flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="FollowOn Rangers Supporters Stadium"
          className="w-full h-full object-cover object-right lg:object-center"
        />
        
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-xl lg:max-w-2xl py-6 sm:py-10">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3 sm:mb-4"
          >
            <span className="w-1 h-4 bg-red-600 rounded-full shrink-0" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-primary">
              {heroData.pretitle}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight text-slate-900 leading-[1.12] mb-5"
          >
            {heroData.headlinePart1}
            <span className="block text-primary">
              {heroData.headlinePart2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-8 max-w-lg"
          >
            {heroData.supportingCopy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <button
              type="button"
              onClick={() => onOpenDemo('Join FollowOn', 'Join thousands of supporters in the upcoming digital community launch.')}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all duration-200 cursor-pointer active:scale-[0.98]"
            >
              <UsersAnimatedIcon isHovered={sectionHovered} size={18} className="text-white" />
              <span>{heroData.primaryCta}</span>
            </button>

            <SmoothLink targetId="about">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-blue-50/70 border-2 border-primary text-primary font-bold text-sm sm:text-base shadow-xs transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                <span className="text-xs">▷</span>
                <span>{heroData.secondaryCta}</span>
              </button>
            </SmoothLink>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl shadow-slate-900/8 border border-slate-100 p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 items-center"
        >
          <div className="flex items-center justify-center sm:justify-start gap-3 sm:px-4">
            <img
              src={shieldIcon}
              alt="One Club. One Community."
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0"
            />
            <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-900">
              {heroData.highlights[0].title}
            </span>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 sm:px-4 sm:border-l border-slate-200">
            <img
              src={chatIcon}
              alt="Real Fan Opinions"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0"
            />
            <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-900">
              {heroData.highlights[1].title}
            </span>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 sm:px-4 sm:border-l border-slate-200">
            <img
              src={calendarIcon}
              alt="Matchday Conversations"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0"
            />
            <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-900">
              {heroData.highlights[2].title}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
