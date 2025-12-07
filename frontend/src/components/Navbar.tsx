'use client'

import Link from 'next/link'
import NavLink from './NavLink'

const navItems = [
  { href: '/#work-experience', label: 'Work Experience' },
  { href: '/allprojects', label: 'All Projects' },
  { href: '/techstack', label: 'Tech Stack' },
  { href: '/freelancing', label: 'Freelancing' },
  { href: '/#contact', label: 'Contact' },
]

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[1000] flex justify-between items-center py-[15px] px-[5%] bg-navbar-gradient text-white font-sans shadow-[0px_4px_10px_rgba(0,0,0,0.2)] box-border h-20">
        <h1 className="text-2xl font-semibold tracking-wide transition-transform duration-300 whitespace-nowrap hover:scale-110">
          <Link href="/" className="text-white no-underline">My Portfolio</Link>
        </h1>
        <ul className="list-none flex gap-[30px] flex-wrap mr-[10px] items-center">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </ul>
      </nav>
      <div className="mt-20"></div>
    </>
  )
}

export default Navbar

