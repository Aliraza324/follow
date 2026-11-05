import { useState } from 'react'
import { motion } from 'framer-motion'
import { quizzesSectionData } from '../../mockup/quizzes'
import { ArrowRightAnimatedIcon } from '../../icons'
import ratingsBg from '../../assets/playerratings.jpg'
import quizBanner from '../../assets/pollCard.jpg'
import predictionBanner from '../../assets/pollCards.jpg'
import logoCrest from '../../assets/logo.png'

export const PlayerRatings = ({ onOpenDemo }) => {
  const [buttonHovered, setButtonHovered] = useState(false)
  const [quizBtnHovered, setQuizBtnHovered] = useState(false)
  const [selectedPrediction, setSelectedPrediction] = useState(quizzesSectionData.predictionCard.defaultSelected)

  return (
    <section id="quizzes" className="relative py-20 sm:py-24 lg:py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={ratingsBg}
          alt="Rangers Football Heritage Background"
          className="w-full h-full object-cover object-bottom "
        />
      
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 sm:mb-12">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-3"
            >
              <span className="w-1 h-4 bg-red-600 rounded-full shrink-0" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-primary">
                {quizzesSectionData.pretitle}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12] text-slate-900 mb-4"
            >
              {quizzesSectionData.headlinePart1}{' '}
              <span className="text-primary block">{quizzesSectionData.headlinePart2}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-sm mb-6"
            >
              {quizzesSectionData.subtitle}
            </motion.p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-blue-950/8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-28 sm:h-32 overflow-hidden bg-slate-900">
                <img
                  src={quizBanner}
                  alt="Football Quiz Banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-slate-800 shadow-xs">
                    <span className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-black">
                      ?
                    </span>
                    <span>{quizzesSectionData.quizCard.badge}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1.5 leading-snug font-semibold">
                    {quizzesSectionData.quizCard.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                    {quizzesSectionData.quizCard.subtitle}
                  </p>

                  <div className="grid grid-cols-3 divide-x divide-slate-200 text-center py-2 mb-6 border-y border-slate-100">
                    <div className="px-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">Questions</span>
                      <span className="text-xs sm:text-sm font-black font-semibold text-slate-900">10 Questions</span>
                    </div>
                    <div className="px-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">Difficulty</span>
                      <span className="text-xs sm:text-sm font-black font-semibold text-slate-900">Intermediate</span>
                    </div>
                    <div className="px-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-0.5">Time</span>
                      <span className="text-xs sm:text-sm font-black font-semibold text-slate-900">5 Minutes</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onMouseEnter={() => setQuizBtnHovered(true)}
                  onMouseLeave={() => setQuizBtnHovered(false)}
                  onClick={() => onOpenDemo?.('Sample Quiz', 'Interactive Rangers trivia quiz demo.')}
                  className="w-full py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 active:scale-[0.98]"
                >
                  <span>{quizzesSectionData.quizCard.cta}</span>
                  <ArrowRightAnimatedIcon isHovered={quizBtnHovered} size={16} className="text-white" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-blue-950/8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-28 sm:h-32 overflow-hidden bg-slate-900">
                <img
                  src={predictionBanner}
                  alt="Next Match Prediction Banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-xs font-bold text-slate-800 shadow-xs">
                    <span className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-black">
                      ⚽
                    </span>
                    <span>{quizzesSectionData.predictionCard.badge}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-4 leading-snug font-semibold">
                    {quizzesSectionData.predictionCard.title}
                  </h3>

                  <div className="flex flex-col gap-2.5 mb-4">
                    {quizzesSectionData.predictionCard.options.map((opt) => {
                      const isSelected = selectedPrediction === opt.id
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedPrediction(opt.id)}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-blue-50/90 border-blue-200 text-primary font-bold shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 font-semibold hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            {opt.type === 'rangers' && (
                              <img src={logoCrest} alt="Rangers" className="w-5 h-5 rounded-full object-contain" />
                            )}
                            {opt.type === 'draw' && (
                              <span className="text-sm">📅</span>
                            )}
                            {opt.type === 'opponent' && (
                              <span className="text-sm">🛡️</span>
                            )}
                            <span className="text-xs sm:text-sm">{opt.label}</span>
                          </div>

                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            isSelected ? 'border-primary' : 'border-slate-300'
                          }`}>
                            {isSelected && <div className="w-2 h-2 rounded-full bg-primary" />}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="text-center pt-2">
                  <span className="text-xs font-bold text-sky-600">
                    Selection recorded for matchday preview
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="button"
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            onClick={() => onOpenDemo?.('Quizzes & Predictions Hub', 'Complete fan quizzes and score prediction league.')}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 transition-all duration-200 cursor-pointer active:scale-[0.98] mx-auto"
          >
            <span>{quizzesSectionData.cta}</span>
            <ArrowRightAnimatedIcon isHovered={buttonHovered} size={18} className="text-white" />
          </button>

          <p className="text-xs italic text-slate-500 font-medium mt-4 max-w-2xl mx-auto">
            {quizzesSectionData.note}
          </p>
        </div>
      </div>
    </section>
  )
}
