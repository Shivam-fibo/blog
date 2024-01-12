import styles from '@/styles/Home.module.css'

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
         <nav className={styles.nav}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
