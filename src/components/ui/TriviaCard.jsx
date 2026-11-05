import { useState } from 'react'
import { quizzesData } from '../../mockup/quizzes'
import { SparklesAnimatedIcon, CircleCheckAnimatedIcon } from '../../icons'

export const TriviaCard = () => {
  const [cardHovered, setCardHovered] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const trivia = quizzesData.trivia

  const handleSelect = (option) => {
    setSelectedOption(option.id)
    setShowAnswer(true)
  }

  return (
    <div
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      className="p-6 sm:p-8 rounded-3xl bg-navy border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 shadow-2xl flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-black uppercase tracking-wider text-sky-400">
            {trivia.badge}
          </span>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-950 text-blue-300 border border-blue-500/30">
              {trivia.difficulty}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
              <SparklesAnimatedIcon isHovered={cardHovered} size={12} />
              {trivia.xpReward}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
          {trivia.title}
        </h3>
        <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-4">
          Topic: {trivia.topic}
        </p>

        <p className="text-sm sm:text-base text-slate-200 font-medium mb-6 leading-relaxed">
          {trivia.question}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {trivia.options.map((option) => {
            const isSelected = selectedOption === option.id
            let optionStyles = 'bg-navy-deep/90 border-blue-500/20 text-slate-200 hover:border-blue-400/50'

            if (showAnswer) {
              if (option.isCorrect) {
                optionStyles = 'bg-emerald-950/60 border-emerald-400 text-emerald-300 font-bold'
              } else if (isSelected && !option.isCorrect) {
                optionStyles = 'bg-rose-950/60 border-rose-400 text-rose-300 line-through'
              }
            }

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelect(option)}
                className={`p-3.5 rounded-xl border text-center text-sm font-semibold transition-all duration-200 cursor-pointer ${optionStyles}`}
              >
                {option.text}
              </button>
            )
          })}
        </div>
      </div>

      {showAnswer ? (
        <div className="p-3.5 rounded-xl bg-blue-950/60 border border-blue-500/30 text-xs text-sky-200 flex items-center gap-2">
          <CircleCheckAnimatedIcon isHovered={cardHovered} size={16} />
          <span>{trivia.explanation}</span>
        </div>
      ) : (
        <div className="text-xs text-slate-400 text-center font-medium">
          Select an answer above to earn demonstration Fan XP.
        </div>
      )}
    </div>
  )
}

