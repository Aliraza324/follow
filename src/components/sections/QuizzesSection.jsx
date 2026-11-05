import { quizzesData } from '../../mockup/quizzes'
import { SectionHeading } from '../common/SectionHeading'
import { TriviaCard } from '../ui/TriviaCard'
import { PredictionCard } from '../ui/PredictionCard'

export const QuizzesSection = () => {
  return (
    <section id="quizzes" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={quizzesData.badge}
          headline={quizzesData.headline}
          description={quizzesData.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TriviaCard />
          <PredictionCard />
        </div>
      </div>
    </section>
  )
}

