"use client"
import React from 'react'
import Image from 'next/image'
import img1 from 'public/img1.png'
import img2 from 'public/img2.png'
import img3 from 'public/img3.png'
import img4 from 'public/img4.png'

const Hero = () => {
  return (
    <div>
      <div className="text-center text-zinc-800 text-lg font-semibold font-['Open_Sans'] tracking-tight">
        Unlock Cultural Insights: Empower Your Organization’s Evolution
      </div>
      <br></br>
      <br></br>
      <div className="flex flex-col justify-start items-center gap-8">
      <div className="self-stretch text-center leading-tight">
          <span className="text-amber-500 text-5xl font-extrabold font-['Open_Sans'] block">
            Measure, Understand
          </span>
          <span className="text-amber-500 text-5xl font-extrabold font-['Open_Sans'] block" style={{ marginBottom: '0.25em' }}>
            and Improve Your
          </span>
          <span className="text-sky-700 text-5xl font-extrabold font-['Open_Sans'] block">
            Team’s Culture
          </span>
        </div>
        <div className="w-44 bg-orange-600 rounded-full flex flex-col justify-center items-center gap-2">
          <div className="self-stretch grow shrink basis-0 px-6 py-2.5 flex justify-center items-center gap-2">
            <div className="text-center text-white text-lg font-semibold font-['Open_Sans'] tracking-tight">Create Account</div>
          </div>
        </div>
        <div className="w-96 h-9 text-center text-zinc-800 text-base font-normal font-['Open_Sans'] leading-relaxed">
          30 Days free trial | No credit card required
        </div>
      </div>
      <div className="w-full px-4">
        <div className="text-left text-amber-500 text-4xl font-semibold font-open-sans tracking-tight mt-0 md:mt-4 md:pl-32">
          How it Works
        </div>
        <br></br>
        <div className="w-full text-zinc-800 text-lg md:text-2xl font-semibold font-open-sans tracking-tight md:pl-32">
          CultureIQ is a cloud-based platform that makes it easy to measure employee sentiment along with <br></br>engagement
          and get actionable insights to help you build more inclusive and high performing teams.
        </div>
        <br></br>
        <br></br>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:pl-32">
          <div className="w-60 h-60 relative">
            <Image className="w-44 h-28 left-[23px] top-0 absolute" src={img1} alt='Understand Your team' />
            <div className="left-[10px] top-[139px] absolute text-orange-600 text-lg font-semibold tracking-tight">Understand Your Team</div>
            <div className="left-0 top-[171px] absolute text-center text-sky-700 text-base font-normal tracking-tight">See how your team feels about
              <br />their work, each other, and the
              <br />company
            </div>
          </div>
          <div className="w-60 h-60 relative">
          <Image className="w-44 h-28 left-[23px] top-0 absolute" src={img2} alt='Spot Trends Over Time' />
            <div className="left-[15px] top-[139px] absolute text-orange-600 text-lg font-semibold tracking-tight">Spot Trends Over Time</div>
            <div className="left-0 top-[171px] absolute text-center text-sky-700 text-base font-normal tracking-tight">Track changes in sentiment and
              <br />engagement over time
            </div>
          </div>
          <div className="w-64 h-60 relative">
          <Image className="w-44 h-28 left-[23px] top-0 absolute" src={img3} alt='Benchmark Against Peers' />
            <div className="left-[14px] top-[139px] absolute text-orange-600 text-lg font-semibold tracking-tight">Benchmark Against Peers</div>
            <div className="left-0 top-[171px] absolute text-center text-sky-700 text-base font-normal tracking-tight">See how your scores compare to
              <br />similar companies
            </div>
          </div>
          <div className="w-60 h-60 relative">
            <Image className="w-44 h-28 left-[23px] top-0 absolute" src={img4} alt='Get Actionable Insights' />
            <div className="left-[12px] top-[139px] absolute text-orange-600 text-lg font-semibold tracking-tight">Get Actionable Insights</div>
            <div className="left-0 top-[171px] absolute text-center text-sky-700 text-base font-normal tracking-tight">Get recommended actions and
              <br />resources based on your data
            </div>
          </div>
        </div>
        <br></br>
        <div className="w-full md:w-96 h-auto md:h-60 flex flex-col justify-center items-center md:gap-16 mx-auto">
          <div className="self-stretch text-center md:text-zinc-800 text-4xl md:text-5xl font-extrabold font-open-sans">
            Ready to improve your team culture ?
          </div>
          <div className="w-full md:w-56 h-24 bg-sky-700 rounded-full flex flex-col justify-center items-center gap-2">
            <div className="self-stretch grow shrink basis-0 px-6 py-2.5 justify-center items-center gap-2 inline-flex">
              <div className="text-center text-white text-lg md:text-2xl font-semibold font-open-sans tracking-tight">
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero