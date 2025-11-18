import Link from 'next/link'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <li className="relative group">
      <Link 
        href={href} 
        className="no-underline text-white text-lg font-normal py-2 px-3 transition-colors duration-300 hover:text-[#f0a500]"
      >
        {children}
      </Link>
      <span className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#f0a500] transition-all duration-300 group-hover:w-full"></span>
    </li>
  )
}

export default NavLink

