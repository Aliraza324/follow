import { useState } from 'react'
import { CheckAnimatedIcon, CloseAnimatedIcon } from '../../icons'

export const DemoModal = ({ isOpen, onClose, title, message }) => {
  const [closeHovered, setCloseHovered] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md p-6 bg-navy rounded-2xl border border-blue-500/30 shadow-2xl shadow-blue-950/60 text-white">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/20 text-sky-400 border border-blue-500/30">
              <CheckAnimatedIcon isHovered={true} size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-tight">
                {title || 'FollowOn Preview'}
              </h3>
              <p className="text-xs text-sky-300 font-medium">
                Demonstration Prototype
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            onMouseEnter={() => setCloseHovered(true)}
            onMouseLeave={() => setCloseHovered(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <CloseAnimatedIcon isHovered={closeHovered} size={20} />
          </button>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {message || 'Thank you for exploring FollowOn. This is an interactive frontend demonstration showcasing the future digital home for Rangers FC supporters.'}
        </p>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-primary hover:bg-primary-dark text-white rounded-xl transition-all cursor-pointer shadow-md shadow-blue-700/30"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  )
}

