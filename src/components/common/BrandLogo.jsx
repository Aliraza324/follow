export const BrandLogo = ({ size = 'default' }) => {
  const isLarge = size === 'large'

  return (
    <div className="flex items-center gap-3 select-none group">
      <div className={`relative flex items-center justify-center font-black tracking-tighter bg-gradient-to-br from-blue-600 to-navy rounded-xl border border-blue-400/30 text-white shadow-lg shadow-blue-900/30 transition-transform duration-300 group-hover:scale-105 ${
        isLarge ? 'w-12 h-12 text-xl' : 'w-9 h-9 text-base'
      }`}>
        <span className="text-white">F</span>
        <span className="text-sky-400 -ml-0.5">O</span>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-sky-400 ring-2 ring-navy-deep animate-pulse" />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-tight text-white uppercase ${
            isLarge ? 'text-2xl' : 'text-lg'
          }`}>
            FOLLOW<span className="text-sky-400">ON</span>
          </span>
          <span className="px-1.5 py-0.5 text-[9px] font-bold tracking-widest text-sky-300 uppercase bg-blue-950/80 border border-blue-500/30 rounded">
            RFC
          </span>
        </div>
        <span className="text-[10px] font-medium tracking-wider text-slate-400 uppercase">
          Supporters Community
        </span>
      </div>
    </div>
  )
}

