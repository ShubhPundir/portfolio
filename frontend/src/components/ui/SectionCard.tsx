import { ReactNode } from 'react'

interface SectionCardProps {
  title: string
  subtitle?: string
  children: ReactNode
  icon?: ReactNode
  className?: string
  variant?: 'default' | 'highlighted'
}

const SectionCard = ({ 
  title, 
  subtitle, 
  children, 
  icon,
  className = '',
  variant = 'default'
}: SectionCardProps) => {
  const variantStyles = variant === 'highlighted' 
    ? 'bg-gradient-to-br from-white to-blue-50 border-blue-200' 
    : 'bg-white border-gray-200'

  return (
    <div className={`group relative p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border ${variantStyles} hover:-translate-y-1 flex flex-col ${className}`}>
      {/* Gradient Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007bff] via-[#0056b3] to-[#007bff] rounded-t-xl"></div>
      
      {/* Icon */}
      {icon && (
        <div className="mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#007bff] to-[#0056b3] flex items-center justify-center text-white shadow-md">
            {icon}
          </div>
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-bold text-[#333] mb-2 group-hover:text-[#007bff] transition-colors duration-200">
        {title}
      </h3>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm text-[#666] mb-4 font-medium">{subtitle}</p>
      )}

      {/* Content */}
      <div className="flex-grow">
        {children}
      </div>
    </div>
  )
}

export default SectionCard

