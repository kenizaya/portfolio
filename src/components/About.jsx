import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

const About = () => {
  const { scrollYProgress } = useScroll()
  const tX = useTransform(scrollYProgress, [0, 1], ['-25%', '50%'])

  return (
    <motion.section className='h-[40vh] w-full relative overflow-hidden'>
      <motion.div
        className='text-[200px] font-avenirHeavy text-gray-200 w-full -top-[15%] absolute '
        transition={{ duration: 1 }}
        style={{ translateX: tX }}
      >
        ABOUT ME
      </motion.div>
      <div className='font-avenirLight text-4xl ml-[30%] mr-[5%] absolute top-[15%]'>
        Front-end developer who cares deeply about user experience. Serious
        passion for web development and new technologies.
      </div>
    </motion.section>
  )
}

export default About
