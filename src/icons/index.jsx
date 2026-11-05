import {
  HeartIcon,
  MessageSquareIcon,
  UsersIcon,
  ShieldCheckIcon,
  FlameIcon,
  SparklesIcon,
  ArrowRightIcon,
  ChartColumnIncreasingIcon,
  CheckCheckIcon,
  CircleCheckIcon,
  UpvoteIcon,
  CompassIcon,
  ZapIcon,
  RadioIcon,
  SlidersHorizontalIcon,
  MenuIcon,
  XIcon
} from 'lucide-animated'
import { AnimatedIconWrapper } from './AnimatedIconWrapper'

export const HeartAnimatedIcon = ({ isHovered, size = 22, className = '' }) => (
  <AnimatedIconWrapper icon={HeartIcon} isHovered={isHovered} size={size} className={className} />
)

export const MessageAnimatedIcon = ({ isHovered, size = 22, className = '' }) => (
  <AnimatedIconWrapper icon={MessageSquareIcon} isHovered={isHovered} size={size} className={className} />
)

export const UsersAnimatedIcon = ({ isHovered, size = 22, className = '' }) => (
  <AnimatedIconWrapper icon={UsersIcon} isHovered={isHovered} size={size} className={className} />
)

export const ShieldAnimatedIcon = ({ isHovered, size = 22, className = '' }) => (
  <AnimatedIconWrapper icon={ShieldCheckIcon} isHovered={isHovered} size={size} className={className} />
)

export const FlameAnimatedIcon = ({ isHovered, size = 22, className = '' }) => (
  <AnimatedIconWrapper icon={FlameIcon} isHovered={isHovered} size={size} className={className} />
)

export const SparklesAnimatedIcon = ({ isHovered, size = 22, className = '' }) => (
  <AnimatedIconWrapper icon={SparklesIcon} isHovered={isHovered} size={size} className={className} />
)

export const ArrowRightAnimatedIcon = ({ isHovered, size = 20, className = '' }) => (
  <AnimatedIconWrapper icon={ArrowRightIcon} isHovered={isHovered} size={size} className={className} />
)

export const ChartAnimatedIcon = ({ isHovered, size = 22, className = '' }) => (
  <AnimatedIconWrapper icon={ChartColumnIncreasingIcon} isHovered={isHovered} size={size} className={className} />
)

export const CheckAnimatedIcon = ({ isHovered, size = 20, className = '' }) => (
  <AnimatedIconWrapper icon={CheckCheckIcon} isHovered={isHovered} size={size} className={className} />
)

export const CircleCheckAnimatedIcon = ({ isHovered, size = 20, className = '' }) => (
  <AnimatedIconWrapper icon={CircleCheckIcon} isHovered={isHovered} size={size} className={className} />
)

export const UpvoteAnimatedIcon = ({ isHovered, size = 20, className = '' }) => (
  <AnimatedIconWrapper icon={UpvoteIcon} isHovered={isHovered} size={size} className={className} />
)

export const CompassAnimatedIcon = ({ isHovered, size = 22, className = '' }) => (
  <AnimatedIconWrapper icon={CompassIcon} isHovered={isHovered} size={size} className={className} />
)

export const ZapAnimatedIcon = ({ isHovered, size = 22, className = '' }) => (
  <AnimatedIconWrapper icon={ZapIcon} isHovered={isHovered} size={size} className={className} />
)

export const RadioAnimatedIcon = ({ isHovered, size = 22, className = '' }) => (
  <AnimatedIconWrapper icon={RadioIcon} isHovered={isHovered} size={size} className={className} />
)

export const SlidersAnimatedIcon = ({ isHovered, size = 22, className = '' }) => (
  <AnimatedIconWrapper icon={SlidersHorizontalIcon} isHovered={isHovered} size={size} className={className} />
)

export const MenuAnimatedIcon = ({ isHovered, size = 24, className = '' }) => (
  <AnimatedIconWrapper icon={MenuIcon} isHovered={isHovered} size={size} className={className} />
)

export const CloseAnimatedIcon = ({ isHovered, size = 24, className = '' }) => (
  <AnimatedIconWrapper icon={XIcon} isHovered={isHovered} size={size} className={className} />
)

export { TrophyAnimatedIcon } from './TrophyAnimatedIcon'

