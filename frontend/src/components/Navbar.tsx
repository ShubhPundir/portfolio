'use client'

import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[1000] flex justify-between items-center py-[15px] px-[5%] bg-navbar-gradient text-white font-sans shadow-[0px_4px_10px_rgba(0,0,0,0.2)] box-border h-20">
        <h1 className="text-2xl font-semibold tracking-wide transition-transform duration-300 whitespace-nowrap hover:scale-110">
          <Link href="/" className="text-white no-underline">My Portfolio</Link>
        </h1>
        <ul className="list-none flex gap-[30px] flex-wrap mr-[10px] items-center">
          <li className="relative group">
            <Link href="/#skills" className="no-underline text-white text-lg font-normal py-2 px-3 transition-colors duration-300 hover:text-[#f0a500]">Skills</Link>
            <span className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#f0a500] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href="/allprojects" className="no-underline text-white text-lg font-normal py-2 px-3 transition-colors duration-300 hover:text-[#f0a500]">All Projects</Link>
            <span className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#f0a500] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href="/freelancing" className="no-underline text-white text-lg font-normal py-2 px-3 transition-colors duration-300 hover:text-[#f0a500]">Freelancing</Link>
            <span className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#f0a500] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="relative group">
            <Link href="/#contact" className="no-underline text-white text-lg font-normal py-2 px-3 transition-colors duration-300 hover:text-[#f0a500]">Contact</Link>
            <span className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#f0a500] transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </nav>
      <div className="mt-20"></div>
    </>
  )
}

export default Navbar

