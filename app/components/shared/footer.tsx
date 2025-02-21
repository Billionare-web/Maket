import React from "react";
import Logo from "@/app/components/imgs/logo white.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";

function Footer() {
  return (
    <div>
      <div className="flex justify-between py-16 px-24 bg-[#1E212C] text-white">
        <div>
          <Image src={Logo} alt="" />
          <h1 className="text-sm mt-5 text-zinc-400">
            Createx Online School is a leader in online studying. <br />
            We have lots of courses and programs from the main <br />
            market experts. We provide relevant approaches <br />
            to online learning, internships and employment in the <br />
            largest companies in the country.{" "}
          </h1>
          <div className="flex mt-8 gap-3 text-2xl text-zinc-400">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaTelegramPlane />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div>
          <h1 className="font-[500] text-lg">SITE MAP</h1>
          <ul className="flex flex-col gap-2 text-sm mt-3 text-zinc-400">
            <li>About Us</li>
            <li>Courses</li>
            <li>Event</li>
            <li>Blog</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div>
          <h1 className="font-[500] text-lg">Courses</h1>
          <ul className="flex flex-col gap-2 text-sm mt-3 text-zinc-400">
            <li>Marketing</li>
            <li>Management</li>
            <li>HR & Reacruting</li>
            <li>Design</li>
            <li>Development</li>
          </ul>
        </div>
        <div>
          <h1 className="font-[500] text-lg">CONTACT US</h1>
          <ul className="flex flex-col gap-2 text-sm mt-3 text-zinc-400">
            <li className="flex items-center gap-2">
              <IoPhonePortraitOutline />
              (405) 555-0128
            </li>
            <li className="flex items-center gap-2">
              <MdOutlineMailOutline /> hello@createx.com
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-[500] text-lg">SIGN UP TO OUR NEWSLETTER</h1>
          <ul className="flex flex-col gap-2 text-sm mt-3 text-zinc-400">
            <li>
              <input
                className="px-3 py-2 text-zinc-400 bg-zinc-600 rounded-sm w-full"
                placeholder="Email address"
                type="text"
              />
            </li>
            <li>
              *Subscribe to our newsletter to receive communications and early{" "}
              <br />
              updates from Createx SEO Agency.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between px-24 text-zinc-400 bg-[#2c2e38] py-3">
        <h1>© All rights reserved. Made with ❤ by Createx Studio</h1>
        <h1>GO TO TOP</h1>
      </div>
    </div>
  );
}

export default Footer;
