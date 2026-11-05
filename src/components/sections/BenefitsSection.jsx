import { useState } from 'react'
import { benefitsData } from '../../mockup/benefits'
import { SectionHeading } from '../common/SectionHeading'
import { UsersAnimatedIcon, ShieldAnimatedIcon, FlameAnimatedIcon, SparklesAnimatedIcon } from '../../icons'

export const BenefitsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const iconMap = {
    users: UsersAnimatedIcon,
    shield: ShieldAnimatedIcon,
    flame: FlameAnimatedIcon,
    sparkles: SparklesAnimatedIcon
  }

  return (
    <section id="benefits" className="py-24 bg-navy-deep relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={benefitsData.badge}
          headline={benefitsData.headline}
          description={benefitsData.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.benefits.map((benefit) => {
            const IconComp = iconMap[benefit.iconType] || UsersAnimatedIcon
            const isHovered = hoveredCard === benefit.id

            return (
              <div
                key={benefit.id}
                onMouseEnter={() => setHoveredCard(benefit.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 rounded-3xl transition-all duration-300 border flex flex-col justify-between ${
                  isHovered
                    ? 'bg-navy border-sky-400 shadow-2xl shadow-blue-900/30 -translate-y-2'
                    : 'bg-navy/80 border-blue-500/20 hover:border-blue-400/40'
                }`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-all duration-300 ${
                    isHovered
                      ? 'bg-primary text-white border-sky-400 shadow-lg shadow-blue-600/40 scale-110'
                      : 'bg-blue-950/80 text-sky-400 border-blue-500/30'
                  }`}>
                    <IconComp isHovered={isHovered} size={28} />
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 block mb-1">
                    {benefit.highlight}
                  </span>

                  <h3 className="text-xl font-black uppercase tracking-tight text-white mb-2">
                    {benefit.title}
                  </h3>

                  <h4 className="text-xs font-semibold text-slate-300 mb-3">
                    {benefit.summary}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

