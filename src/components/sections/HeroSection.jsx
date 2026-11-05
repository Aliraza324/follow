import { useState } from 'react'
import { motion } from 'framer-motion'
import { heroData } from '../../mockup/hero'
import { Button } from '../common/Button'
import { SmoothLink } from '../common/SmoothLink'
import { ArrowRightAnimatedIcon, CompassAnimatedIcon, FlameAnimatedIcon } from '../../icons'

export const HeroSection = ({ onOpenDemo }) => {
  const [sectionHovered, setSectionHovered] = useState(false)

  return (
    <section
      id="hero"
      onMouseEnter={() => setSectionHovered(true)}
      onMouseLeave={() => setSectionHovered(false)}
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-navy-deep"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=2000&q=85"
          alt="Stadium Atmosphere"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-navy-deep/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/40 text-sky-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-lg shadow-blue-950/50"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            <span>{heroData.badge}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-300 font-medium">Glasgow & Worldwide</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.08] mb-6"
          >
            {heroData.headlineLead}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-sky-200">
              {heroData.headlineAccent}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10"
          >
            {heroData.supportingCopy}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14"
          >
            <Button
              variant="primary"
              size="lg"
              icon={ArrowRightAnimatedIcon}
              className="w-full sm:w-auto"
              onClick={() => onOpenDemo('Join FollowOn', 'Join thousands of supporters in the upcoming digital community launch.')}
            >
              {heroData.primaryCta}
            </Button>

            <SmoothLink targetId="about">
              <Button
                variant="outline"
                size="lg"
                icon={CompassAnimatedIcon}
                className="w-full sm:w-auto"
              >
                {heroData.secondaryCta}
              </Button>
            </SmoothLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full p-4 sm:p-5 rounded-2xl bg-navy/80 border border-blue-500/20 backdrop-blur-md shadow-2xl mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-left"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600/20 text-sky-400 border border-blue-500/30 shrink-0">
                <FlameAnimatedIcon isHovered={sectionHovered} size={22} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-sky-400">
                    {heroData.livePulse.title}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[10px] font-bold text-emerald-400">
                    {heroData.livePulse.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-medium">
                  {heroData.livePulse.currentTopic}
                </p>
              </div>
            </div>

            <SmoothLink targetId="community">
              <span className="text-xs font-bold text-sky-400 hover:text-sky-300 uppercase tracking-wider flex items-center gap-1">
                Enter Forum <ArrowRightAnimatedIcon isHovered={sectionHovered} size={14} />
              </span>
            </SmoothLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full"
          >
            {heroData.stats.map((stat, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-2xl bg-navy/60 border border-blue-500/20 backdrop-blur-sm text-center transition-all duration-300 hover:border-blue-400/50 hover:bg-navy/80"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400 mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {stat.change}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center mt-12">
        <SmoothLink targetId="about" className="flex flex-col items-center text-slate-400 hover:text-sky-400 transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-widest mb-2">Scroll To Explore</span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-500/50 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 rounded-full bg-sky-400 animate-bounce" />
          </div>
        </SmoothLink>
      </div>
    </section>
  )
}

