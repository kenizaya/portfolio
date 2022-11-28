import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Hero = () => {
  const variants = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: '50%' },
    show: { opacity: 1, y: '0' },
  }
  return (
    <div className='flex relative justify-center items-center w-full h-screen'>
      <motion.div
        variants={variants}
        initial='hidden'
        animate='show'
        className='w-full'
      >
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.5 }}
          className='font-valencia text-7xl md:text-9xl lg:text-[150px] text-center'
        >
          Prashant Thapa
        </motion.div>
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.75 }}
          className='font-avenirRoman text-2xl md:text-4xl lg:text-5xl text-center'
        >
          Front-End Developer
        </motion.div>
      </motion.div>
      <div className='font-avenirRoman text-sm md:text-md flex flex-col items-center gap-2 absolute bottom-5'>
        Scroll
        <AiOutlineArrowDown size={22} className='fill-black animate-pulse' />
      </div>
    </div>
  )
}

export default Hero
