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
  highlights?: string[]
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
  duration?: string
  techStack: string[]
  description: string
  impact: string
  flag: string
  countryCode: string
  highlights?: string[]
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
    countryCode,
    highlights
  } = props

  // Determine variant based on props
  const isFreelance = !!clientName

  // For freelance cards the sidebar shows date; duration is shown inside the card
  const freelanceDuration = isFreelance ? duration : undefined

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
                  {freelanceDuration && (
                    <>
                      <span className="text-[#666]">•</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 border border-blue-100 rounded-full text-xs font-semibold text-blue-700">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {freelanceDuration}
                      </span>
                    </>
                  )}
                </>
              ) : (
                // Standard Subheader
                link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#007bff] font-semibold hover:text-[#0056b3] hover:underline transition-colors group/link"
                  >
                    <span>{company}</span>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
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

          {/* Highlights / Metrics */}
          {highlights && highlights.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-lg flex items-center gap-2 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                    <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Impact Section */}
          {impact && (
            <div className="mb-6 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 shadow-inner">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="text-xs font-bold text-gray-900 uppercase tracking-widest">Business Impact</p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-medium">{impact}</p>
            </div>
          )}

          {/* Tech Stack */}
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 text-[10px] text-gray-600 font-bold uppercase tracking-tighter border border-gray-200 hover:border-blue-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
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
