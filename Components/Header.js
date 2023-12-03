import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
      <>
          <nav className='flex justify-between px-3 py-2 bg-teal-500 text-white font-extrabold'>
              <Link href={"/"}>Galary .</Link>
              <div>
                  <Link className='px-2' href={"/Blog"}>Blog</Link>
                  <Link className='px-2' href={"/Contact"}>Contact</Link>
              </div>
          </nav>
      </>
  )
}

export default Header
