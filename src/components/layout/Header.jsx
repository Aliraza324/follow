import { useState, useEffect, useRef } from 'react'
import { navigationData } from '../../mockup/navigation'
import { BrandLogo } from '../common/BrandLogo'
import { SmoothLink } from '../common/SmoothLink'
import { UsersAnimatedIcon } from '../../icons'

export const Header = ({ onOpenDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [joinHovered, setJoinHovered] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const headerRef = useRef(null)

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

  useEffect(() => {
    if (!mobileMenuOpen) return
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-xs transition-all duration-200 py-2.5 sm:py-3"
      >
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
                      isActive ? 'text-primary' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-all duration-200 ${
                        isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                      }`}
                    />
                  </SmoothLink>
                )
              })}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenDemo('Log In', 'Sign-in portal for verified Rangers supporters.')}
                className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-primary transition-colors cursor-pointer"
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

            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                aria-label="Toggle Navigation Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-center w-10 h-10"
              >
                {mobileMenuOpen ? (
                  <svg key="close-icon" className="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg key="menu-icon" className="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-xl px-6 py-5">
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

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[60px] sm:top-[68px] z-30 bg-black/40 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
