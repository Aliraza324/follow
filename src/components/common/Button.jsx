import { useState } from 'react'

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  icon: IconComponent,
  disabled = false,
  type = 'button'
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold gap-1.5',
    md: 'px-5 py-2.5 text-sm font-bold gap-2',
    lg: 'px-7 py-3.5 text-base font-extrabold gap-2.5'
  }[size] || 'px-5 py-2.5 text-sm font-bold gap-2'

  const variantStyles = {
    primary: 'bg-primary hover:bg-primary-dark text-white border border-blue-400/40 shadow-lg shadow-blue-600/25 active:scale-[0.98]',
    secondary: 'bg-navy/90 hover:bg-navy border border-blue-500/30 text-white hover:border-blue-400 shadow-md shadow-navy-deep/50 active:scale-[0.98]',
    accent: 'bg-accent hover:bg-blue-400 text-navy-deep font-black shadow-lg shadow-sky-500/20 active:scale-[0.98]',
    outline: 'bg-transparent border border-blue-400/50 hover:border-sky-400 text-white hover:bg-blue-950/40 active:scale-[0.98]',
    ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5'
  }[variant] || 'bg-primary text-white'

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex items-center justify-center rounded-xl uppercase tracking-wider transition-all duration-300 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${sizeStyles} ${variantStyles} ${className}`}
    >
      <span>{children}</span>
      {IconComponent && (
        <span className="transition-transform duration-300">
          <IconComponent isHovered={isHovered} size={size === 'sm' ? 16 : 18} />
        </span>
      )}
    </button>
  )
}

