import { useState } from 'react'
import { motion } from 'framer-motion'
import { performanceRatingsData } from '../../mockup/polls'
import { ArrowRightAnimatedIcon } from '../../icons'
import pollBg from '../../assets/pollBg.jpg'

export const PollsSection = ({ onOpenDemo }) => {
  const [buttonHovered, setButtonHovered] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section id="polls" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={pollBg}
          alt="Rangers Stadium Atmosphere"
          className="w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 via-50% to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {performanceRatingsData.pretitle}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 mb-3 md:whitespace-nowrap"
          >
            {performanceRatingsData.headlinePart1}{' '}
            <span className="text-primary">{performanceRatingsData.headlinePart2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            {performanceRatingsData.subtitle}
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 mb-10">
          {performanceRatingsData.cards.map((player) => {
            const isHovered = hoveredCard === player.id
            return (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onMouseEnter={() => setHoveredCard(player.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md flex items-stretch h-[135px] sm:h-[155px] transition-all duration-300 group w-full"
              >
                <div className="w-[36%] sm:w-[40%] h-full relative shrink-0 overflow-hidden bg-slate-100">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  <svg
                    className="absolute top-0 right-0 bottom-0 h-full w-7 sm:w-10 text-white fill-current pointer-events-none"
                    viewBox="0 0 40 100"
                    preserveAspectRatio="none"
                  >
                    <polygon points="40,0 40,100 0,100" />
                  </svg>

                  <svg
                    className="absolute top-0 right-0 bottom-0 h-full w-7 sm:w-10 pointer-events-none"
                    viewBox="0 0 40 100"
                    preserveAspectRatio="none"
                  >
                    <line x1="40" y1="0" x2="0" y2="100" stroke="#0057B8" strokeWidth="4" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0 py-2.5 px-3 sm:px-6 flex flex-col justify-center">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-0.5 tracking-tight group-hover:text-primary transition-colors leading-tight">
                    {player.name}
                  </h3>

                  <p className="text-xs font-semibold text-slate-500 mb-2 leading-tight">
                    {player.position}
                  </p>

                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className={`text-amber-400 text-xl sm:text-2xl leading-none transition-transform duration-300 ${
                      isHovered ? 'scale-120 rotate-12' : 'scale-100'
                    }`}>
                      ★
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                      {player.rating}
                    </span>
                  </div>

                  <span className="text-[11px] sm:text-xs font-semibold text-slate-500 leading-tight">
                    {player.ratingLabel}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
          <button
            type="button"
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            onClick={() => onOpenDemo?.('Player Ratings Hub', 'View the complete squad performance ratings and post-match verdicts.')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all duration-200 cursor-pointer active:scale-[0.98] mx-auto"
          >
            <span>{performanceRatingsData.cta}</span>
            <ArrowRightAnimatedIcon isHovered={buttonHovered} size={18} className="text-white" />
          </button>

          <p className="text-xs italic text-slate-500 font-medium mt-4 max-w-2xl mx-auto">
            {performanceRatingsData.note}
          </p>
        </div>
      </div>
    </section>
  )
}
