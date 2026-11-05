import { useState, useEffect } from 'react'
import { navigationData } from '../../mockup/navigation'
import { BrandLogo } from '../common/BrandLogo'
import { SmoothLink } from '../common/SmoothLink'
import { UsersAnimatedIcon, MenuAnimatedIcon, CloseAnimatedIcon } from '../../icons'

export const Header = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuButtonHovered, setMenuButtonHovered] = useState(false)
  const [joinHovered, setJoinHovered] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navigationData.links.map((l) => l.id)
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-xs transition-all duration-200 py-2.5 sm:py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center shrink-0">
            <SmoothLink targetId="hero" className="flex items-center">
              <BrandLogo />
            </SmoothLink>
          </div>

          <nav className="hidden md:flex items-center gap-7 lg:gap-9 absolute left-1/2 -translate-x-1/2">
            {navigationData.links.map((link) => {
              const isActive = activeSection === link.id
              return (
                <SmoothLink
                  key={link.id}
                  targetId={link.id}
                  active={isActive}
                  className={`group relative py-2 text-sm tracking-normal font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-primary font-bold' : 'text-slate-700 hover:text-primary'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary rounded-full transition-all duration-200 ${
                      isActive
                        ? 'w-full opacity-100'
                        : 'w-0 group-hover:w-full opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </SmoothLink>
              )
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenDemo('Log In', 'Sign-in portal for verified Rangers supporters.')}
              className="px-5 py-2 rounded-xl text-sm font-bold text-primary bg-white border border-blue-600 hover:bg-blue-50/60 transition-all duration-200 cursor-pointer shadow-xs active:scale-[0.98]"
            >
              {navigationData.actions.login}
            </button>

            <button
              type="button"
              onMouseEnter={() => setJoinHovered(true)}
              onMouseLeave={() => setJoinHovered(false)}
              onClick={() => onOpenDemo('Join FollowOn Community', 'Welcome to the supporters community preview.')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-dark transition-all duration-200 cursor-pointer shadow-md shadow-blue-600/25 active:scale-[0.98]"
            >
              <UsersAnimatedIcon isHovered={joinHovered} size={18} className="text-white" />
              <span>{navigationData.actions.join}</span>
            </button>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              onMouseEnter={() => setMenuButtonHovered(true)}
              onMouseLeave={() => setMenuButtonHovered(false)}
              className="p-2 rounded-xl text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <CloseAnimatedIcon isHovered={menuButtonHovered} size={22} className="text-slate-700" />
              ) : (
                <MenuAnimatedIcon isHovered={menuButtonHovered} size={22} className="text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 shadow-xl px-6 py-5">
          <div className="flex flex-col gap-2">
            {navigationData.links.map((link) => {
              const isActive = activeSection === link.id
              return (
                <SmoothLink
                  key={link.id}
                  targetId={link.id}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg text-sm font-bold tracking-wide transition-colors ${
                    isActive
                      ? 'text-primary bg-blue-50/70 border-l-3 border-primary'
                      : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </SmoothLink>
              )
            })}

            <div className="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenDemo('Log In', 'Sign-in portal for verified Rangers supporters.')
                }}
                className="w-full py-2.5 rounded-xl text-sm font-bold text-primary bg-white border border-blue-600 hover:bg-blue-50/60 transition-colors cursor-pointer text-center"
              >
                {navigationData.actions.login}
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenDemo('Join FollowOn Community', 'Welcome to the supporters community preview.')
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-dark transition-colors cursor-pointer text-center shadow-md shadow-blue-600/20"
              >
                <UsersAnimatedIcon isHovered={true} size={18} className="text-white" />
                <span>{navigationData.actions.join}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
