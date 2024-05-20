"use client"
import React from 'react'
import Image from 'next/image'
import logo from 'public/logo.svg'
import Button from 'src/components/Button'
import Link from 'next/link'


const Header:React.FC = () => {
    const HandleClick = () => {
        console.log('Logged In !!!');

    };
  return (
    <header>
      <div className="w-full h-[65px] flex items-center">
        <div className="container mx-auto relative">
          <nav className="flex items-center justify-between">
            <Link href='/'>
              <Image src={logo} alt='CultureIQ logo' />
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href='/dash_hr' className="text-zinc-800 text-lg font-semibold font-['Open Sans'] tracking-tight">Features</Link>
              <Link href='/dash_emp' className="text-zinc-800 text-lg font-semibold font-['Open Sans'] tracking-tight">Pricing</Link>
              <Link href='/' className="text-zinc-800 text-lg font-semibold font-['Open Sans'] tracking-tight">About Us</Link>
            </div>
            <div className="flex md:hidden">
                <div className="bg-sky-400 rounded-[100px] flex-col justify-center items-center gap-2 inline-flex">
                    <div className="self-stretch grow shrink basis-0 px-6 py-2.5 justify-center items-center gap-2 inline-flex">
                        <Button onClick={HandleClick} className="text-center text-zinc-800 text-lg font-semibold font-['Open Sans'] tracking-tight" text="Login" />
                    </div>
                </div>
            </div>
            <div className="hidden md:flex">
            <div className="bg-sky-400 rounded-[100px] flex-col justify-center items-center gap-2 inline-flex">
                    <div className="self-stretch grow shrink basis-0 px-6 py-2.5 justify-center items-center gap-2 inline-flex">
                        <Button onClick={HandleClick} className="text-center text-zinc-800 text-lg font-semibold font-['Open Sans'] tracking-tight" text="Login" />
                    </div>
                </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header