import { useState } from 'react'
import { CircleCheckAnimatedIcon, FlameAnimatedIcon, UpvoteAnimatedIcon } from '../../icons'

export const PollCard = ({ poll }) => {
  const [cardHovered, setCardHovered] = useState(false)
  const [selectedOptionId, setSelectedOptionId] = useState(null)
  const [hasVoted, setHasVoted] = useState(false)

  const handleSelectOption = (optionId) => {
    setSelectedOptionId(optionId)
    setHasVoted(true)
  }

  return (
    <div
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      className="p-6 rounded-2xl bg-navy border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-950 text-sky-400 border border-blue-500/30 flex items-center gap-1.5">
            <FlameAnimatedIcon isHovered={cardHovered} size={14} />
            {poll.category}
          </span>
          <span className="text-[11px] text-slate-400 font-medium">
            {poll.closingTime}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-bold text-white mb-5 leading-snug">
          {poll.question}
        </h3>

        <div className="flex flex-col gap-3 mb-6">
          {poll.options.map((option) => {
            const isSelected = selectedOptionId === option.id
            const displayPercentage = hasVoted && isSelected
              ? Math.min(option.percentage + 2, 99)
              : option.percentage

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => handleSelectOption(option.id)}
                className={`relative overflow-hidden w-full p-3.5 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-sky-400 bg-blue-950/80 shadow-md shadow-blue-500/20'
                    : 'border-blue-500/20 bg-navy-deep/80 hover:border-blue-400/40 hover:bg-navy-deep'
                }`}
              >
                <div
                  className={`absolute inset-y-0 left-0 transition-all duration-700 ease-out ${
                    isSelected ? 'bg-primary/40' : 'bg-blue-600/15'
                  }`}
                  style={{ width: `${displayPercentage}%` }}
                />

                <div className="relative z-10 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CircleCheckAnimatedIcon isHovered={cardHovered || isSelected} size={16} />
                    <span className={isSelected ? 'text-sky-300 font-bold' : ''}>
                      {option.label}
                    </span>
                  </div>
                  <span className="text-sky-400 font-extrabold shrink-0">
                    {displayPercentage}%
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="pt-3 border-t border-blue-500/15 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <UpvoteAnimatedIcon isHovered={cardHovered} size={16} />
          <span>{poll.totalVotes.toLocaleString()} votes cast</span>
        </div>
        <span className="text-[11px] font-semibold text-sky-400">
          {hasVoted ? 'Vote Recorded (Local Demo)' : 'Click option to vote'}
        </span>
      </div>
    </div>
  )
}

