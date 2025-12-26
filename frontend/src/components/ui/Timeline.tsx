import { ReactNode } from 'react'
import Image from 'next/image'

// Types
export interface TimelineItemProps {
  title: string
  description: string | ReactNode
  isLast?: boolean

  // Work Experience Specific
  company?: string
  duration?: string
  icon?: ReactNode
  link?: string

  // Freelance Specific
  id?: number
  clientName?: string
  clientPrefix?: string
  blurClientName?: boolean
  location?: string
  date?: string
  techStack?: string[]
  impact?: string
  flag?: string
  countryCode?: string
}

// For backward compatibility and specific type usage in pages
export interface FreelanceProject {
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

interface TimelineProps {
  items: (TimelineItemProps | FreelanceProject)[]
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

const TimelineItem = (props: TimelineItemProps) => {
  const {
    title,
    description,
    isLast = false,
    company,
    duration,
    icon,
    link,
    clientName,
    clientPrefix,
    blurClientName,
    location,
    date,
    techStack,
    impact,
    flag,
    countryCode
  } = props

  // Determine variant based on props
  const isFreelance = !!clientName

  return (
    <div className="relative flex flex-col md:flex-row gap-6 pb-8">
      {/* Timeline Line - Desktop Only */}
      {!isLast && (
        <div className="hidden md:block absolute left-[140px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#007bff] to-gray-300"></div>
      )}

      {/* Timeline Line - Mobile Only */}
      {!isLast && (
        <div className="md:hidden absolute left-[23px] top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#007bff] to-gray-300"></div>
      )}

      {/* Date - Desktop */}
      <div className="hidden md:block w-32 flex-shrink-0 pt-1">
        <div className="text-right">
          <div className="text-sm font-semibold text-[#007bff]">{duration || date}</div>
        </div>
      </div>

      {/* Timeline Dot & Mobile Header */}
      <div className="flex items-center gap-4 md:block relative z-10 flex-shrink-0">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-[#007bff] to-[#0056b3] flex items-center justify-center text-white font-bold shadow-lg border-4 border-white ${isFreelance ? 'text-2xl' : 'text-lg'}`}>
          {flag ? flag : (icon ? <span>{icon}</span> : <span className="text-sm">●</span>)}
        </div>

        {/* Date - Mobile */}
        <div className="md:hidden">
          <div className="text-sm font-semibold text-[#007bff]">{duration || date}</div>
        </div>
      </div>

      {/* Content Card */}
      <div className="flex-1 pt-1 md:pt-1 pl-4 md:pl-0 border-l-2 border-transparent md:border-none">
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#007bff]/30 p-6 hover:-translate-y-1">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className={`text-xl font-bold text-[#333] ${!isFreelance ? 'mb-2' : ''} group-hover:text-[#007bff] transition-colors flex-1`}>
                {title}
              </h3>

              {/* Freelance Country Flag Image */}
              {isFreelance && (
                <div className="flex-shrink-0 ml-4">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-md border border-gray-200 overflow-hidden">
                    <Image
                      src={`https://flagcdn.com/w40/${countryCode || getCountryCode(location || '')}.png`}
                      alt={location || 'Country flag'}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-3 items-center text-sm">
              {isFreelance ? (
                // Freelance Subheader
                <>
                  <span className="text-[#666]">Client:</span>
                  {blurClientName ? (
                    <BlurredClientName prefix={clientPrefix || clientName || ''} />
                  ) : (
                    <span className="text-[#007bff] font-semibold">
                      {clientName}
                    </span>
                  )}
                  <span className="text-[#666]">•</span>
                  <span className="inline-flex items-center gap-1.5 text-[#666]">
                    <span className="text-lg">{flag}</span>
                    <span>{location}</span>
                  </span>
                </>
              ) : (
                // Standard Subheader
                link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007bff] font-semibold hover:text-[#0056b3] hover:underline transition-colors"
                  >
                    {company}
                  </a>
                ) : (
                  <span className="text-[#007bff] font-semibold">{company}</span>
                )
              )}
            </div>
          </div>

          {/* Description */}
          <div className="text-[#555] leading-relaxed mb-4">
            {typeof description === 'string' ? (
              <p className="text-sm">{description}</p>
            ) : (
              description
            )}
          </div>

          {/* Freelance Specific: Impact */}
          {impact && (
            <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200/50">
              <p className="text-xs font-semibold text-green-700 mb-1">Impact:</p>
              <p className="text-sm text-[#555]">{impact}</p>
            </div>
          )}

          {/* Freelance Specific: Tech Stack */}
          {techStack && techStack.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-[#666] mb-2">Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-1 rounded-md bg-gradient-to-r from-[#007bff]/10 to-[#0056b3]/10 text-xs text-[#007bff] font-medium border border-[#007bff]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
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
          key={item.id || index}
          {...item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  )
}

export default Timeline
