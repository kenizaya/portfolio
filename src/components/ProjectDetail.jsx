import React from 'react'

const ProjectDetail = ({
  id,
  title,
  description,
  live,
  repo,
  languages,
  type,
}) => {
  return (
    <div className='flex flex-col h-screen w-1/2 text-2xl text-left top-0 left-0 text-gray-800'>
      <span className='font-avenirHeavy text-3xl p-[5%]'>{`0${id}`}</span>
      <div className='flex flex-col pt-[2%] h-full'>
        <div className='flex flex-col w-full p-[5%] pl-[10%]'>
          <div className='text-7xl pt-[5%] font-avenirHeavy'>{title}</div>
          <div className='uppercase pt-2 text-sm'>{languages}</div>
          <div className='pt-[3%] font-avenirMedium text-2xl'>
            <a href={live} target='_blank'>
              Live
            </a>{' '}
            |{' '}
            <a href={repo} target='_blank'>
              Github
            </a>
          </div>
          <div className='pt-[2%] text-3xl font-avenirBook'>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className='font-avenirHeavy text-3xl p-[5%]'>
        <span>{type}</span>
      </div>
    </div>
  )
}

export default ProjectDetail