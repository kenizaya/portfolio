import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import testImg from '../assets/Feed-Instagram.png'

const ProjectImage = ({ image = '', id }) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  })

  const bottomShadowX = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])
  const imageXL = useTransform(scrollYProgress, [0, 1], ['-100%', '0%'])
  const imageXR = useTransform(scrollYProgress, [0, 1], ['100%', '0%'])
  const topShadowX = useTransform(scrollYProgress, [0, 1], ['-25%', '100%'])
  console.log(id && id)

  return (
    <div
      className='w-1/2 flex items-center relative mr-[2%]'
      ref={containerRef}
    >
      <motion.div
        style={{
          translateX: id % 2 !== 0 ? imageXL : imageXR,
          scale: scrollYProgress,
        }}
      >
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
  )
}

export default ProjectImage
