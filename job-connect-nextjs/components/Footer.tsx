import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="flex justify-between items-center gap-5 w-[90%] mx-auto">
        <div className="flex flex-col gap-3 w-3/12">
            <img src="/logo.png" className='w-60' alt="" />
            <div className="text-sm text-gray-400">
            Connect with Top Employers. Your Career Journey Starts Here.
            </div>
        </div>

        <div className="flex flex-col gap-3 w-2/12">
            <ul className="flex flex-col gap-3">
                <a href="#" className='text-white font-bold text-sm'>Employers</a>
                <a href="#" className='text-gray-400 text-sm'>Overview</a>
                <a href="#" className='text-gray-400 text-sm'>Pricing</a>
                <a href="#" className='text-gray-400 text-sm'>Download</a>
                <a href="#" className='text-gray-400 text-sm'>Post a Job</a>
            </ul>
        </div>

        <div className="flex flex-col gap-3 w-2/12">
            <ul className="flex flex-col gap-3">
                <a href="#" className='text-white font-bold text-sm'>About</a>
                <a href="#" className='text-gray-400 text-sm'>Success Stories</a>
                <a href="#" className='text-gray-400 text-sm'>Openview</a>
                <a href="#" className='text-gray-400 text-sm'>Team</a>
                <a href="#" className='text-gray-400 text-sm'>Press</a>
            </ul>
        </div>

        <div className="flex flex-col gap-3 w-2/12">
            <ul className="flex flex-col gap-3">
                <a href="#" className='text-white font-bold text-sm'>General</a>
                <a href="#" className='text-gray-400 text-sm'>News</a>
                <a href="#" className='text-gray-400 text-sm'>FAQs</a>
                <a href="#" className='text-gray-400 text-sm'>Contact Us</a>
                <a href="#" className='text-gray-400 text-sm'>Terms & Conditions</a>
            </ul>
        </div>

        <div className="flex flex-col gap-3 w-3/12">
            <ul className="flex flex-col gap-3">
                <a href="#" className='text-white font-bold text-sm'>Get in Touch</a>
                <a href="#" className='text-gray-400 text-sm'>4517 Singapore Ave, 23a</a>
                <a href="#" className='text-gray-400 text-sm'> 23a Jalan Lateh</a>
                <a href="#" className='text-gray-400 text-sm'>International 359121</a>
            </ul>
        </div>
      </div>
      <p className='w-[90%] mx-auto py-5 text-gray-400 text-sm'>@2023 JobConnect All Right Reserved.</p>
      </footer>
  )
}

export default Footer