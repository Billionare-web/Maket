import React from 'react'
import { FaRegCheckSquare } from "react-icons/fa";
import Illustration from "@/app/components/imgs/illustration.png"

function Drop() {
    return (
        <div>
            <div>
                <img src={Illustration} alt="" />
            </div>
            <div>
                <h1>Any questions?</h1>
                <h1>Drop us a line</h1>
                <div className="flex">
                    <div>
                        <h1>First Name*</h1>
                        <input placeholder='Your first name' type="text" />
                    </div>
                    <div>
                        <h1>Last Name*</h1>
                        <input placeholder='Your last name' type="text" />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <h1>Email*</h1>
                        <input placeholder='Your working email' type="text" />
                    </div>
                    <div>
                        <h1>Phone</h1>
                        <input placeholder='Your phone number' type="text" />
                    </div>
                </div>
                <div>
                    <h1>Message</h1>
                    <input placeholder='Your message' type="text" />
                </div>
                <div className="flex">
                    <div>
                        <span><FaRegCheckSquare /></span>
                        <h1>I agree to receive communications from <br />Createx Online School</h1>
                    </div>
                    <div>
                        <button className='bg-orange-500 px-8 py-2 w-full'>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drop