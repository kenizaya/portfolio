import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

const About = () => {
  const { scrollYProgress } = useScroll()
  const tX = useTransform(scrollYProgress, [0, 1], ['-10%', '70%'])

  return (
    <motion.section className='h-[40vh] w-full relative overflow-hidden'>
      <motion.div
        className='text-7xl md:text-9xl lg:text-[200px] font-avenirHeavy text-gray-200 w-full absolute '
        transition={{ duration: 1 }}
        style={{ translateX: tX }}
      >
        ABOUT
      </motion.div>
      <div className='font-avenirLight text-xl md:text-2xl md:leading-snug lg:leading-snug lg:text-4xl mx-5 md:ml-[30%] md:mr-[5%] absolute top-[25%]'>
        Full stack developer who cares deeply about user experience. Serious
        passion for the web and new technologies.
      </div>
    </motion.section>
  )
}

export default About
