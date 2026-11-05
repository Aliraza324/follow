export const SectionHeading = ({
  badge,
  headline,
  description,
  align = 'center',
  maxWidth = 'max-w-3xl'
}) => {
  const isCentered = align === 'center'

  return (
    <div className={`mb-12 md:mb-16 ${isCentered ? 'text-center mx-auto' : 'text-left'} ${maxWidth}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 bg-blue-950/80 border border-blue-500/30 text-sky-400 ${
          isCentered ? 'mx-auto' : ''
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
          <span>{badge}</span>
        </div>
      )}

      {headline && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-tight mb-4">
          {headline}
        </h2>
      )}

      {description && (
        <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

