import { useState } from 'react'
import { SparklesAnimatedIcon, ShieldAnimatedIcon } from '../../icons'

export const PodiumCard = ({ supporter }) => {
  const [cardHovered, setCardHovered] = useState(false)
  const isFirst = supporter.rank === 1

  return (
    <div
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      className={`relative p-6 rounded-3xl bg-navy transition-all duration-300 border flex flex-col justify-between ${
        supporter.borderGlow
      } ${
        isFirst
          ? 'lg:-translate-y-4 bg-gradient-to-b from-navy via-navy to-blue-950/60 shadow-2xl'
          : 'shadow-xl'
      }`}
    >
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
        <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider text-navy-deep bg-gradient-to-r shadow-lg ${supporter.medalColor}`}>
          Rank #{supporter.rank}
        </span>
      </div>

      <div className="text-center mt-3">
        <div className="relative inline-block mx-auto mb-3">
          <img
            src={supporter.avatar}
            alt={supporter.username}
            className={`w-20 h-20 rounded-full object-cover mx-auto border-3 ${
              isFirst ? 'border-amber-400 ring-4 ring-amber-400/20' : 'border-blue-500/50'
            }`}
          />
          <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-navy-deep border-2 border-blue-400 flex items-center justify-center text-sky-400">
            <ShieldAnimatedIcon isHovered={cardHovered} size={14} />
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white mb-0.5">
          {supporter.username}
        </h3>
        <p className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-3">
          {supporter.tier}
        </p>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-950/80 border border-blue-500/30 text-white font-black text-sm mb-4">
          <SparklesAnimatedIcon isHovered={cardHovered} size={14} />
          <span>{supporter.xp}</span>
        </div>

        <div className="p-2.5 rounded-xl bg-navy-deep/70 border border-blue-500/15 text-[11px] text-slate-300 font-medium">
          {supporter.highlight}
        </div>
      </div>
    </div>
  )
}

