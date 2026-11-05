import logoImg from '../../assets/logo.png'

export const BrandLogo = ({ size = 'default', className = '' }) => {
  const isLarge = size === 'large'

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      <img
        src={logoImg}
        alt="FollowOn"
        className={`object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm ${
          isLarge ? 'h-14 sm:h-16 w-auto' : 'h-11 sm:h-13 md:h-14 w-auto'
        }`}
      />
    </div>
  )
}
