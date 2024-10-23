import React from 'react'

function LatestJobItem() {
  return (
    <div className="p-5 border rounded-xl flex flex-col gap-5">
        <div className="flex justify-between items-start gap-3">
            <img src="/smile-bordered.png" className='w-10' alt="" />
            <div className="flex-1">
                <p className="text-md font-semibold">Staff Product Designer</p>
                <p className="text-sm">
                    by <span className="font-semibold">Ulite</span> in <span className="text-mypurple">Development Design</span>
                </p>
            </div>
            <div className="flex gap-3 items-center">
                <img src="/crown.png" className='w-5' alt="" />
                <img src="/charged.png" className='w-5' alt="" />
                <img src="/heart-gray.png" className='w-7' alt="" />
            </div>
        </div>

        <div className="flex items-center gap-3">
            <p className="p-1 px-3 text-gray-500 bg-gray-100 rounded-full text-sm">Remote</p>
            <p className="p-1 px-3 text-gray-500 bg-gray-100 rounded-full text-sm">Chicago</p>
            <p className="p-1 px-3 text-gray-500 bg-gray-100 rounded-full text-sm">$450 - $500/week</p>
        </div>
        <p className="text-md font-semibold text-gray-500">120 days left to apply</p>
    </div>
  )
}

export default LatestJobItem