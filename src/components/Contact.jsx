import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { motion, useScroll, useTransform } from 'framer-motion'

const Contact = () => {
  const { scrollYProgress } = useScroll()
  const tX = useTransform(scrollYProgress, [0, 1], ['-100%', '5%'])

  return (
    <motion.section className='h-[60vh] md:h-[80vh] w-full relative overflow-hidden'>
      <motion.div
        className='text-7xl md:text-9xl lg:text-[200px] md:mb-5 font-avenirHeavy text-gray-200 w-full'
        transition={{ duration: 1 }}
        style={{ translateX: tX }}
      >
        CONTACT
      </motion.div>
      <div className='w-4/5 ml-7 md:ml-14 lg:ml-28 flex flex-col gap-5 md:flex-row absolute md:items-center'>
        <div className='font-avenirRoman text-2xl md:text-3xl lg:text-[40px] text-left'>
          <a
            href='mailto:kenizaya@outlook.com?subject=%F0%9F%A4%98%20Hi%20Prashant,%20I%27d%20like%20to%20hire%20you'
            target='_blank'
          >
            kenizaya@outlook.com
          </a>
        </div>
        <div className='flex gap-12 md:justify-around w-full'>
          <a href='https://github.com/kenizaya/' target='_blank'>
            <FaGithub className='text-5xl md:text-7xl lg:text-[85px]' />
          </a>
          <a
            href='mailto:kenizaya@outlook.com?subject=%F0%9F%A4%98%20Hi%20Prashant,%20I%27d%20like%20to%20hire%20you'
            target='_blank'
          >
            <MdEmail className='text-5xl md:text-7xl lg:text-[85px]' />
          </a>
          <a href='https://www.linkedin.com/in/kenizaya/' target='_blank'>
            <FaLinkedinIn className='text-5xl md:text-7xl lg:text-[85px]' />
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
