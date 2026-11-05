import { useState } from 'react'
import { ChartAnimatedIcon, ShieldAnimatedIcon } from '../../icons'

export const PlayerCard = ({ player }) => {
  const [cardHovered, setCardHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      className="rounded-2xl bg-navy/90 border border-blue-500/20 hover:border-sky-400/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group"
    >
      <div>
        <div className="relative h-56 overflow-hidden">
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />

          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-navy/90 backdrop-blur-md border border-blue-500/30 text-white font-black text-sm flex items-center justify-center">
              #{player.number}
            </span>
            <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-navy/90 backdrop-blur-md border border-blue-500/30 text-sky-300">
              {player.position}
            </span>
          </div>

          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-primary/95 border border-sky-400/50 text-white shadow-lg">
            <ChartAnimatedIcon isHovered={cardHovered} size={16} />
            <span className="text-base font-black tracking-tight">{player.rating}</span>
            <span className="text-[10px] text-sky-200 font-bold">/10</span>
          </div>

          <div className="absolute bottom-3 left-3 right-3">
            <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-400/30 backdrop-blur-sm mb-1">
              {player.verdictLabel}
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-sky-300 transition-colors">
              {player.name}
            </h3>
          </div>
        </div>

        <div className="p-5">
          <p className="text-xs text-slate-300 italic mb-4 leading-relaxed">
            "{player.verdict}"
          </p>

          <div className="grid grid-cols-3 gap-2 py-3 border-y border-blue-500/15 text-center">
            {player.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-sm font-black text-white">{stat.value}</span>
                <span className="text-[10px] uppercase font-semibold text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 pt-1 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1.5 text-sky-400">
          <ShieldAnimatedIcon isHovered={cardHovered} size={14} />
          <span className="text-[11px] font-bold">Verified Match Verdict</span>
        </div>
        <span className="text-[10px] text-slate-400">4,120 fan ratings</span>
      </div>
    </div>
  )
}

