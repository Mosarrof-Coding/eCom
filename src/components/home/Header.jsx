import { useState } from "react";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoChevronDown } from "react-icons/io5";
import ColorPicker from "../color/ColorPicker";

export default function Header() {
  const [colorScheme, setColorScheme] = useState({
    bgColor: "bg-sky-800",
    textColor: "text-white",
  });

  return (
    <header className={`${colorScheme.bgColor}`}>
      <nav className={`py-1 lg:py-1.5 shadow-md ${colorScheme.textColor}`}>
        <div className="contizer">
          <div className="navMain flex justify-between gap-8 items-center">
            <div className="logo w-[170px] text-3xl text-white font-black flex-shrink-0">
              eCom
            </div>
            <ul className="flex gap-8 items-center w-fit font-medium">
              <li className="px-2 py-1 sm:py-1.5 lg:py-2 xl:py-2.5 hover:underline transition-all duration-500 cursor-pointer">
                Home
              </li>
              <li className="px-2 py-1 sm:py-1.5 lg:py-2 xl:py-2.5 hover:underline transition-all duration-500 cursor-pointer">
                Shop
              </li>
              <li className="group relative px-2 py-1 sm:py-1.5 lg:py-2 xl:py-2.5 hover:underline transition-all duration-500 cursor-pointer ">
                <span className="flex gap-1 items-center">
                  Categories
                  <span>
                    <IoChevronDown />
                  </span>
                </span>
                <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-gray-800 shadow-lg rounded w-48 overflow-hidden">
                  <li className="px-4 py-2 hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                    Newborn Essentials
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                    Baby Bodysuits
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                    Rompers & Onesies
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                    Sleepwear & Pajamas
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                    Outerwear & Jackets
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                    Accessories
                  </li>
                </ul>
              </li>
              <li className="px-2 py-1 sm:py-1.5 lg:py-2 xl:py-2.5 hover:underline transition-all duration-500 cursor-pointer">
                Blog
              </li>
              <li className="px-2 py-1 sm:py-1.5 lg:py-1.5 xl:py-2.5 hover:underline transition-all duration-500 cursor-pointer">
                About Us
              </li>
              <li className="px-2 py-1 sm:py-1.5 lg:py-2 xl:py-2.5 hover:underline transition-all duration-500 cursor-pointer">
                Wishlist
              </li>
            </ul>
            <ul className="flex gap-8 items-center w-fit font-medium">
              <li className="px-2 py-1 sm:py-1.5 lg:py-2 xl:py-2.5 rounded hover:underline transition-all duration-500 cursor-pointer">
                Profile
              </li>
              <li className="px-2 py-1 sm:py-1.5 lg:py-2 xl:py-2.5 hover:underline transition-all duration-500 cursor-pointer relative">
                <RiShoppingBag4Fill size={22} color="white" />
                <span className="absolute right-0 top-0 inline-block text-white">
                  0
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Color Picker for Theme */}
      <ColorPicker colorScheme={colorScheme} setColorScheme={setColorScheme} />
    </header>
  );
}
