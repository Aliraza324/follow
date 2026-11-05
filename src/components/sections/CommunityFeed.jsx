import { useState } from 'react'
import { motion } from 'framer-motion'
import { communitySayData } from '../../mockup/posts'
import { ChartAnimatedIcon, MessageAnimatedIcon, UsersAnimatedIcon, ArrowRightAnimatedIcon } from '../../icons'
import communityBg from '../../assets/Gemini_Generated_Image_5l48bv5l48bv5l48.jpg'

export const CommunityFeed = ({ onOpenDemo }) => {
  const [card1Hovered, setCard1Hovered] = useState(false)
  const [card2Hovered, setCard2Hovered] = useState(false)
  const [buttonHovered, setButtonHovered] = useState(false)
  const [selectedPoll, setSelectedPoll] = useState('opt-a')
  const [selectedDebate, setSelectedDebate] = useState(communitySayData.debate.defaultSelected)

  return (
    <section id="community" className="relative py-20 sm:py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={communityBg}
          alt="Have Your Say Background"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {communitySayData.pretitle}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4"
          >
            {communitySayData.headlinePart1}{' '}
            <span className="text-primary">{communitySayData.headlinePart2}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            {communitySayData.subtitle}
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onMouseEnter={() => setCard1Hovered(true)}
            onMouseLeave={() => setCard1Hovered(false)}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xl shadow-blue-950/5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold mb-4 w-fit">
                <ChartAnimatedIcon isHovered={card1Hovered} size={15} />
                <span>{communitySayData.poll.badge}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-black font-semibold text-slate-900 mb-6 leading-snug">
                {communitySayData.poll.question}
              </h3>

              <div className="flex flex-col gap-3 mb-6">
                {communitySayData.poll.options.map((option) => {
                  const isSelected = selectedPoll === option.id
                  return (
                    <div
                      key={option.id}
                      onClick={() => setSelectedPoll(option.id)}
                      className={`p-2.5 rounded-xl cursor-pointer transition-colors ${
                        isSelected ? 'bg-blue-50/70' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between text-sm font-bold mb-1.5">
                        <span className={isSelected ? 'text-primary' : 'text-slate-800'}>
                          {option.label}
                        </span>
                        <span className="font-extrabold text-slate-900">
                          {option.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-blue-100/70 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-primary h-full rounded-full transition-all duration-700"
                          style={{ width: `${option.percentage}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 pt-3 border-t border-slate-100">
              <UsersAnimatedIcon isHovered={card1Hovered} size={15} className="text-slate-500" />
              <span>{communitySayData.poll.votesText}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onMouseEnter={() => setCard2Hovered(true)}
            onMouseLeave={() => setCard2Hovered(false)}
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-xl shadow-blue-950/5 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-bold mb-4 w-fit">
                <MessageAnimatedIcon isHovered={card2Hovered} size={15} />
                <span>{communitySayData.debate.badge}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-black font-semibold text-slate-900 mb-6 leading-snug">
                {communitySayData.debate.question}
              </h3>

              <div className="flex flex-col gap-2 mb-6">
                {communitySayData.debate.options.map((option) => {
                  const isSelected = selectedDebate === option.id
                  return (
                    <div
                      key={option.id}
                      onClick={() => setSelectedDebate(option.id)}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50/90 text-primary font-bold border border-blue-200/70 shadow-xs'
                          : 'text-slate-700 font-semibold hover:bg-slate-50 border border-transparent'
                      }`}
                    >
                      <div className="w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                        {isSelected && <div className="w-2 h-2 rounded-full bg-primary" />}
                      </div>
                      <span className="text-sm">{option.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="text-xs font-semibold text-sky-600 pt-3 border-t border-slate-100">
              Active supporter debate in progress
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <button
            type="button"
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            onClick={() => onOpenDemo('More Discussions', 'Access active fan threads and vote in matchday debates.')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all duration-200 cursor-pointer active:scale-[0.98] mx-auto"
          >
            <span>{communitySayData.cta}</span>
            <ArrowRightAnimatedIcon isHovered={buttonHovered} size={18} className="text-white" />
          </button>

          <p className="text-xs italic text-slate-500 font-medium mt-4">
            {communitySayData.note}
          </p>
        </div>
      </div>
    </section>
  )
}
