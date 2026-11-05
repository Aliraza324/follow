import { useState } from 'react'
import { Header } from '../components/layout/Header'
import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import { CommunityFeed } from '../components/sections/CommunityFeed'
import { PollsSection } from '../components/sections/PollsSection'
import { PlayerRatings } from '../components/sections/PlayerRatings'
import { QuizzesSection } from '../components/sections/QuizzesSection'
import { CompetitionsSection } from '../components/sections/CompetitionsSection'
import { LeaderboardSection } from '../components/sections/LeaderboardSection'
import { Footer } from '../components/layout/Footer'
import { DemoModal } from '../components/common/DemoModal'
import { AppLoader } from '../components/common/AppLoader'

export const Home = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    message: ''
  })

  const handleOpenDemo = (title, message) => {
    setModalState({
      isOpen: true,
      title,
      message
    })
  }

  const handleCloseDemo = () => {
    setModalState({
      isOpen: false,
      title: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-navy-deep text-white flex flex-col selection:bg-blue-600 selection:text-white overflow-x-hidden w-full">
      <AppLoader />
      <Header onOpenDemo={handleOpenDemo} />

      <main className="flex-1">
        <HeroSection onOpenDemo={handleOpenDemo} />
        <AboutSection />
        <CommunityFeed onOpenDemo={handleOpenDemo} />
        <PollsSection onOpenDemo={handleOpenDemo} />
        <PlayerRatings onOpenDemo={handleOpenDemo} />
        <QuizzesSection onOpenDemo={handleOpenDemo} />
        <CompetitionsSection onOpenDemo={handleOpenDemo} />
        <LeaderboardSection onOpenDemo={handleOpenDemo} />

      </main>

      <Footer onOpenDemo={handleOpenDemo} />

      <DemoModal
        isOpen={modalState.isOpen}
        onClose={handleCloseDemo}
        title={modalState.title}
        message={modalState.message}
      />
    </div>
  )
}

