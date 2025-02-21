import React from 'react'
import Chat from "@/app/components/imgs/Chat.png";
import IPhone from "@/app/components/imgs/iPhone.png";
import Outline from "@/app/components/imgs/outline.png";
import Map from "@/app/components/imgs/map.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function GetInTouch() {
    return (
        <div className='flex items-center justify-between'>
            <div>

                <h1>CONTACT INFO</h1>
                <h1>Get in touch</h1>
                <div className="flex">
                    <span><img src={Chat} alt="" /></span>
                    <div className="flex-col">
                        <h1>Talk to us:</h1>
                        <h1>hello@createx.com</h1>
                    </div>
                </div>
                <div className="flex">
                    <span><img src={IPhone} alt="" /></span>
                    <div className="flex-col">
                        <h1>Call us:</h1>
                        <h1>(405) 555-0128</h1>
                    </div>
                </div>
                <div className="flex">
                    <span><img src={Outline} alt="" /></span>
                    <div className="flex-col">
                        <h1>Address:</h1>
                        <h1>2464 Royal Ln. Mesa, New Jersey 45463, USA</h1>
                    </div>
                </div>
                <h1>Follow us:</h1>
                <div className="flex">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaYoutube />
                    <FaTelegramPlane />
                    <FaInstagram />
                    <FaLinkedinIn />
                </div>
            </div>
            <div>
                <img src={Map} alt="" />
            </div>
        </div>
    )
}

export default GetInTouch