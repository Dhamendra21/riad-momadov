import React from 'react'

function Footer() {
  return (
    <footer className='w-full min-h-screen md:px-36 px-5 flex flex-col justify-center gap-10 '>
        <h1 className='text-6xl md:text-7xl md:py-20'>Media & contacts</h1>

            <div className=''>
                <h4 className='text-2xl md:text-3xl font-light '>Booking</h4>
                <a className=' hover:underline' href="booking@riadmammadov.com">booking@riadmammadov.com</a>
            </div>
            <div className=''>
                <h4 className='text-2xl md:text-3xl font-light '>Management</h4>
                <a className=' hover:underline' href="info@riadmammadov.com">info@riadmammadov.com</a>
            </div>
            <div className=' flex flex-col'>
                <h4 className='text-2xl md:text-3xl font-light '>On social networks</h4>
                <div className='flex md:flex-row flex-col gap-3 mt-5'>
                <a className=' hover:underline' href="">YouTube</a>
                <a className=' hover:underline' href="">Telegram</a>
                <a className=' hover:underline' href="">Instagram</a>
                <a className=' hover:underline' href="">Facebook</a>
                </div>
            </div>

    </footer>
  )
}

export default Footer