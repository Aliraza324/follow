import { useState } from 'react'
import { Button } from '../common/Button'
import { ArrowRightAnimatedIcon, ShieldAnimatedIcon } from '../../icons'

export const FinalCTA = ({ onOpenDemo }) => {
  const [sectionHovered, setSectionHovered] = useState(false)

  return (
    <section
      onMouseEnter={() => setSectionHovered(true)}
      onMouseLeave={() => setSectionHovered(false)}
      className="py-28 bg-navy relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=2000&q=80"
          alt="Supporters Crowd"
          className="w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy to-navy-deep/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-sky-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
          <ShieldAnimatedIcon isHovered={sectionHovered} size={16} />
          <span>Pride • Passion • Unbroken Loyalty</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-tight mb-6">
          THE NEXT CHAPTER OF FAN COMMUNITY{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">
            STARTS WITH YOU.
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Be part of a community built around the passion, opinions, and voices of Rangers supporters. Connect with supporters across the globe.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            icon={ArrowRightAnimatedIcon}
            className="w-full sm:w-auto shadow-2xl shadow-blue-600/50"
            onClick={() => onOpenDemo('Join FollowOn', 'Thank you for your interest! The community will open its doors for the upcoming season.')}
          >
            JOIN FOLLOWON
          </Button>
        </div>
      </div>
    </section>
  )
}

