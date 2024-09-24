"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import Navlink from './Navlink';
import { motion } from 'framer-motion'

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "  About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
      backgroundColor: "rgb(255,255,255)"
    }
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    }
  }

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map(link => (
          <Navlink link={link} key={link.title} />
        ))}
      </div>
      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className='text-white'>Meek</span>
          <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center '>.dev</span>
        </Link>
      </div>
      {/* socials */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/Meekness-zw">
          <Image src="/github.png" alt='' width={24} height={24} />
        </Link >
        <Link href="/">
          <Image src="/dribbble.png" alt='' width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt='' width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt='' width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt='' width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/meekness-tendwai-kaboti-6a75372ab/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_verification_details%3BaF4VRoV5Q3qgPlDuFK6cXQ%3D%3D">
          <Image src="/linkedin.png" alt='' width={24} height={24} />
        </Link>
      </div>
      {/* responsive menu */}
      <div className="md:hidden">
        {/* menu button */}
        <button className='relative w-10 h-8 flex flex-col justify-between z-50 ' onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded "></motion.div>
          <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>
        {/* menu-list */}
        {open && (
          <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 h-screen w-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <motion.div variants={listItemVariants} className="" key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar