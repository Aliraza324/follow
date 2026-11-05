import { useState } from 'react'
import { motion } from 'framer-motion'
import { whyJoinData } from '../../mockup/benefits'
import { UsersAnimatedIcon, MessageAnimatedIcon, TrophyAnimatedIcon } from '../../icons'

export const CompetitionsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section id="benefits" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <span className="w-1 h-4 bg-red-600 rounded-full shrink-0" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-primary">
              {whyJoinData.pretitle}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-3"
          >
            {whyJoinData.headlinePart1}{' '}
            <span className="text-primary">{whyJoinData.headlinePart2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            {whyJoinData.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {whyJoinData.cards.map((card, index) => {
            const isHovered = hoveredCard === card.id
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-md shadow-blue-900/4 flex items-center gap-4 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default group"
              >
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-blue-100/50 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div className="w-14 h-14 rounded-2xl bg-blue-50/90 border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-xs group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {card.iconType === 'users' && (
                    <UsersAnimatedIcon isHovered={isHovered} size={24} />
                  )}
                  {card.iconType === 'chat' && (
                    <MessageAnimatedIcon isHovered={isHovered} size={24} />
                  )}
                  {card.iconType === 'trophy' && (
                    <TrophyAnimatedIcon isHovered={isHovered} size={24} />
                  )}
                  {card.iconType === 'medal' && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${isHovered ? 'scale-115 rotate-6' : 'scale-100'}`}
                    >
                      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
                      <path d="M11 12 5.12 2.2" />
                      <path d="m13 12 5.88-9.8" />
                      <path d="M8 7h8" />
                      <circle cx="12" cy="17" r="5" />
                      <path d="m12 15 .6 1.2 1.4.2-1 1 .2 1.4-1.2-.6-1.2.6.2-1.4-1-1 1.4-.2Z" fill="currentColor" />
                    </svg>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-slate-900 text-base sm:text-lg mb-1 leading-snug group-hover:text-primary transition-colors font-semibold">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
