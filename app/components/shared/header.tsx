import React from 'react';
import Logo from '@/app/components/imgs/logo.png';
import { IoPersonOutline } from "react-icons/io5";
import Image from 'next/image';

function Header() {
    return (
        <div className='flex justify-between items-center'>
            <div className="flex gap-10">
                <Image src={Logo} alt='' />
                <ul className='flex gap-3 items-center'>
                    <li>About Us</li>
                    <li>Courses</li>
                    <li>Event</li>
                    <li>Blog</li>
                    <li className='text-orange-500'>Contacts</li>
                </ul>
            </div>
            <div className="flex gap-5 items-center">
                <button className='px-8 py-2 bg-orange-500 text-white rounded-sm'>Get consultation</button>
                <button className='flex items-center gap-2'><IoPersonOutline /> Log in/Register</button>
            </div>
        </div>
    )
}

export default Header