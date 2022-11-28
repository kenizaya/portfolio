import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Skills = () => {
  const { scrollYProgress } = useScroll()
  const tX = useTransform(scrollYProgress, [0, 1], ['100%', '10%'])

  return (
    <motion.section className='h-[120vh] w-full relative overflow-hidden'>
      <div className='font-avenirRoman text-[40px] text-left w-4/5 ml-[10%] flex justify-around items-center'>
        <div>
          React
          <br />
          Javascript
          <br />
          Tailwind CSS
          <br />
          <br />
          HTML
          <br />
          CSS
          <br />
          SCSS
          <br />
        </div>
        <div>
          Firebase
          <br />
          Git
          <br />
          Python
          <br />
          <br />
          Stack Overflow
          <br />
          Google
          <br />
          VS Code
          <br />
        </div>
      </div>
      <motion.div
        className='text-[200px] font-avenirHeavy text-gray-200 w-full -m-20'
        transition={{ duration: 1 }}
        style={{ translateX: tX }}
      >
        SKILLS
      </motion.div>
    </motion.section>
  )
}

export default Skills
