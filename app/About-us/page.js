import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar/>
        <div className='w-full bg-[#00131a] flex gap-4 px-80 items-center '>
          <div>Help</div>
          <div>About Us</div>
          <div>Jobs</div>
          <div>Become Partner</div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default page
