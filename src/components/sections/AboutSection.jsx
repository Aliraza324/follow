import { useState } from 'react'
import { aboutData } from '../../mockup/about'
import { SectionHeading } from '../common/SectionHeading'
import { UsersAnimatedIcon, MessageAnimatedIcon, SparklesAnimatedIcon, ShieldAnimatedIcon } from '../../icons'

export const AboutSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const pillarIcons = {
    connect: UsersAnimatedIcon,
    discuss: MessageAnimatedIcon,
    participate: SparklesAnimatedIcon
  }

  return (
    <section id="about" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={aboutData.badge}
          headline={aboutData.headline}
          description={aboutData.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl shadow-navy-deep group">
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=85"
                alt="Supporters passion"
                className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-navy/90 backdrop-blur-md border border-blue-500/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-blue-600/30 text-sky-400">
                    <ShieldAnimatedIcon isHovered={hoveredCard === 'quote'} size={20} />
                  </div>
                  <span className="text-xs font-black tracking-widest uppercase text-sky-300">
                    Heritage & Pride
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-medium italic leading-relaxed">
                  "{aboutData.quote.text}"
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-5">
            {aboutData.pillars.map((pillar) => {
              const IconComp = pillarIcons[pillar.id] || UsersAnimatedIcon
              const isCardHovered = hoveredCard === pillar.id

              return (
                <div
                  key={pillar.id}
                  onMouseEnter={() => setHoveredCard(pillar.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-6 rounded-2xl transition-all duration-300 border ${
                    isCardHovered
                      ? 'bg-blue-950/60 border-blue-400 shadow-xl shadow-blue-950/40 translate-x-1.5'
                      : 'bg-navy-deep/80 border-blue-500/20 hover:border-blue-500/40'
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isCardHovered
                        ? 'bg-primary text-white border-sky-400 shadow-lg shadow-blue-600/40 scale-105'
                        : 'bg-blue-950/80 text-sky-400 border-blue-500/30'
                    }`}>
                      <IconComp isHovered={isCardHovered} size={26} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
                          {pillar.title}
                        </h3>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-sky-300 border border-blue-500/20">
                          {pillar.metric}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-sky-400 mb-2">
                        {pillar.subtitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {pillar.detail}
                      </p>
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

