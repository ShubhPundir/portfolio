import Image from 'next/image'
import { StaticImageData } from 'next/image'

interface CertificationCardProps {
  title: string
  issuedBy: string
  year: string
  description: string
  certificateLink: string
  logo?: string | StaticImageData
  logoAlt?: string
  className?: string
}

const CertificationCard = ({
  title,
  issuedBy,
  year,
  description,
  certificateLink,
  logo,
  logoAlt,
  className = '',
}: CertificationCardProps) => {
  return (
    <div className={`group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#007bff]/30 hover:-translate-y-1 flex flex-col overflow-hidden ${className}`}>
      {/* Gradient Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007bff] via-[#0056b3] to-[#007bff]"></div>
      
      <div className="p-6 flex flex-col flex-grow">
        {/* Logo Section */}
        {logo && (
          <div className="mb-4 flex justify-center items-center h-20">
            <Image
              src={logo}
              alt={logoAlt || `${title} logo`}
              width={80}
              height={80}
              className="object-contain max-h-20"
            />
          </div>
        )}
        
        {/* Content Section */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#333] mb-3 group-hover:text-[#007bff] transition-colors">
            {title}
          </h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-[#666]">
              <span className="font-semibold text-[#333]">Issued by:</span>
              <span>{issuedBy}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#666]">
              <span className="font-semibold text-[#333]">Year:</span>
              <span className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-[#007bff]/10 to-[#0056b3]/10 rounded text-[#007bff] font-medium">
                {year}
              </span>
            </div>
          </div>
          
          <p className="text-sm text-[#555] leading-relaxed mb-4">{description}</p>
          
          <a
            href={certificateLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#007bff] font-semibold hover:text-[#0056b3] transition-all duration-200 group/link"
          >
            <span>View Certificate</span>
            <svg
              className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CertificationCard

