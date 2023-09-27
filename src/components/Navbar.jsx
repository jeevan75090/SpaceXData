import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-12'>
      <div>
        <img className='h-24 mb-4 cursor-pointer' src="https://thumbs.dreamstime.com/b/white-spacex-logo-black-background-new-york-city-us-march-private-company-designs-manufactures-space-launch-275740260.jpg" alt="" />
      </div>
      <div>
        <img className='h-7 mb-5 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNBA95JaKp7JXZUXTmAOUwsfd3o7vAz_vcA&usqp=CAU" alt="" />
      </div>
    </div>
  )
}

export default Navbar
