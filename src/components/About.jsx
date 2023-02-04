import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. Im Jimmy, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a highly motivated software developer with a passion for writing clean and efficient code. I have 3 years of experience developing fullstack and frontend focused applications and a proven track record of delivering high-quality, scalable solutions. My expertise in Javascript, HTML, CSS, Node.JS, and technologies like Git, Postman and MongoDB aswell as being comfortable in a remote agile evironment has enabled me to effectively design and implement complex systems. I am constantly learning and staying up-to-date with the latest advancements in the field to ensure I am always delivering the best possible outcomes. In my free time, I enjoy spending time with my wife and dogs, I also enjoy playing video games and customizing the game to my preferences through custom code, implementing addon packs, etc. I am excited to bring my skills and enthusiasm to a new challenge and contribute to the success of your team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About