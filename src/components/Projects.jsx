import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import testImg from '../assets/Feed-Instagram.png'

const Projects = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  const bottomShadowX = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])
  const imageX = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])
  const topShadowX = useTransform(scrollYProgress, [0, 1], ['-25%', '100%'])

  return (
    <section
      className='h-screen flex justify-between my-screen mx-auto w-full overflow-hidden'
      ref={containerRef}
    >
      <motion.div className='flex flex-col justify-center items-center w-2/5 text-2xl ml-[5%] text-left'>
        <h3 className='text-7xl mt-0'>Lorem ipsum dolor sit amet</h3>
      </motion.div>
      <div className='w-1/2 flex items-center relative mr-[2%]'>
        <motion.div style={{ translateX: imageX, scale: scrollYProgress }}>
          <motion.div
            className='bg-gradient-to-r from-transparent via-gray-100 to-gray-200 h-full w-full absolute left-0 z-0'
            style={{ translateX: bottomShadowX }}
          />
          <img
            src={testImg}
            alt=''
            className='min-w-[700px] w-full relative z-10 shadow-md'
          />
          <motion.div
            className='bg-gradient-to-r from-transparent via-gray-100 to-gray-200 h-full w-[125%] absolute left-0 top-0 z-20'
            style={{ translateX: topShadowX }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
