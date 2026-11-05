import { useState, useEffect } from 'react'
import { navigationData } from '../../mockup/navigation'
import { BrandLogo } from '../common/BrandLogo'
import { SmoothLink } from '../common/SmoothLink'
import { Button } from '../common/Button'
import { MenuAnimatedIcon, CloseAnimatedIcon, ArrowRightAnimatedIcon } from '../../icons'

export const Header = ({ onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [menuButtonHovered, setMenuButtonHovered] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sectionIds = navigationData.links.map(l => l.id)
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-deep/95 backdrop-blur-md border-b border-blue-500/20 shadow-xl shadow-navy-deep/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <SmoothLink targetId="hero">
            <BrandLogo />
          </SmoothLink>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationData.links.map((link) => {
              const isActive = activeSection === link.id
              return (
                <SmoothLink
                  key={link.id}
                  targetId={link.id}
                  active={isActive}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold tracking-wide uppercase transition-colors ${
                    isActive
                      ? 'text-sky-400 bg-blue-950/60 border border-blue-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </SmoothLink>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onOpenDemo('Sign In', 'Sign-in portal for verified Rangers supporters. Access community polls, rankings, and matchday rooms.')}
            >
              {navigationData.actions.login}
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={ArrowRightAnimatedIcon}
              onClick={() => onOpenDemo('Join FollowOn Community', 'Welcome to the supporters community preview. Complete access will launch ahead of the new season.')}
            >
              {navigationData.actions.join}
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              onMouseEnter={() => setMenuButtonHovered(true)}
              onMouseLeave={() => setMenuButtonHovered(false)}
              className="p-2 rounded-xl text-slate-200 bg-navy border border-blue-500/30 hover:border-blue-400 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <CloseAnimatedIcon isHovered={menuButtonHovered} size={22} />
              ) : (
                <MenuAnimatedIcon isHovered={menuButtonHovered} size={22} />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-deep/98 backdrop-blur-xl border-b border-blue-500/30 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navigationData.links.map((link) => (
              <SmoothLink
                key={link.id}
                targetId={link.id}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg text-sm font-bold uppercase tracking-wider ${
                  activeSection === link.id
                    ? 'text-sky-400 bg-blue-950/80 border border-blue-500/30'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </SmoothLink>
            ))}

            <div className="pt-4 mt-2 border-t border-blue-500/20 flex flex-col gap-2.5">
              <Button
                variant="secondary"
                size="md"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenDemo('Sign In', 'Sign-in portal for verified Rangers supporters.')
                }}
              >
                {navigationData.actions.login}
              </Button>
              <Button
                variant="primary"
                size="md"
                className="w-full"
                icon={ArrowRightAnimatedIcon}
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenDemo('Join FollowOn Community', 'Welcome to the supporters community preview.')
                }}
              >
                {navigationData.actions.join}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

