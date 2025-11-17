import { TAG_COLORS, TagType } from './types'

interface TagBadgeProps {
  tag: TagType
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const TagBadge = ({ tag, size = 'md', className = '' }: TagBadgeProps) => {
  const sizeClasses = {
    sm: 'py-1 px-2 text-xs',
    md: 'py-[5px] px-[10px] text-sm',
    lg: 'py-2 px-4 text-base',
  }

  return (
    <span
      className={`${sizeClasses[size]} rounded-md font-bold text-white inline-block ${className}`}
      style={{ backgroundColor: TAG_COLORS[tag] || "#000000" }}
    >
      {tag}
    </span>
  )
}

export default TagBadge

