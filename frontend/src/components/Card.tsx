import { ReactNode } from 'react'

interface CardProps {
  title: string
  children: ReactNode
  bgColor?: 'white' | 'gray'
  textAlign?: 'left' | 'center'
  className?: string
}

const Card = ({ title, children, bgColor = 'gray', textAlign = 'left', className = '' }: CardProps) => {
  const bgClass = bgColor === 'white' ? 'bg-white' : 'bg-[#f8f9fa]'
  const alignClass = textAlign === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${bgClass} p-[15px] rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.1)] ${alignClass} ${className}`}>
      <h3 className="text-lg text-[#007bff] mb-[5px]">{title}</h3>
      {children}
    </div>
  )
}

export default Card

