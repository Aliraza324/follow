import { footerData } from '../../mockup/footer'
import { BrandLogo } from '../common/BrandLogo'
import { SmoothLink } from '../common/SmoothLink'

export const Footer = ({ onOpenDemo }) => {
  return (
    <footer className="bg-navy-deep border-t border-blue-500/20 pt-16 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <SmoothLink targetId="hero">
                <BrandLogo size="large" />
              </SmoothLink>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              {footerData.brand.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {footerData.socials.map((social, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => onOpenDemo(social.label, `Official ${social.label} community channel link.`)}
                  className="px-3 py-1.5 rounded-lg bg-navy border border-blue-500/20 hover:border-sky-400/50 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  {social.label}
                </button>
              ))}
            </div>
          </div>

          {footerData.columns.map((column, i) => (
            <div key={i} className="flex flex-col">
              <h4 className="text-xs font-black uppercase tracking-wider text-sky-400 mb-4">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <SmoothLink
                      targetId={link.href}
                      className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </SmoothLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-blue-500/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
          <p>{footerData.disclaimer}</p>
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

