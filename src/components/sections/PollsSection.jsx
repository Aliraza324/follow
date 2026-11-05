import { pollsData } from '../../mockup/polls'
import { SectionHeading } from '../common/SectionHeading'
import { PollCard } from '../ui/PollCard'

export const PollsSection = () => {
  return (
    <section id="polls" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge={pollsData.badge}
          headline={pollsData.headline}
          description={pollsData.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {pollsData.polls.map((poll) => (
            <PollCard key={poll.id} poll={poll} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs text-slate-400 font-medium">
            {pollsData.notice}
          </p>
        </div>
      </div>
    </section>
  )
}

