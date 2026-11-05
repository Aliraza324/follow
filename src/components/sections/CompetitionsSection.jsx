import { competitionsData } from '../../mockup/competitions'
import { SectionHeading } from '../common/SectionHeading'
import { CompetitionCard } from '../ui/CompetitionCard'
import { Button } from '../common/Button'
import { SparklesAnimatedIcon } from '../../icons'

export const CompetitionsSection = ({ onOpenDemo }) => {
  return (
    <section id="competitions" className="py-24 bg-navy-deep relative overflow-hidden">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={competitionsData.badge}
          headline={competitionsData.headline}
          description={competitionsData.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {competitionsData.items.map((item) => (
            <CompetitionCard
              key={item.id}
              item={item}
              onOpenDemo={onOpenDemo}
            />
          ))}
        </div>

        <div className="text-center flex flex-col items-center gap-4">
          <Button
            variant="primary"
            size="md"
            icon={SparklesAnimatedIcon}
            onClick={() => onOpenDemo('Competitions Hub', 'Explore upcoming matchday draws, signed kit sweepstakes, and VIP experience giveaways.')}
          >
            {competitionsData.cta}
          </Button>
          <p className="text-xs text-slate-400 font-medium">
            {competitionsData.disclaimer}
          </p>
        </div>
      </div>
    </section>
  )
}

