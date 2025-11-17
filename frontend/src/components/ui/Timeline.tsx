import { ReactNode } from 'react'

interface TimelineItemProps {
  title: string
  company: string
  duration: string
  description: string | ReactNode
  isLast?: boolean
  icon?: ReactNode
}

interface TimelineProps {
  items: Omit<TimelineItemProps, 'isLast'>[]
}

const TimelineItem = ({ title, company, duration, description, isLast = false, icon }: TimelineItemProps) => {
  return (
    <div className="relative flex gap-6 pb-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#007bff] to-gray-300"></div>
      )}

      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#007bff] to-[#0056b3] flex items-center justify-center text-white font-bold shadow-lg border-4 border-white text-lg">
          {icon ? <span>{icon}</span> : <span className="text-sm">●</span>}
        </div>
      </div>

      {/* Content Card */}
      <div className="flex-1 pt-1">
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#007bff]/30 p-6 hover:-translate-y-1">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-[#333] mb-2 group-hover:text-[#007bff] transition-colors">
              {title}
            </h3>
            <div className="flex flex-wrap gap-3 items-center text-sm">
              <span className="text-[#007bff] font-semibold">{company}</span>
              <span className="text-[#666]">•</span>
              <span className="text-[#666]">{duration}</span>
            </div>
          </div>

          {/* Description */}
          <div className="text-[#555] leading-relaxed">
            {typeof description === 'string' ? (
              <p className="text-sm">{description}</p>
            ) : (
              description
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  )
}

export default Timeline

