import { postsData } from '../../mockup/posts'
import { SectionHeading } from '../common/SectionHeading'
import { PostCard } from '../ui/PostCard'
import { Button } from '../common/Button'
import { ArrowRightAnimatedIcon } from '../../icons'

export const CommunityFeed = ({ onOpenDemo }) => {
  return (
    <section id="community" className="py-24 bg-navy-deep relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            badge={postsData.badge}
            headline={postsData.headline}
            description={postsData.description}
            align="left"
            maxWidth="max-w-2xl"
          />

          <div className="hidden md:block mb-12">
            <Button
              variant="outline"
              size="md"
              icon={ArrowRightAnimatedIcon}
              onClick={() => onOpenDemo('Full Community Feed', 'The full live feed updates in real-time during matchdays with verified supporter threads.')}
            >
              {postsData.cta}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {postsData.posts.map((post) => (
            <PostCard key={post.id} post={post} onOpenDemo={onOpenDemo} />
          ))}
        </div>

        <div className="flex justify-center md:hidden">
          <Button
            variant="outline"
            size="md"
            icon={ArrowRightAnimatedIcon}
            onClick={() => onOpenDemo('Full Community Feed', 'The full live feed updates in real-time during matchdays with verified supporter threads.')}
          >
            {postsData.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}

