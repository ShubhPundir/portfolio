import Image from 'next/image'

interface FreelanceProject {
  id: number
  title: string
  clientName: string
  clientPrefix: string
  blurClientName: boolean
  location: string
  date: string
  techStack: string[]
  description: string
  impact: string
  flag: string
  countryCode: string
}

// Map location names to ISO country codes
const getCountryCode = (location: string): string => {
  const countryMap: { [key: string]: string } = {
    'Morocco': 'ma',
    'Ethiopia': 'et',
    'UK': 'gb',
    'UAE': 'ae',
    'India': 'in',
    'Denmark': 'dk'
  }
  return countryMap[location] || 'us'
}

interface FreelanceTimelineProps {
  projects: FreelanceProject[]
}

// Component for blurred client name
const BlurredClientName = ({ prefix }: { prefix: string }) => {
  return (
    <span className="inline-flex items-center">
      <span className="text-[#007bff] font-semibold">{prefix}*</span>
      <span 
        className="ml-1 text-[#007bff] font-semibold blur-[3px] select-none"
        style={{ 
          textShadow: '0 0 8px rgba(0, 123, 255, 0.5)',
          filter: 'blur(3px)'
        }}
      >
        ********
      </span>
    </span>
  )
}

const TimelineItem = ({ project, isLast }: { project: FreelanceProject; isLast: boolean }) => {
  return (
    <div className="relative flex gap-6 pb-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[140px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#007bff] to-gray-300"></div>
      )}

      {/* Date on Left */}
      <div className="w-32 flex-shrink-0 pt-1">
        <div className="text-right">
          <div className="text-sm font-semibold text-[#007bff]">{project.date}</div>
        </div>
      </div>

      {/* Timeline Dot with Flag */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#007bff] to-[#0056b3] flex items-center justify-center text-white font-bold shadow-lg border-4 border-white text-2xl">
          {project.flag}
        </div>
      </div>

      {/* Content Card */}
      <div className="flex-1 pt-1">
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#007bff]/30 p-6 hover:-translate-y-1">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-[#333] group-hover:text-[#007bff] transition-colors flex-1">
                {project.title}
              </h3>
              <div className="flex-shrink-0 ml-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-md border border-gray-200 overflow-hidden">
                  <Image
                    src={`https://flagcdn.com/w40/${project.countryCode || getCountryCode(project.location)}.png`}
                    alt={project.location}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center text-sm">
              <span className="text-[#666]">Client:</span>
              {project.blurClientName ? (
                <BlurredClientName prefix={project.clientPrefix || project.clientName} />
              ) : (
                <span className="text-[#007bff] font-semibold">
                  {project.clientName}
                </span>
              )}
              <span className="text-[#666]">•</span>
              <span className="inline-flex items-center gap-1.5 text-[#666]">
                <span className="text-lg">{project.flag}</span>
                <span>{project.location}</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-[#555] leading-relaxed mb-4 text-sm">
            {project.description}
          </p>

          {/* Impact */}
          {project.impact && (
            <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200/50">
              <p className="text-xs font-semibold text-green-700 mb-1">Impact:</p>
              <p className="text-sm text-[#555]">{project.impact}</p>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <p className="text-xs font-semibold text-[#666] mb-2">Tech Stack:</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-1 rounded-md bg-gradient-to-r from-[#007bff]/10 to-[#0056b3]/10 text-xs text-[#007bff] font-medium border border-[#007bff]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FreelanceTimeline = ({ projects }: FreelanceTimelineProps) => {
  return (
    <div className="relative">
      {projects.map((project, index) => (
        <TimelineItem
          key={project.id}
          project={project}
          isLast={index === projects.length - 1}
        />
      ))}
    </div>
  )
}

export default FreelanceTimeline
export type { FreelanceProject }

