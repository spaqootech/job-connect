import LatestJobItem from '@/components/LatestJobItem'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col gap-10'>
      
      {/* Job Search */}
      <div className="flex items-end gap-10 p-32 pb-0 pr-0 justify-between rounded-xl bg-[#FFF9E7] h-[500px]">
        <div className="w-3/5 flex flex-col gap-10 pb-10">
        <h1 className="text-7xl font-semibold w-[90%]">
        Revolutionize Your Job Search Experience
        </h1>
        <p className="text-md text-gray-500">
        Find Your Dream Job. Simplify Hiring. Stand Out. Take Control. Connect with Top Employers. Your Career Journey Starts Here.
        </p>
        {/* Search Area */}
        <div className="flex items-center justify-between bg-white rounded-full  gap-3">
          <input
            type="text"
            placeholder="Search for Jobs"
            className="outline-none rounded-l-full w-full p-3"
          />
          <img src="/location-gray.png" className='w-5' alt="" />
          <select>
            <option>New York, USA</option>
            <option>Karachi, PK</option>
            <option>Dehli, India</option>
          </select>
          <img src="/search.png" className='bg-blue-500 p-2 rounded-full w-10 mr-2' alt="" />
        </div>
        {/* Search Area */}
        </div>
        <div className="w-2/5">
        <img src="/girl-with-laptop.png" alt="" className='w-[480px]' />
        </div>
      </div>
      {/* Job Search */}






    {/* Companies Logos */}
    <div className="flex flex-col justify-center items-center gap-3">
      <p className="text-gray-500 text-md">
      Popular tech companies who are seeking talents in our website
      </p>
      <div className="flex justify-center items-center gap-10">
      <img src="/google.png" alt="" className="w-32" />
      <img src="/slack.png" alt="" className="w-32" />
      <img src="/microsoft.png" alt="" className="w-32" />
      <img src="/facebook.png" alt="" className="w-32" />
      <img src="/amazon.png" alt="" className="w-32" />
      </div>
    </div>
    {/* Companies Logos */}




    {/* Our Platform's Features */}
<div className="flex flex-col gap-3">
<h1 className="text-5xl font-bold">Our <br />Platform's Features</h1>
<div className="grid grid-cols-2 gap-5">
  <div className="">
    <img src="/boy-with-mobile.png" className='w-[480px]' alt="" />
  </div>
  <div className="flex">
    <div className="w-1/5 flex flex-col justify-between items-center">
    <img src="/chat-bordered.png" alt="" className="w-20" />
    <img src="/laptop-bordered.png" alt="" className="w-20" />
    <img src="/profile-bordered.png" alt="" className="w-20" />
    <img src="/profile-setting-bordered.png" alt="" className="w-20" />
    </div>
    <div className="w-4/5 flex flex-col justify-between py-3">
 
    <div className="flex flex-col gap-3">
      <div className="text-md font-bold">In-Website Messaging:</div>
      <div className="text-md text-gray-500">Communicate directly with hirers or recruiters.</div>
    </div>

    <div className="flex flex-col gap-3">
      <div className="text-md font-bold">Video Introductions</div>
      <div className="text-md text-gray-500">Stand out with a short introduction video alongside your job applications</div>
    </div>

    <div className="flex flex-col gap-3">
      <div className="text-md font-bold">Candidate's Profile</div>
      <div className="text-md text-gray-500">Create and manage your profile, showcasing your work history, education, skills, and contact information.</div>
    </div>

    <div className="flex flex-col gap-3">
      <div className="text-md font-bold">Employer's Profile</div>
      <div className="text-md text-gray-500">Post job listings, view resumes, and communicate with job seekers.</div>
    </div>

    
    </div>
  </div>
</div>
</div>
    {/* Our Platform's Features */}










    {/* Latest Jobs */}
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold">Latest Jobs</h1>
      <div className="flex justify-between items-center">
        <p className="text-md text-gray-500">2023 jobs live – 293 added today.</p>
        <p className="text-md text-gray-500 text-mypurple ">View All Jobs</p>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <LatestJobItem/>
        <LatestJobItem/>
        <LatestJobItem/>
        <LatestJobItem/>
      </div>
    </div>
    {/* Latest Jobs */}





    {/* How we Work */}
    <div className="flex flex-col gap-3">
      <h1 className="text-5xl font-bold">How We Work</h1>
      <div className="grid grid-cols-2 py-10">
        <div className="flex flex-col justify-center gap-5 items-start">
          <p className="text-3xl font-semibold w-3/6">
          Simplifying Your Job Search and Hiring Journey
          </p>
          <p className="text-md text-gray-500">
          Step-by-step explanation of how the platform works, highlighting its user-friendly nature and the benefits it provides to both job seekers and employers.
          </p>
          <a href="#" className="text-md text-white bg-mypurple rounded p-3 px-5">Learn More</a>
        </div>
        <div className="">
          <img src="/work-images.png" className='w-[480px]' alt="" />
        </div>
      </div>
    </div>
    {/* How we Work */}






    














    </div>
  )
}

export default page