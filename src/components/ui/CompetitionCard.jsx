import { useState } from 'react'
import { SparklesAnimatedIcon, ArrowRightAnimatedIcon } from '../../icons'
import { Button } from '../common/Button'

export const CompetitionCard = ({ item, onOpenDemo }) => {
  const [cardHovered, setCardHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      className="rounded-3xl bg-navy/90 border border-blue-500/20 hover:border-sky-400/50 transition-all duration-300 shadow-xl overflow-hidden flex flex-col justify-between group"
    >
      <div>
        <div className="relative h-60 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />

          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-navy/90 border border-blue-400/40 text-sky-300 backdrop-blur-md flex items-center gap-1.5">
              <SparklesAnimatedIcon isHovered={cardHovered} size={13} />
              <span>{item.type}</span>
            </span>
          </div>

          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-bold text-white">
            <span className="px-2.5 py-1 rounded-lg bg-navy/90 border border-blue-500/30 text-sky-400">
              {item.deadline}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-950/90 border border-blue-500/30 text-slate-300">
              {item.entries}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-black uppercase tracking-tight text-white mb-2 group-hover:text-sky-300 transition-colors">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            {item.description}
          </p>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Button
          variant="secondary"
          size="sm"
          className="w-full justify-between"
          icon={ArrowRightAnimatedIcon}
          onClick={() => onOpenDemo('Competition Entry', `Entry form for: ${item.title}. Draws will open for verified members.`)}
        >
          Enter Draw
        </Button>
      </div>
    </div>
  )
}

