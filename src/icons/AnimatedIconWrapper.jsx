import { useRef, useEffect } from 'react'

export const AnimatedIconWrapper = ({
  icon: IconComponent,
  isHovered = false,
  size = 24,
  className = '',
  ...rest
}) => {
  const iconRef = useRef(null)

  useEffect(() => {
    if (!iconRef.current) return
    if (isHovered) {
      iconRef.current.startAnimation?.()
    } else {
      iconRef.current.stopAnimation?.()
    }
  }, [isHovered])

  return (
    <span className="inline-flex items-center justify-center pointer-events-none">
      <IconComponent
        ref={iconRef}
        size={size}
        animateOnHover={false}
        className={className}
        {...rest}
      />
    </span>
  )
}

