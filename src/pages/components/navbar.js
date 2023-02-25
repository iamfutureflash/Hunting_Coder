import React from 'react'
import Link from 'next/link'
export default function Navbar() {
    return (
        <nav>
            <ul className='flex gap-2 bg-red-300 justify-center items-center py-2 font-semibold text-xl'>
                <Link href='/'> <li>Home</li></Link>
                <Link href='/about'> <li>About</li></Link>
                <Link href='/blog'> <li>Blog</li></Link>
                <Link href='/contact'> <li>Contact</li> </Link>
            </ul>
        </nav>
    )
}
