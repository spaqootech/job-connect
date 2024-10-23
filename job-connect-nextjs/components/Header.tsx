import React from 'react'

function Header() {
  return (
    <header className="py-5 flex justify-between items-center">
        <img src="/logo.png" alt="" />

        <ul className="flex justify-center items-center gap-10">
            <li><a href="/" className='text-gray-900 font-semibold'>Home</a></li>
            <li><a href="/browseJobs" className='text-gray-500'>Browse Jobs</a></li>
            <li><a href="/blogs" className='text-gray-500'>Blogs</a></li>
            <li><a href="/message" className='text-gray-500'>Message</a></li>
        </ul>

        <ul className="flex justify-center items-center gap-10">
            <li><a href="#" className='text-gray-900 font-semibold'>Login</a></li>
            <li><a href="#" className='text-white p-3 px-4 bg-mypurple rounded'>Post a Job</a></li>
        </ul>
    </header>
  )
}

export default Header