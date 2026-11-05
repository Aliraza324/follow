export const SmoothLink = ({
  targetId,
  children,
  className = '',
  onClick,
  active = false
}) => {
  const handleClick = (e) => {
    e.preventDefault()
    if (onClick) onClick(e)

    const cleanId = targetId?.replace(/^#/, '')
    if (!cleanId) return

    const targetElement = document.getElementById(cleanId)
    if (targetElement) {
      const headerOffset = 84
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-current={active ? 'page' : undefined}
      className={`cursor-pointer transition-all duration-200 text-left focus:outline-none ${className}`}
    >
      {children}
    </button>
  )
}

