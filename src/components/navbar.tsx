"use client"

import { useState } from "react"
import { FaFacebook, FaGithub } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"

const Navbar = () => {
    const [searchBox, setSearchBox] = useState(false)
    
    const toggleSearchBox = () => {
        setSearchBox(!searchBox)
    }
    return (
        <nav className="w-full h-16 flex justify-center items-center bg-gray-900 shadow-md">
            <div className="w-full max-w-screen-lg flex justify-between px-4">
                <ul className="flex items-center text-gray-300">
                    <h1 className="netron-font text-gray-300 text-xl">Barlus Page</h1>
                </ul>
                <ul className="flex items-center gap-5 text-gray-300">
                    <input type="text" className="hidden md:block w-96 h-10 bg-gray-800 rounded-md outline-none p-4" placeholder="Search" />
                    <li><IoSearch className="md:hidden w-7 h-7 cursor-pointer" onClick={toggleSearchBox} /></li>
                    <li><FaFacebook className="w-6 h-6 cursor-pointer" /></li>
                    <li><FaGithub className="w-6 h-6 cursor-pointer" /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar