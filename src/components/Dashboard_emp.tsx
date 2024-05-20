import React from 'react'
import Image from 'next/image'
import noti from 'public/noti.svg'
import logo from 'public/logo.svg'

const Dashboard_emp = () => {
  return (
    <div className="flex flex-col lg:flex-row">
  {/* Sidebar */}
  <div className="w-full lg:w-72 h-auto lg:h-screen bg-white shadow-md border-r border-gray-200 p-5">
    <div className="flex items-center mb-10">
      <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/52x52" alt="User Avatar" />
      <div className="ml-4">
        <div className="text-black text-lg font-semibold">Alex</div>
        <div className="text-neutral-400 text-base">HR Manager</div>
      </div>
    </div>
    {/* Menu Items */}
    <div>
      <div className="text-sky-700 text-lg font-semibold mb-6">Dashboard</div>
      <div className="text-neutral-950 text-lg font-semibold mb-6">Employees</div>
      <div className="text-neutral-950 text-lg font-semibold mb-6">Calendar</div>
    </div>
    <div className="mt-auto">
      <div className="text-neutral-950 text-base font-normal mb-4">Profile</div>
      <div className="text-neutral-950 text-base font-normal">Settings</div>
    </div>
  </div>

  <div className="flex flex-col w-full">
    {/* Header */}
    <div className="flex items-center justify-between bg-white h-24 px-4 sm:px-8 border-b border-gray-200">
      <div className="flex items-center">
        <div className="mr-4">
          <Image src={logo} alt="CultureIQ logo" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="text-neutral-400 text-base sm:text-xl font-normal tracking-tight p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="flex items-center justify-center bg-gray-200/40 rounded-2xl w-11 h-11 p-2">
        <Image src={noti} alt="Notification Button" />
      </div>
    </div>

    {/* Main Content */}
    <div className="flex flex-wrap justify-between gap-4 p-4 sm:p-8">
      {/* Total Employees */}
      <div className="w-full sm:w-64 h-36 relative bg-white rounded-md border-2 border-violet-100 p-4">
        <div className="text-neutral-700 text-lg font-semibold mb-2">Total Employees</div>
        <div className="text-neutral-800 text-2xl font-semibold mb-1">856</div>
        <div className="flex items-center text-neutral-400 text-base font-normal">
          <div>Employee</div>
          <div className="flex items-center bg-amber-300 rounded-3xl px-2 py-0.5 ml-2 text-green-500">
            10.0%
          </div>
        </div>
      </div>

      {/* Survey Views */}
      <div className="w-full sm:w-64 h-36 relative bg-white rounded-md border-2 border-violet-100 p-4">
        <div className="text-neutral-700 text-lg font-semibold mb-2">Survey Views</div>
        <div className="text-neutral-800 text-2xl font-semibold mb-1">3,342</div>
        <div className="flex items-center text-neutral-400 text-base font-normal">
          <div>Cumulative Total</div>
          <div className="flex items-center bg-amber-300 rounded-3xl px-2 py-0.5 ml-2 text-green-500">
            22.0%
          </div>
        </div>
      </div>

      {/* Surveys Filled */}
      <div className="w-full sm:w-64 h-36 relative bg-white rounded-md border-2 border-violet-100 p-4">
        <div className="text-neutral-700 text-lg font-semibold mb-2">Surveys Filled</div>
        <div className="text-neutral-800 text-2xl font-semibold mb-1">770</div>
        <div className="flex items-center text-neutral-400 text-base font-normal">
          <div>Cumulative Total</div>
          <div className="flex items-center bg-amber-300 rounded-3xl px-2 py-0.5 ml-2 text-green-500">
            12.0%
          </div>
        </div>
      </div>

      {/* Surveys Declined */}
      <div className="w-full sm:w-64 h-36 relative bg-white rounded-md border-2 border-violet-100 p-4">
        <div className="text-neutral-700 text-lg font-semibold mb-2">Surveys Declined</div>
        <div className="text-neutral-800 text-2xl font-semibold mb-1">17</div>
        <div className="flex items-center text-neutral-400 text-base font-normal">
          <div>Employee</div>
          <div className="flex items-center bg-sky-200 rounded-3xl px-2 py-0.5 ml-2 text-red-500">
            7.0%
          </div>
        </div>
      </div>

      {/* Survey Statistics */}
      <div className="w-full bg-white rounded-md border-2 border-violet-100 p-4">
        <div className="text-neutral-700 text-lg font-semibold mb-4">Survey Statistics</div>
        <div className="relative h-64">
          {/* Replace with a real chart or placeholder */}
          <img src="https://via.placeholder.com/600x200" alt="Survey Statistics Chart" className="w-full h-full object-cover"/>
        </div>
      </div>

      {/* Employee Status and Employee Composition Container */}
      <div className="w-full flex flex-col lg:flex-row gap-4">
        {/* Employee Status */}
        <div className="w-full lg:w-1/2 bg-white rounded-md border-2 border-violet-100 p-4">
          <div className="text-neutral-700 text-lg font-semibold mb-4">Employee Status</div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="px-2 py-2 text-neutral-700">Employee Name</th>
                  <th className="px-2 py-2 text-neutral-700">Department</th>
                  <th className="px-2 py-2 text-neutral-700">Age</th>
                  <th className="px-2 py-2 text-neutral-700">Discipline</th>
                  <th className="px-2 py-2 text-neutral-700">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-2 py-2">Aditya Upadhyay</td>
                  <td className="px-2 py-2">Marketing</td>
                  <td className="px-2 py-2">32</td>
                  <td className="px-2 py-2">+100%</td>
                  <td className="px-2 py-2">Exemplary</td>
                </tr>
                <tr>
                  <td className="px-2 py-2">Shivam Singhai</td>
                  <td className="px-2 py-2">Finance</td>
                  <td className="px-2 py-2">26</td>
                  <td className="px-2 py-2">+95%</td>
                  <td className="px-2 py-2">Exemplary</td>
                </tr>
                <tr>
                  <td className="px-2 py-2">Sanshrit Roy</td>
                  <td className="px-2 py-2">R&D</td>
                  <td className="px-2 py-2">48</td>
                  <td className="px-2 py-2">+89%</td>
                  <td className="px-2 py-2">Very Good</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Employee Composition */}
        <div className="w-full lg:w-1/2 bg-white rounded-md border-2 border-violet-100 p-4">
          <div className="text-neutral-700 text-lg font-semibold mb-4">Employee Composition</div>
          <div className="flex items-center justify-center h-64">
            {/* Replace with a real chart or placeholder */}
            <img src="https://via.placeholder.com/200x200" alt="Employee Composition Chart" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



  )
}

export default Dashboard_emp