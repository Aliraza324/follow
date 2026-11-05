import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { loaderData } from '../../mockup/loader'
import logoImg from '../../assets/logo.png'

export const AppLoader = ({ onComplete }) => {
  const [count, setCount] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsFinished(true)
            if (onComplete) onComplete()
          }, 200)
          return 100
        }
        const step = prev < 70 ? Math.floor(Math.random() * 3) + 1 : Math.floor(Math.random() * 4) + 2
        return Math.min(prev + step, 100)
      })
    }, 28)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#001433] text-white select-none pointer-events-auto"
        >
          <div className="flex flex-col items-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8 sm:mb-10"
            >
              <img
                src={logoImg}
                alt={loaderData.title}
                className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-xl"
              />
            </motion.div>

            <div className="flex items-baseline justify-center">
              <span className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white tabular-nums leading-none">
                {count}
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-500 ml-1 leading-none">
                %
              </span>
            </div>

            <div className="w-52 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mt-6">
              <div
                className="h-full bg-blue-500 transition-all duration-75 ease-out rounded-full"
                style={{ width: `${count}%` }}
              />
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase">
                {loaderData.label}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
