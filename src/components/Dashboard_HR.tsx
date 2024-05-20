import React from 'react'
import Image from 'next/image'
import noti from 'public/noti.svg'
import logo from 'public/logo.svg'

const Dashboard_HR = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-72 h-96 relative bg-white shadow border-r border-gray-200 mr-4">
        <div className="absolute left-5 top-5">
          <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/52x52" alt="User Avatar" />
          <div className="ml-16">
            <div className="text-black text-lg font-semibold font-['Open Sans'] tracking-tight">Alex</div>
            <div className="text-neutral-400 text-base font-normal font-['Open Sans'] tracking-tight">HR Manager</div>
          </div>
        </div>
        {/* Menu Items */}
        <div className="mt-28 ml-4">
          {/* Group 1 */}
          <div>
            <div className="text-sky-700 text-lg font-semibold font-['Open Sans'] tracking-tight">Dashboard</div>
            <div className="text-neutral-950 text-lg font-semibold font-['Open Sans'] tracking-tight mt-8">Employees</div>
            <div className="text-neutral-950 text-lg font-semibold font-['Open Sans'] tracking-tight mt-8">Calendar</div>
          </div>
          {/* Group 2 */}
          <div className="mt-36">
            <div className="text-neutral-950 text-base font-normal font-['Open Sans'] tracking-tight">Profile</div>
            <div className="text-neutral-950 text-base font-normal font-['Open Sans'] tracking-tight mt-8">Settings</div>
          </div>
        </div>
      </div>
      
      {/* Header */}
      <div className="border border-gray-300 w-full h-24 p-4 flex items-center justify-center relative ml-4">
        <div className="absolute inset-0 bg-white border-b border-gray-200" />
        <div className="absolute top-6 right-6 sm:right-8 md:right-16 lg:right-32 flex items-center justify-center bg-gray-200/40 rounded-2xl w-11 h-11 p-2">
          <div className="relative w-7 h-7">
            <Image src={noti} alt='Notification Button' />
          </div>
        </div>
        <div className="absolute left-24 sm:left-32 md:left-48 lg:left-72 top-10 flex items-center gap-2.5">
          <div className="w-6 h-6" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="text-neutral-400 text-xl font-normal tracking-tight p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="absolute left-9 top-6">
          <Image src={logo} alt='CultureIQ logo' />
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-4 md:justify-start">
  <div className="w-64 h-36 relative">
    <div className="w-full h-full absolute bg-white rounded-md border-2 border-violet-100" />
    <div className="w-56 h-24 left-12 top-20 absolute">
      <div className="left-0 top-60 absolute text-neutral-400 text-base font-normal font-open-sans tracking-tight">Employee</div>
      <div className="left-1 top-34 absolute text-neutral-800 text-2xl font-semibold font-open-sans tracking-tight">856</div>
      <div className="w-56 h-7 left-1 top-0 absolute flex items-center gap-3">
        <div className="text-neutral-700 text-lg font-semibold font-open-sans tracking-tight">Total Employees</div>
        <div className="px-1 py-0.5 bg-amber-300 rounded-3xl flex items-center gap-0.5">
          <div className="w-3.5 h-3.5 relative" />
          <div className="text-green-500 text-base font-normal font-open-sans tracking-tight">10.0%</div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Repeat the above divs for other components */}

  {/* Second Component */}
  <div className="w-64 h-36 relative">
    <div className="w-full h-full absolute bg-white rounded-md border-2 border-violet-100" />
    <div className="w-52 h-24 left-20 top-23 absolute">
      <div className="left-0 top-60 absolute text-neutral-400 text-base font-normal font-open-sans tracking-tight">Cumulative Total</div>
      <div className="left-1 top-34 absolute text-neutral-800 text-2xl font-semibold font-open-sans tracking-tight">3,342</div>
      <div className="w-48 h-7 left-1 top-0 absolute flex items-center gap-3">
        <div className="text-neutral-700 text-lg font-semibold font-open-sans tracking-tight">Survey Views</div>
        <div className="px-1 py-0.5 bg-amber-300 rounded-3xl flex items-center gap-0.5">
          <div className="w-3.5 h-3.5 relative" />
          <div className="text-green-500 text-base font-normal font-open-sans tracking-tight">22.0%</div>
        </div>
      </div>
    </div>
  </div>

  {/* Third Component */}
  <div className="w-64 h-36 relative">
    <div className="w-full h-full absolute bg-white rounded-md border-2 border-violet-100" />
    <div className="w-52 h-24 left-20 top-23 absolute">
      <div className="left-0 top-60 absolute text-neutral-400 text-base font-normal font-open-sans tracking-tight">Cumulative Total</div>
      <div className="left-1 top-34 absolute text-neutral-800 text-2xl font-semibold font-open-sans tracking-tight">770</div>
      <div className="w-52 h-7 left-1 top-0 absolute flex items-center gap-3">
        <div className="text-neutral-700 text-lg font-semibold font-open-sans tracking-tight">Surveys Filled</div>
        <div className="px-1 py-0.5 bg-amber-300 rounded-3xl flex items-center gap-0.5">
          <div className="w-3.5 h-3.5 relative" />
          <div className="text-green-500 text-base font-normal font-open-sans tracking-tight">12.0%</div>
        </div>
      </div>
    </div>
  </div>

  {/* Fourth Component */}
  <div className="w-72 h-36 relative">
    <div className="w-full h-full absolute bg-white rounded-md border-2 border-violet-100" />
    <div className="w-56 h-24 left-16 top-23 absolute">
      <div className="left-0 top-60 absolute text-neutral-400 text-base font-normal font-open-sans tracking-tight">Employee</div>
      <div className="left-1 top-34 absolute text-neutral-800 text-2xl font-semibold font-open-sans tracking-tight">17</div>
      <div className="w-56 h-7 left-1 top-0 absolute flex items-center gap-3">
        <div className="text-neutral-700 text-lg font-semibold font-open-sans tracking-tight">Surveys Declined</div>
        <div className="px-1 py-0.5 bg-sky-200 rounded-3xl flex items-center gap-0.5">
          <div className="w-3.5 h-3.5 relative" />
          <div className="text-red-500 text-base font-normal font-open-sans tracking-tight">7.0%</div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Dashboard_HR
