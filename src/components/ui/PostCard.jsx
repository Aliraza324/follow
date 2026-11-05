import { useState } from 'react'
import { HeartAnimatedIcon, MessageAnimatedIcon, ArrowRightAnimatedIcon } from '../../icons'

export const PostCard = ({ post, onOpenDemo }) => {
  const [cardHovered, setCardHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.initialLikes)

  const handleLikeToggle = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1)
      setIsLiked(false)
    } else {
      setLikeCount((prev) => prev + 1)
      setIsLiked(true)
    }
  }

  return (
    <div
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      className="p-5 sm:p-6 rounded-2xl bg-navy/90 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={post.avatar}
              alt={post.author}
              className="w-11 h-11 rounded-full object-cover border-2 border-blue-500/40"
            />
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  {post.author}
                </h4>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-950 text-sky-400 border border-blue-500/20">
                  {post.badge}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>{post.handle}</span>
                <span>•</span>
                <span>{post.time}</span>
              </div>
            </div>
          </div>

          <span className="text-xs font-semibold text-sky-400/80">
            {post.tag}
          </span>
        </div>

        <p className="text-sm text-slate-200 leading-relaxed mb-4">
          {post.content}
        </p>

        {post.image && (
          <div className="mb-4 rounded-xl overflow-hidden border border-blue-500/20 max-h-56">
            <img
              src={post.image}
              alt="Matchday Discussion"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-blue-500/15 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={handleLikeToggle}
            className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
              isLiked ? 'text-rose-500 font-bold' : 'hover:text-rose-400'
            }`}
          >
            <HeartAnimatedIcon isHovered={cardHovered || isLiked} size={18} />
            <span>{likeCount}</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenDemo('Discussion Thread', `Join ${post.author}'s thread with 29 active replies.`)}
            className="flex items-center gap-1.5 hover:text-sky-400 transition-colors cursor-pointer"
          >
            <MessageAnimatedIcon isHovered={cardHovered} size={18} />
            <span>{post.comments} Replies</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => onOpenDemo('Supporters Reaction', 'Join the live post-match discussion on FollowOn.')}
          className="font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
        >
          <span>Discuss</span>
          <ArrowRightAnimatedIcon isHovered={cardHovered} size={14} />
        </button>
      </div>
    </div>
  )
}

