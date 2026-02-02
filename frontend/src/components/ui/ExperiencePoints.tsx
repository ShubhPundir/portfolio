import { ReactNode } from 'react'

interface ExperiencePointsProps {
    points: (string | ReactNode)[]
    className?: string
}

const ExperiencePoints = ({ points, className = "" }: ExperiencePointsProps) => {
    return (
        <ul className={`list-none space-y-2 text-sm ${className}`}>
            {points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                    <span className="text-[#007bff] mt-1 flex-shrink-0">▸</span>
                    <span className="leading-relaxed">{point}</span>
                </li>
            ))}
        </ul>
    )
}

export default ExperiencePoints
