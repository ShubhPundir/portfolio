import { TagType, TAGS, TAG_COLORS } from './types'
import TagBadge from './TagBadge'

interface TagFilterProps {
  selectedTags: TagType[]
  onToggleTag: (tag: TagType) => void
}

const TagFilter = ({ selectedTags, onToggleTag }: TagFilterProps) => {
  const allTags = Object.values(TAGS)

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-[#333] mb-4">Filter by Tags:</h3>
      <div className="flex flex-wrap gap-3">
        {allTags.map((tag) => {
          const isSelected = selectedTags.includes(tag)
          return (
            <label
              key={tag}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                value={tag}
                checked={isSelected}
                onChange={() => onToggleTag(tag)}
                className="w-4 h-4 cursor-pointer accent-[#007bff]"
              />
              <div className={`transition-all duration-200 ${isSelected ? 'opacity-100 scale-105' : 'opacity-70 group-hover:opacity-100'}`}>
                <TagBadge tag={tag} size="md" />
              </div>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default TagFilter

