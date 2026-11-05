import { useState } from 'react'
import { motion } from 'framer-motion'
import { fanExperiencesData } from '../../mockup/competitions'
import { ArrowRightAnimatedIcon, TrophyAnimatedIcon } from '../../icons'
import giveawayImg from '../../assets/Gemini_Generated_Image_8ljod68ljod68ljo.jpg'
import trophyImg from '../../assets/Gemini_Generated_Image_pacugopacugopacu.jpg'

export const QuizzesSection = ({ onOpenDemo }) => {
  const [buttonHovered, setButtonHovered] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section id="competitions" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-1 h-4 bg-red-600 rounded-full shrink-0" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-primary">
              {fanExperiencesData.pretitle}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 mb-3 whitespace-nowrap"
          >
            {fanExperiencesData.headlinePart1}{' '}
            <span className="text-primary">{fanExperiencesData.headlinePart2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            {fanExperiencesData.subtitle}
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onMouseEnter={() => setHoveredCard('giveaway')}
            onMouseLeave={() => setHoveredCard(null)}
            className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md flex items-stretch h-[140px] sm:h-[155px] transition-all duration-300 group"
          >
            <div className="w-[38%] sm:w-[40%] h-full relative shrink-0 overflow-hidden bg-slate-100">
              <img
                src={giveawayImg}
                alt="Rangers Fan Giveaway"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              <svg
                className="absolute top-0 right-0 bottom-0 h-full w-8 sm:w-10 text-white fill-current pointer-events-none"
                viewBox="0 0 40 100"
                preserveAspectRatio="none"
              >
                <polygon points="40,0 40,100 0,100" />
              </svg>

              <svg
                className="absolute top-0 right-0 bottom-0 h-full w-8 sm:w-10 pointer-events-none"
                viewBox="0 0 40 100"
                preserveAspectRatio="none"
              >
                <line x1="40" y1="0" x2="0" y2="100" stroke="#0057B8" strokeWidth="4" />
              </svg>
            </div>

            <div className="flex-1 py-3 px-4 sm:px-6 flex flex-col justify-center">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-blue-100/90 flex items-center justify-center text-primary shrink-0">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${hoveredCard === 'giveaway' ? 'scale-115 rotate-6' : 'scale-100'}`}
                  >
                    <rect x="3" y="8" width="18" height="4" rx="1" />
                    <path d="M12 8v13" />
                    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                    <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                  </svg>
                </div>

                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200/60">
                  {fanExperiencesData.cards[0].badge}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight mb-1 tracking-tight group-hover:text-primary transition-colors">
                {fanExperiencesData.cards[0].title}
              </h3>

              <p className="text-xs text-slate-500 font-medium leading-tight">
                {fanExperiencesData.cards[0].subtitle}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onMouseEnter={() => setHoveredCard('challenge')}
            onMouseLeave={() => setHoveredCard(null)}
            className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md flex items-stretch h-[140px] sm:h-[155px] transition-all duration-300 group"
          >
            <div className="w-[38%] sm:w-[40%] h-full relative shrink-0 overflow-hidden bg-slate-100">
              <img
                src={trophyImg}
                alt="Supporter Challenge Trophy"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              <svg
                className="absolute top-0 right-0 bottom-0 h-full w-8 sm:w-10 text-white fill-current pointer-events-none"
                viewBox="0 0 40 100"
                preserveAspectRatio="none"
              >
                <polygon points="40,0 40,100 0,100" />
              </svg>

              <svg
                className="absolute top-0 right-0 bottom-0 h-full w-8 sm:w-10 pointer-events-none"
                viewBox="0 0 40 100"
                preserveAspectRatio="none"
              >
                <line x1="40" y1="0" x2="0" y2="100" stroke="#0057B8" strokeWidth="4" />
              </svg>
            </div>

            <div className="flex-1 py-3 px-4 sm:px-6 flex flex-col justify-center">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <div className="w-7 h-7 rounded-lg bg-blue-100/90 flex items-center justify-center text-primary shrink-0">
                  <TrophyAnimatedIcon isHovered={hoveredCard === 'challenge'} size={18} className="text-primary" />
                </div>

                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200/60">
                  {fanExperiencesData.cards[1].badge}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight mb-1 tracking-tight group-hover:text-primary transition-colors">
                {fanExperiencesData.cards[1].title}
              </h3>

              <p className="text-xs text-slate-500 font-medium leading-tight">
                {fanExperiencesData.cards[1].subtitle}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <button
            type="button"
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            onClick={() => onOpenDemo?.('Competitions Hub', 'Explore official giveaways and fan challenges.')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all duration-200 cursor-pointer active:scale-[0.98] mx-auto"
          >
            <span>{fanExperiencesData.cta}</span>
            <ArrowRightAnimatedIcon isHovered={buttonHovered} size={18} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
