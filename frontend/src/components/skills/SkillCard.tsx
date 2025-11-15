import { ReactNode } from 'react'

interface SkillCardProps {
  title: string
  children: ReactNode
  bgColor?: 'white' | 'gray'
  textAlign?: 'left' | 'center'
  className?: string
}

const SkillCard = ({ title, children, bgColor = 'white', textAlign = 'left', className = '' }: SkillCardProps) => {
  const bgClass = bgColor === 'white' ? 'bg-white' : 'bg-[#f8f9fa]'
  const alignClass = textAlign === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${bgClass} p-6 rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:scale-105 ${alignClass} ${className}`}>
      <h3 className="text-lg text-[#007bff] mb-[5px]">{title}</h3>
      {children}
    </div>
  )
}

export default SkillCard

