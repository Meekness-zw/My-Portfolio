
"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const page = () => {
  return (
    <motion.div className='h-full' initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* image container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/heroo.JPG" alt="" fill className='object-contain ' />
        </div>
        {/* text container */}
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2 items-center justify-center gap-8">
          {/* title */}
          <h1 className='text-4xl md:6xl font-extrabold'>Crafting Digital Experiences,Designing Tomorrow</h1>
          {/* desc */}
          <p className='md:text-xl'>
            Combining expertise in front-end and back-end development, I thrive in collaborative environments and aspire to contribute to innovative software solutions.My passion lies in solving complex problems through innovative software solutions. I’m a collaborative team player who is always eager to learn and contribute to cutting-edge projects.</p>
          {/* buttons */}
          <div className="flex gap-4 w-full">
            <Link href="/portfolio"><button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>View My Work</button></Link>
            <Link href="/contact"><button className='p-4 rounded-lg ring-1 ring-black'>Contact Me</button></Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default page
