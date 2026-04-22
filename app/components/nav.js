'use client'
import Image from "next/image"

export default function Nav(){
    return (
    <nav className="flex flex-row h-[100px] items-center justify-between p-6 border-b-gray-500 border-[1px] shadow-xs shadow-black">
          <Image
          className="h-18 w-24 self-start"
          width={100}
          height={100}
          alt="logo"
          src="/logo.png"
          />
          <ul className="flex flex-row items-center gap-8">
            <li>Products</li>
            <li>Material</li>
            <li>About us</li>
            <li><button className="callToAction button h-[35px] rounded-md">Log in</button></li>
            <li><button className="callToAction2 h-[35px] button rounded-md">Register</button></li>
          </ul>
    </nav>
    )
}