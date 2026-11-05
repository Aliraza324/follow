import { useState } from 'react'
import { leaderboardData } from '../../mockup/leaderboard'
import { SectionHeading } from '../common/SectionHeading'
import { PodiumCard } from '../ui/PodiumCard'
import { ChartAnimatedIcon } from '../../icons'

export const LeaderboardSection = () => {
  const [rowHovered, setRowHovered] = useState(null)

  return (
    <section id="leaderboard" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={leaderboardData.badge}
          headline={leaderboardData.headline}
          description={leaderboardData.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 items-end">
          <div className="order-2 md:order-1">
            <PodiumCard supporter={leaderboardData.podium[1]} />
          </div>
          <div className="order-1 md:order-2">
            <PodiumCard supporter={leaderboardData.podium[0]} />
          </div>
          <div className="order-3 md:order-3">
            <PodiumCard supporter={leaderboardData.podium[2]} />
          </div>
        </div>

        <div className="rounded-2xl bg-navy-deep/90 border border-blue-500/20 overflow-hidden shadow-xl">
          <div className="p-4 bg-blue-950/40 border-b border-blue-500/20 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
            <span>Rank & Supporter</span>
            <div className="flex items-center gap-8 sm:gap-16">
              <span className="hidden sm:inline">Accuracy</span>
              <span>Points (XP)</span>
            </div>
          </div>

          <div className="divide-y divide-blue-500/10">
            {leaderboardData.rows.map((row) => {
              const isHovered = rowHovered === row.rank
              return (
                <div
                  key={row.rank}
                  onMouseEnter={() => setRowHovered(row.rank)}
                  onMouseLeave={() => setRowHovered(null)}
                  className={`p-4 flex items-center justify-between transition-colors ${
                    isHovered ? 'bg-blue-950/50' : 'hover:bg-blue-950/30'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-500/30 text-sky-400 text-xs font-black flex items-center justify-center">
                      #{row.rank}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {row.username}
                      </h4>
                      <span className="text-[11px] text-slate-400">
                        {row.tier} • {row.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 sm:gap-16">
                    <span className="hidden sm:inline text-xs font-semibold text-slate-300">
                      {row.accuracy}
                    </span>
                    <div className="flex items-center gap-1.5 text-sm font-black text-sky-400">
                      <ChartAnimatedIcon isHovered={isHovered} size={14} />
                      <span>{row.xp}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

