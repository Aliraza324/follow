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
      className="relative min-h-[auto] lg:min-h-[740px] flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-8 overflow-hidden bg-[#00102b] lg:bg-white"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="FollowOn Rangers Supporters Stadium"
          className="w-full h-full object-cover object-right lg:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00102b] via-[#00102b]/65 via-50% to-[#00102b]/30 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00102b]/70 via-transparent to-transparent lg:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-xl lg:max-w-2xl py-6 sm:py-10">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1 rounded-full bg-white/10 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none border border-white/15 lg:border-none w-fit"
          >
            <span className="w-1.5 h-3.5 bg-red-600 rounded-full shrink-0 shadow-[0_0_8px_rgba(220,38,38,0.9)]" />
            <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-wider text-sky-300 lg:text-primary">
              {heroData.pretitle}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight text-white lg:text-slate-900 leading-[1.12] mb-4 sm:mb-5 drop-shadow-md lg:drop-shadow-none"
          >
            {heroData.headlinePart1}
            <span className="block text-sky-400 lg:text-primary">
              {heroData.headlinePart2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-base text-slate-200 lg:text-slate-600 font-medium leading-relaxed mb-6 sm:mb-8 max-w-lg drop-shadow-sm lg:drop-shadow-none"
          >
            {heroData.supportingCopy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <button
              type="button"
              onClick={() => onOpenDemo('Join FollowOn', 'Join thousands of supporters in the upcoming digital community launch.')}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 lg:bg-primary lg:hover:bg-primary-dark text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/40 transition-all duration-200 cursor-pointer active:scale-[0.98] w-full sm:w-auto"
            >
              <UsersAnimatedIcon isHovered={sectionHovered} size={18} className="text-white" />
              <span>{heroData.primaryCta}</span>
            </button>

            <SmoothLink targetId="about" className="w-full sm:w-auto">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white lg:bg-white lg:hover:bg-blue-50/70 lg:border-2 lg:border-primary lg:text-primary font-bold text-sm sm:text-base shadow-md transition-all duration-200 cursor-pointer active:scale-[0.98] w-full"
              >
                <span className="text-xs">▷</span>
                <span>{heroData.secondaryCta}</span>
              </button>
            </SmoothLink>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 mt-6 sm:mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl shadow-blue-950/40 border border-white/20 lg:border-slate-100 p-3.5 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-2 items-center"
        >
          <div className="flex items-center justify-start gap-3 px-2 sm:px-4">
            <img
              src={shieldIcon}
              alt="One Club. One Community."
              className="w-7 h-7 sm:w-9 sm:h-9 object-contain shrink-0"
            />
            <span className="text-xs sm:text-sm md:text-base font-bold text-slate-900">
              {heroData.highlights[0].title}
            </span>
          </div>

          <div className="flex items-center justify-start gap-3 px-2 sm:px-4 pt-2.5 sm:pt-0 border-t sm:border-t-0 sm:border-l border-slate-200">
            <img
              src={chatIcon}
              alt="Real Fan Opinions"
              className="w-7 h-7 sm:w-9 sm:h-9 object-contain shrink-0"
            />
            <span className="text-xs sm:text-sm md:text-base font-bold text-slate-900">
              {heroData.highlights[1].title}
            </span>
          </div>

          <div className="flex items-center justify-start gap-3 px-2 sm:px-4 pt-2.5 sm:pt-0 border-t sm:border-t-0 sm:border-l border-slate-200">
            <img
              src={calendarIcon}
              alt="Matchday Conversations"
              className="w-7 h-7 sm:w-9 sm:h-9 object-contain shrink-0"
            />
            <span className="text-xs sm:text-sm md:text-base font-bold text-slate-900">
              {heroData.highlights[2].title}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
