"use client";
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import sign from "../../../public/Signature.png";
import { useRef } from 'react';
import Brain from '../components/Brain';

const Page = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div className='h-full' initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      {/* Container */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-40 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* biography container */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            {/* Biography desc */}
            <p className='text-lg'>Goal-oriented full stack developer with a background in UX/UI design and digital marketing. I excel in creating efficient, appealing websites and applications, combining front-end and back-end expertise. A collaborative team player, I’m passionate about solving complex problems and eager to contribute to innovative projects.</p>
            {/* Biography quote */}
            <span className='italic'>Crafting seamless digital experiences, from web to mobile.</span>
            {/* Biography sign svg */}
            <div className="self-end">
              <Image src={sign} alt='' height={80} />
            </div>
            <div>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
                <circle cx="12" cy="12" r="11" stroke="#000000" strokeWidth="1" />
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
              </svg>
            </div>
            {/* Biography scroll svg */}
            <div className="flex flex-col gap-12 justify-center"></div>
            {/* skills container */}
            <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
              {/* skills title */}
              <motion.h1 initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl">SKILLS</motion.h1>
              {/* skills list */}
              <motion.div initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} className="flex gap-4 flex-wrap">
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Figma</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SCSS</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Vue.js</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Typescript</div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Mongo DB</div>
              </motion.div>
              {/* skills scroll svg */}
              <motion.svg initial={{ opacity: 0.2, y: 0 }} animate={{ opacity: 1, y: "10px" }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
                <circle cx="12" cy="12" r="11" stroke="#000000" strokeWidth="1" />
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
              </motion.svg>
            </div>
          </div>
          {/* experience container */}
          <div className="flex flex-col gap-12 justify-center pb-48 items-center" ref={experienceRef}>
            {/* experience title */}
            <motion.h1 initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: 0 } : {}} className="font-bold text-2xl">EXPERIENCE</motion.h1>
            {/* experience list */}
            <motion.div initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: 0 } : {}} className=''>
              {/* experience list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Entry Level Frontend Developer</div>
                  {/* job description */}
                  <div className="p-3 text-sm italic">1 year bootcamp training and perfecting my frontend development skills.</div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2024-present</div>
                  {/* job company */}
                  <div className="bg-white text-sm font-semibold w-fit">Uncommon.org</div>
                </div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
              {/* experience list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3">
                </div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Coding Instructor</div>
                  {/* job description */}
                  <div className="p-3 text-sm italic">Volunteered to multiple schools to teach coding lessons to children mostly in primary.</div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2024-present</div>
                  {/* job company */}
                  <div className="bg-white text-sm font-semibold w-fit">Uncommon.org</div>
                </div>
              </div>
              {/* experience list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3">
                  {/* job title */}
                  {/* <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Entry Level Fullstack Developer</div> */}
                  {/* job description */}
                  {/* <div className="p-3 text-sm italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, fugit consectetur.</div> */}
                  {/* job date */}
                  {/* <div className="p-3 text-red-400 text-sm font-semibold">2024-present</div> */}
                  {/* job company */}
                  {/* <div className="bg-white text-sm font-semibold w-fit">Uncommon.org</div> */}
                </div>
                {/* center */}
                <div className="w-1/6">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* svg container */}
        <div className="hidden lg:block sticky top-0 z-30 w-2/3 xl:w-2/3">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
