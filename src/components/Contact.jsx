import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/3d9fba59-b025-4ab9-a417-d478f777f5ba' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4cl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact Me</p>
          <p className='text-gray-300 py4'>Submit the form below or shoot me an email - jimmyojeda94@gmail.com</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'></input>
        <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email'></input>
        <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600  hover:border-pink-600 px-4 py-4 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>

    </div>
  )
}

export default Contact