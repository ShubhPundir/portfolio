'use client'

import Link from 'next/link'
import NavLink from './NavLink'
import { useState } from 'react'

const navItems = [
  { href: '/#work-experience', label: 'Work Experience' },
  { href: '/allprojects', label: 'All Projects' },
  { href: '/techstack', label: 'Tech Stack' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/freelancing', label: 'Freelancing' },
  { href: '/#contact', label: 'Contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[1000] flex justify-between items-center py-[15px] px-[5%] bg-navbar-gradient text-white font-sans shadow-[0px_4px_10px_rgba(0,0,0,0.2)] box-border h-20">
        <h1 className="text-2xl font-semibold tracking-wide transition-transform duration-300 whitespace-nowrap hover:scale-110 z-[1001] relative">
          <Link href="/" className="text-white no-underline" onClick={() => setIsOpen(false)}>My Portfolio</Link>
        </h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-[1001] relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-[30px] flex-wrap mr-[10px] items-center list-none">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </ul>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-navbar-gradient flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden z-[1000] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="list-none flex flex-col gap-8 text-center">
            {navItems.map((item) => (
              <li key={item.href} onClick={() => setIsOpen(false)}>
                <Link
                  href={item.href}
                  className="text-white text-2xl font-medium hover:text-[#007bff] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="mt-20"></div>
    </>
  )
}

export default Navbar

