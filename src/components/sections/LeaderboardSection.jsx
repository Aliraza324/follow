import { useState } from 'react'
import { motion } from 'framer-motion'
import { joinBannerData } from '../../mockup/leaderboard'
import { UsersAnimatedIcon, ArrowRightAnimatedIcon } from '../../icons'
import bannerBg from '../../assets/Gemini_Generated_Image_6w7bk26w7bk26w7b.jpg'

export const LeaderboardSection = ({ onOpenDemo }) => {
  const [buttonHovered, setButtonHovered] = useState(false)

  return (
    <section id="leaderboard" className="relative py-8 sm:py-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-blue-950/15 min-h-[195px] sm:min-h-[220px] flex items-center py-6 px-7 sm:py-7 sm:px-12"
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={bannerBg}
              alt="Rangers Stadium Atmosphere"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#003B80] via-[#003B80]/95 via-50% to-transparent hidden md:block" />
            <div className="absolute inset-0 bg-[#003B80]/90 md:hidden" />
          </div>

          <div className="relative z-10 max-w-xl text-white">
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-black tracking-tight leading-[1.12] mb-2 text-white">
              {joinBannerData.headlineLine1}
              <span className="block mt-0.5">
                {joinBannerData.headlineLine2}
                <svg
                  className="inline-block ml-3 h-2 sm:h-2.5 w-20 sm:w-26 text-red-600 fill-current -translate-y-1"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path d="M0,8 Q50,0 100,6 Q50,4 0,8 Z" />
                </svg>
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed mb-4 sm:mb-5 max-w-lg">
              {joinBannerData.subtitle}
            </p>

            <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
              <button
                type="button"
                onMouseEnter={() => setButtonHovered(true)}
                onMouseLeave={() => setButtonHovered(false)}
                onClick={() => onOpenDemo?.('Join FollowOn Today', 'Welcome to the Rangers supporters community!')}
                className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-white hover:bg-slate-100 text-primary font-black text-xs sm:text-sm shadow-md transition-all duration-200 cursor-pointer active:scale-[0.98] shrink-0 font-semibold"
              >
                <UsersAnimatedIcon isHovered={buttonHovered} size={16} className="text-primary " />
                <span>{joinBannerData.ctaText}</span>
                <ArrowRightAnimatedIcon isHovered={buttonHovered} size={16} className="text-primary" />
              </button>

              <div className="hidden sm:block h-5 w-px bg-white/40 shrink-0" />

              <span className="text-xs sm:text-sm font-bold text-white tracking-wide shrink-0 font-semibold">
                {joinBannerData.communityTagline}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
