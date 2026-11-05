import { useState } from 'react'
import { quizzesData } from '../../mockup/quizzes'
import { ZapAnimatedIcon, CircleCheckAnimatedIcon } from '../../icons'

export const PredictionCard = () => {
  const [cardHovered, setCardHovered] = useState(false)
  const [selectedPrediction, setSelectedPrediction] = useState(null)

  const pred = quizzesData.prediction

  return (
    <div
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      className="p-6 sm:p-8 rounded-3xl bg-navy border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 shadow-2xl flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-black uppercase tracking-wider text-sky-400">
            {pred.badge}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
            <ZapAnimatedIcon isHovered={cardHovered} size={12} />
            {pred.xpReward}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-navy-deep/90 border border-blue-500/20 mb-6 text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
            {pred.tournament}
          </span>
          <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white mb-1">
            {pred.fixture}
          </h4>
          <div className="text-xs text-sky-400 font-semibold flex items-center justify-center gap-2">
            <span>{pred.venue}</span>
            <span>•</span>
            <span>{pred.kickoff}</span>
          </div>
        </div>

        <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
          Lock In Your Match Prediction:
        </p>

        <div className="flex flex-col gap-2.5 mb-6">
          {pred.options.map((opt) => {
            const isSelected = selectedPrediction === opt.id
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedPrediction(opt.id)}
                className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-950 border-sky-400 shadow-md shadow-blue-500/20'
                    : 'bg-navy-deep/80 border-blue-500/20 hover:border-blue-400/40 text-slate-200'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <CircleCheckAnimatedIcon isHovered={cardHovered || isSelected} size={16} />
                  <span className={`text-sm font-bold ${isSelected ? 'text-sky-300' : 'text-white'}`}>
                    {opt.label}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-400 px-2 py-0.5 rounded bg-blue-950/50">
                  {opt.odds}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/20 text-xs text-slate-300 text-center">
        {selectedPrediction ? (
          <span className="text-sky-300 font-bold">Prediction submitted locally for this demonstration!</span>
        ) : (
          <span>Select an outcome to test interactive prediction submission.</span>
        )}
      </div>
    </div>
  )
}

