import { playersData } from '../../mockup/players'
import { SectionHeading } from '../common/SectionHeading'
import { PlayerCard } from '../ui/PlayerCard'

export const PlayerRatings = () => {
  return (
    <section id="ratings" className="py-24 bg-navy-deep relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={playersData.badge}
          headline={playersData.headline}
          description={playersData.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {playersData.players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs text-slate-400 font-medium">
            {playersData.disclaimer}
          </p>
        </div>
      </div>
    </section>
  )
}

