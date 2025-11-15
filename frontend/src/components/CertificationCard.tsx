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
    <div className={`bg-[#f8f9fa] p-5 rounded-lg shadow-[0_2px_5px_rgba(0,0,0,0.1)] text-left flex flex-col ${className}`}>
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
        <h3 className="text-lg text-[#007bff] mb-[5px] font-semibold">{title}</h3>
        <p className="text-sm text-[#555] my-[3px]">
          <strong>Issued by:</strong> {issuedBy}
        </p>
        <p className="text-sm text-[#555] my-[3px]">
          <strong>Year:</strong> {year}
        </p>
        <p className="text-sm text-[#555] my-[3px]">{description}</p>
        <a
          href={certificateLink}
          target="_blank"
          rel="noreferrer"
          className="text-[#007bff] hover:underline inline-block mt-2"
        >
          View Certificate
        </a>
      </div>
    </div>
  )
}

export default CertificationCard

