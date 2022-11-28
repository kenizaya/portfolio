import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { motion, useScroll, useTransform } from 'framer-motion'

const Contact = () => {
  const { scrollYProgress } = useScroll()
  const tX = useTransform(scrollYProgress, [0, 1], ['-100%', '8.5%'])

  return (
    <motion.section className='h-[80vh] w-full relative overflow-hidden'>
      <motion.div
        className='text-[200px] font-avenirHeavy text-gray-200 w-full'
        transition={{ duration: 1 }}
        style={{ translateX: tX }}
      >
        CONTACT
      </motion.div>
      <div className='w-4/5 ml-[10%] flex absolute items-center'>
        <div className='font-avenirRoman text-[40px] text-left'>
          <a
            href='mailto:kenizaya@outlook.com?subject=%F0%9F%A4%98%20Hi%20Prashant,%20I%27d%20like%20to%20hire%20you'
            target='_blank'
          >
            kenizaya@outlook.com
          </a>
        </div>
        <div className='flex justify-around w-full'>
          <a href='https://github.com/kenizaya/' target='_blank'>
            <FaGithub size={85} />
          </a>
          <a
            href='mailto:kenizaya@outlook.com?subject=%F0%9F%A4%98%20Hi%20Prashant,%20I%27d%20like%20to%20hire%20you'
            target='_blank'
          >
            <MdEmail size={85} />
          </a>
          <a href='https://www.linkedin.com/in/kenizaya/' target='_blank'>
            <FaLinkedinIn size={85} />
          </a>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
