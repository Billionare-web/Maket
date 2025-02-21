"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiPlayCircle } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { HiOutlineMicrophone } from "react-icons/hi";
import Image1 from "@/app/components/imgs/image1.png";
import Image2 from "@/app/components/imgs/image2.jpg";
import Image3 from "@/app/components/imgs/image3.png";
import Image4 from "@/app/components/imgs/image4.jpg";
import Image5 from "@/app/components/imgs/image5.png";
import Image from "next/image";

function School() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h4 className="text-center text-2xl font-medium mb-0">Our blog</h4>
      <h1 className="text-center text-4xl font-semibold">
        Createx School Journal
      </h1>

      <div className="flex justify-center justify-between mt-4">
        <div className="flex gap-2 mt-2">
          <button
            className={`w-16 h-12 bg-white border-none font-bold text-base transition duration-500 ${
              selectedCategory === "All" ? "text-orange-500" : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange("All")}
          >
            All
          </button>
          <button
            className={`w-28 h-12 bg-white border-none font-bold flex items-center gap-2 text-base transition duration-500 ${
              selectedCategory === "Articles"
                ? "text-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange("Articles")}
          >
            <GrDocumentText /> Articles
          </button>
          <button
            className={`w-28 h-12 bg-white border-none font-bold flex items-center gap-2 text-base transition duration-500 ${
              selectedCategory === "Videos"
                ? "text-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange("Videos")}
          >
            <FiPlayCircle /> Videos
          </button>
          <button
            className={`w-32 h-12 bg-white border-none font-bold flex items-center gap-2 text-base transition duration-500 ${
              selectedCategory === "Podcasts"
                ? "text-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange("Podcasts")}
          >
            <HiOutlineMicrophone /> Podcasts
          </button>
        </div>

        <div className="flex items-center gap-7">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold">Blog category</h4>
            <button className="flex items-center gap-1 px-2 py-2 mt-2 rounded-md text-gray-600 border">
              all themes
              <FaChevronDown className="text-sm" />
            </button>
          </div>
          <input
            type="text"
            placeholder="Search blog..."
            className="mt-2 px-4 py-2 border rounded-md w-64"
          />
        </div>
      </div>

      <div className="flex justify-center gap-10 mt-24">
        <div className="w-96 bg-white rounded-lg shadow-md overflow-hidden">
          <Image className="w-full h-auto" src={Image1} alt="" />
          <div className="p-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Marketing | 📅 September 4, 2020</span>
              <span>⏱ 36 min</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              What is traffic arbitrage and does it really make money?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Pharetra, ullamcorper iaculis viverra parturient sed id sed.
              Convallis proin dignissim lacus, purus gravida...
            </p>
            <a href="#" className="font-semibold flex items-center gap-2">
              Listen <span className="text-red-500">→</span>
            </a>
          </div>
        </div>

        <div className="w-96 bg-white rounded-lg shadow-md overflow-hidden">
          <Image className="w-full h-auto" src={Image2} alt="" />
          <div className="p-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Development | 📅 September 1, 2020</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              How to choose the first programming language for a beginner
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Turpis sed at magna laoreet gravida consequat tortor placerat.
              Gravida vitae aliquet enim egestas dui...
            </p>
            <a href="#" className="font-semibold flex items-center gap-2">
              Read <span className="text-red-500">→</span>
            </a>
          </div>
        </div>

        <div className="w-96 bg-white rounded-lg shadow-md overflow-hidden">
          <Image className="w-full h-auto" src={Image3} alt="" />
          <div className="p-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Design | 📅 August 8, 2020</span>
              <span>⏱ 40 min</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Should you choose a creative profession if you are attracted to
              creativity?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Curabitur nisl tincidunt eros venenatis vestibulum ac placerat.
              Tortor, viverra sed vulputate ultrices...
            </p>
            <a href="#" className="font-semibold flex items-center gap-2">
              Watch <span className="text-red-500">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-7 mt-10">
        <div className="w-[700px] bg-white rounded-lg shadow-md overflow-hidden mb-5">
          <Image className="w-full h-auto" src={Image4} alt="" />
          <div className="p-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>HR & Recruting | 📅 August 3, 2020</span>
              <span>⏱ 40 min</span>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              HR statistics: job search, interviews, hiring and recruiting
            </h3>
            <p className="text-[12px] text-gray-600 mb-4">
              Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac
              netus bibendum diam <br />
              adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae
              pellentesque mi etiam. Morbi commodo tempor,
              <br />
              massa vivamus. A molestie id semper fermentum pretium...
            </p>
            <a
              href="#"
              className="font-semibold flex items-center gap-2"
            >
              Read <span className="text-red-500">→</span>
            </a>
          </div>
        </div>

        <div className="w-[450px] bg-white rounded-lg shadow-md overflow-hidden">
          <Image className="w-full h-auto" src={Image5} alt="" />
          <div className="p-4">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Management | 📅 August 2, 2020</span>
              <span>⏱ 45 min</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              What is traffic arbitrage and does it really make money?
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Pharetra, ullamcorper iaculis viverra parturient sed id sed.
              Convallis proin dignissim lacus, purus gravida...
            </p>
            <a
              href="#"
              className="font-semibold flex items-center gap-2"
            >
              Watch <span className="text-red-500">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default School;
