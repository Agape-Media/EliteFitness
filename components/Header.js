import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react';
import { useRouter } from 'next/router'

export default function Header () {
  const router = useRouter()
  const [open, setNav] = useState(false);

  const tabClass = {
    active: "px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",
    inActive: "px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:outline-none focus:shadow-outline"
  }

  return (
    <>
     <div className={"w-full text-white " + (router.pathname === '/' ? "top-0 absolute z-50" : "bg-black")}>
  <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
    <div className="p-4 flex flex-row items-center justify-between">
    <Link href="/"><Image
        src="/eliteFitnessLogo.png"
        alt="Picture of the author"
        width={160}
        height={72}
      /></Link>
      {/* <Link href="/"><a className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg focus:outline-none focus:shadow-outline">Elite Fitness</a></Link> */}
      <button onClick={() => setNav(!open)} className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" >
        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
          {!open && <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>}
          {open && <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>}
        </svg>
      </button>
    </div>
    {/* mobile */}
    {open && <nav className={"flex flex-col flex-grow pb-4 md:hidden " + (!open ? 'hidden' : '')}>
      <Link href="/"><a className={router.pathname === '/' ? tabClass.active : tabClass.inActive}>Home</a></Link>
      <Link href="/info"><a className={router.pathname === '/info' ? tabClass.active : tabClass.inActive}>Info</a></Link>
      <Link href="/covid-19"><a className={router.pathname === '/covid-19' ? tabClass.active : tabClass.inActive}>Covid-19</a></Link>
      <Link href="/support"><a className={router.pathname === '/support' ? tabClass.active : tabClass.inActive}>Join Now</a></Link>
    </nav>}

    {/* desktop */}
    <nav className={"hidden md:block flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row " + (!open ? 'hidden' : '')}>
      <Link href="/"><a className={router.pathname === '/' ? tabClass.active : tabClass.inActive}>Home</a></Link>
      <Link href="/info"><a className={router.pathname === '/info' ? tabClass.active : tabClass.inActive}>Info</a></Link>
      <Link href="/covid-19"><a className={router.pathname === '/covid-19' ? tabClass.active : tabClass.inActive}>Covid-19</a></Link>
      <Link href="/support"><a className={router.pathname === '/support' ? tabClass.active : tabClass.inActive}>Join Now</a></Link>
    </nav>
  </div>
</div>
          
    </>
  )
}