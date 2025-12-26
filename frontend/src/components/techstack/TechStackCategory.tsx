'use client'

import SectionCard from '../ui/SectionCard'
import Image from 'next/image'

interface TechItem {
  name: string
  logo: string
}

interface TechStackCategoryProps {
  title: string
  icon: string
  items: TechItem[]
  variant?: 'default' | 'highlighted'
}

const TechStackCategory = ({ title, icon, items, variant = 'default' }: TechStackCategoryProps) => {
  const defaultLogo = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-plain.svg'

  return (
    <SectionCard
      title={title}
      icon={<span className="text-2xl">{icon}</span>}
      variant={variant}
    >
      <div className="flex flex-wrap gap-4 mt-4 items-center justify-center md:justify-start">
        {items.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center gap-2 p-3 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#007bff]/40 hover:shadow-md transition-all duration-200 hover:-translate-y-1 min-w-[100px]"
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <Image
                src={item.logo}
                alt={`${item.name} logo`}
                width={48}
                height={48}
                className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-200"
                onError={(e: any) => {
                  // Fallback to a default icon if image fails to load
                  e.target.src = defaultLogo
                }}
              />
            </div>
            <span className="text-xs font-medium text-[#333] text-center group-hover:text-[#007bff] transition-colors duration-200">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </SectionCard>
  )
}

export default TechStackCategory

