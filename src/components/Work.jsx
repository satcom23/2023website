import React from 'react'
import Pathfinder from '../assets/2E-Core.jpg'
import JournalMe from '../assets/journalMe2.jpg'
import FreeFitness from '../assets/freeFitness.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
        {/* cotainer */}
        <div className='grid sm:grid-cols md:grid-cols-2 gap-4'>
          {/* grid item 1*/}
          <div style={{ backgroundImage: `url(${Pathfinder})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='flex justify-center text-2xl font-bold text-white tracking-wider'>
                Pathfinder Sheet
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item 2 */}
          <div style={{ backgroundImage: `url(${JournalMe})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='flex justify-center text-2xl font-bold text-white tracking-wider'>
                Journal Me
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item 3*/}
          <div style={{ backgroundImage: `url(${FreeFitness})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='flex justify-center text-2xl font-bold text-white tracking-wider'>
                Free Fitness
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* grid item 4 */}
          {/*style={{ backgroundImage: `url(${FreeFitness})` }}*/}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div comingSoon'>
            {/* hover effects */}
            {/* className='opacity-0 group-hover:opacity-100' */}
            <div className=' group-hover:opacity-100'>
              <span className='flex justify-center text-2xl font-bold text-white tracking-wider'>
                Coming Soon!
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Work