'use client'

import React from "react";
import { useRouter } from "next/navigation";

const NavBar: React.FC = () => {
    const router = useRouter();
    return (
        <nav className="grid grid-cols-5 text-center">
            <div>Logo</div>
            <div className="col-span-4 flex justify-evenly items-center">
                <button onClick={() => router.push('/about')} aria-label="About Page">About</button>
                <button onClick={() => router.push('/classes')} aria-label="Classes Page">Classes</button>
                <button onClick={() => router.push('/contact')} aria-label="Contact Us Page">Contact Us</button>
            </div>
        </nav>
    );
}

export default NavBar;
