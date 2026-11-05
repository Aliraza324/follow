import { footerData } from '../../mockup/footer'
import { SmoothLink } from '../common/SmoothLink'
import footerBg from '../../assets/Gemini_Generated_Image_k0e1dlk0e1dlk0e1.jpg'
import logoImg from '../../assets/logo.png'

const SocialIcon = ({ id }) => {
  if (id === 'facebook') {
    return (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    )
  }
  if (id === 'instagram') {
    return (
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  if (id === 'youtube') {
    return (
      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  }
  return (
    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const MailIcon = () => (
  <svg className="w-4 h-4 shrink-0 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const DocIcon = () => (
  <svg className="w-4 h-4 shrink-0 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />
  </svg>
)

const ScaleIcon = () => (
  <svg className="w-4 h-4 shrink-0 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </svg>
)

export const Footer = ({ onOpenDemo }) => {
  return (
    <footer className="relative bg-[#00183F] text-white pt-14 pb-8 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={footerBg}
          alt="FollowOn Stadium Atmosphere"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#001D4A]/50 backdrop-blur-[0.5px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_auto_1fr_auto_1fr_auto_1.1fr_auto_1.1fr] gap-6 lg:gap-8 items-start">
          <div className="flex flex-col">
            <SmoothLink targetId="hero" className="inline-block group mb-4">
              <img
                src={logoImg}
                alt={footerData.brand.name}
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              />
            </SmoothLink>
            <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed mb-5 max-w-xs">
              {footerData.brand.description}
            </p>
            <div className="flex items-center gap-2">
              {footerData.socials.map((social) => (
                <button
                  key={social.id}
                  type="button"
                  onClick={() => onOpenDemo(social.label, `Official FollowOn ${social.label} community channel.`)}
                  className="w-8 h-8 rounded-lg border border-white/20 bg-white/5 hover:bg-white/15 hover:border-white/40 flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label={social.label}
                >
                  <SocialIcon id={social.id} />
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block w-px bg-white/20 h-32 self-center" />

          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-white mb-4">
              {footerData.exploreColumn.title}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerData.exploreColumn.links.map((link) => (
                <li key={link.label}>
                  <SmoothLink
                    targetId={link.targetId}
                    className="text-xs sm:text-sm text-slate-200/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </SmoothLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block w-px bg-white/20 h-32 self-center" />

          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-white mb-4">
              {footerData.communityColumn.title}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerData.communityColumn.links.map((link) => (
                <li key={link.label}>
                  <SmoothLink
                    targetId={link.targetId}
                    className="text-xs sm:text-sm text-slate-200/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </SmoothLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block w-px bg-white/20 h-32 self-center" />

          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-white mb-4">
              {footerData.touchColumn.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {footerData.touchColumn.items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onOpenDemo(item.modalTitle, item.modalDesc)}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200/80 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    <MailIcon />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block w-px bg-white/20 h-32 self-center" />

          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-white mb-4">
              {footerData.legalColumn.title}
            </h4>
            <ul className="flex flex-col gap-3">
              {footerData.legalColumn.items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onOpenDemo(item.modalTitle, item.modalDesc)}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200/80 hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.type === 'doc' ? <DocIcon /> : <ScaleIcon />}
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-white/20 mt-10 mb-6" />

        <div className="text-xs text-slate-300 font-normal">
          {footerData.copyright}
        </div>
      </div>
    </footer>
  )
}
