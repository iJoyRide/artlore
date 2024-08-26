'use client'

import React from "react";
import { useRouter } from "next/navigation";

const hoverClass = "hover:text-sky-700 hover:scale-110 transition-transform duration-200";
const borderClass = "border border-red-500"

const NavBar: React.FC = () => {
    const router = useRouter();
    return (
        <nav className={`grid grid-cols-5 text-center p-5 text-sm`}>
            <div>Logo</div>
            <div className={`col-span-4 flex justify-evenly items-center ${borderClass}`}>
                <button className={hoverClass} onClick={() => router.push('/about')} aria-label="About Page">About</button>
                <button className={hoverClass} onClick={() => router.push('/classes')} aria-label="Classes Page">Classes</button>
                <button className={hoverClass} onClick={() => router.push('/contact')} aria-label="Contact Us Page">Contact Us</button>
            </div>
        </nav>
    );
}

export default NavBar;
