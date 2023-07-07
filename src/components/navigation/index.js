import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";

function Navigation() {
const [selected, setSelected] = useState("home")
const router = useRouter();

  return (
    <div className='flex items-center justify-center z-20 fixed top-0 my-8 mx-0 right-2/4 left-2/4'>
      <div className='glass-bg flex  z-10  px-2 py-1  justify-between gap-3 items-center'>
        <p onClick={() => {setSelected("home"); router.push("/")} } className={selected === "home" ? `font-DMSans text-sm rounded-full bg-white px-7 py-3`: "font-DMSans text-sm px-7 py-3"}>Home</p>
        <p onClick={() => {setSelected("profile"); router.push("/profile") }} className={selected === "profile" ? `font-DMSans text-sm rounded-full bg-white px-7 py-3 `: "font-DMSans text-sm mx-auto my-0 px-7 py-3"}>Profile</p>
        <p onClick={() => {setSelected("contact"); router.push("/contact") }} className={selected === "contact" ? `font-DMSans text-sm rounded-full bg-white px-7 py-3`: "font-DMSans text-sm px-7 py-3"}>Contact</p>
      </div>
      </div>
  )
}

export default Navigation