'use client'

import Link from "next/link";
import { useState, } from "react";
import { FaReact, } from "react-icons/fa";

export default function NavBar() {
    // hooks
    const [avatarOpen,setAvatarOpen] = useState(false)
    const handleAvatarClick = () => {
        setAvatarOpen(!avatarOpen)
    }

    const navButtons = [
    {
      name: "About",
      url: '/about'
    },
    {
      name: "Profiles",
      url: '/profiles'
    },
    {
      name: "Products",
      url: '/products'
    },
    {
      name: "Contact Us",
      url: '/contact-us'
    }
  ]
    return (
        <div className="w-full h-12 bg-blue-500 p-2 shadow-md flex items-center justify-between">
            <HomeLogo />
            <input type="text" className="bg-white w-80"/>
            <div className="flex gap-4">
                {navButtons.map((nav, index) => (
                    <div key={index} className="text-lg text-white font-bold hover:text-blue-900">
                        <Link href={nav.url}>{nav.name}</Link>
                    </div>
                ))}
                {/* avatar */}
                <div className="size-10 bg-purple-600 rounded-full relative" onClick={handleAvatarClick}>
                    <div className={`absolute top-11 right-0 w-[160px] h-max p-4 bg-gray-400 ${avatarOpen? "":"hidden"}`}> Ini Dropdown </div>
                </div>
            </div>

        </div>
    )
}

export function HomeLogo () {
  return (
<div><FaReact className="text-xl text-white" /></div>
  )
}