/* eslint-disable react/prop-types */
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoChevronDown } from "react-icons/io5";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Header({ colorScheme }) {
  const [fixed, setFixed] = useState(false);

  const [isToggled, setIsToggled] = useState(false);
  const rot1 = useRef(null);
  const rot2 = useRef(null);
  const rot3 = useRef(null);
  const toggleRotation = () => {
    setIsToggled(!isToggled);

    if (!isToggled) {
      rot1.current.style.transform = "rotate(-45deg) translateX(-2px)";
      rot2.current.style.transform = "rotate(45deg)";
      rot3.current.style.transform = "rotate(-45deg) translateX(2px)";
    } else {
      rot1.current.style.transform = "rotate(0deg) translateY(0)";
      rot2.current.style.transform = "rotate(0deg)";
      rot3.current.style.transform = "rotate(0deg) translateY(0)";
    }
    setFixed(!fixed);
  };

  return (
    <header className={`${colorScheme.bgColor}`}>
      <nav
        className={`py-0.5 sm:py-1 lg:py-2 shadow-md ${colorScheme.textColor}`}
      >
        <div className="contizer px-4 lg:px-10">
          <div className="navMain flex justify-between items-center">
            <h3 className="pacifico-regular text-xl lg:text-3xl font-medium md:font-bold w-fit drop-shadow-xl text-nowrap text-center mix-blend-exclusion cursor-pointer">
              eCom Kids
            </h3>
            {/* navlink */}
            <ul
              className={`text-sm lg:text-base ${
                fixed
                  ? `fixed top-0 left-0 h-screen w-full flex flex-col items-center px-4 sm:px-8 pt-8 ${colorScheme.bgColor} z-40`
                  : "hidden md:flex gap-4 lg:gap-8 items-center"
              }`}
            >
              <div className="md:hidden border-b my-2 sm:my-4">
                <Link className="pacifico-regular font-medium text-xl w-fit drop-shadow-xl text-nowrap mix-blend-exclusion">
                  eCom Kids
                </Link>
              </div>
              {["Home", "About Us", "Wishlist"].map((item) => (
                <li
                  key={item}
                  className="py-0.5 md:py-2 w-fit hover:underline transition-all duration-500 cursor-pointer"
                >
                  {item}
                </li>
              ))}
              <li className={`group relative py-2 cursor-pointer max-w-fit`}>
                <span className="flex items-center justify-center gap-1">
                  Categories
                  <span className="group-hover:translate-y-1 transition-all duration-300">
                    <IoChevronDown />
                  </span>
                </span>
                <ul
                  className={`static md:absolute left-0 mt-2 shadow-lg rounded w-screen md:w-48 h-0 group-hover:h-[146px] overflow-hidden transition-all duration-500 group-hover:border-y ${colorScheme.bgColor}`}
                >
                  {[
                    "Newborn Essentials",
                    "Baby Bodysuits",
                    "Rompers & Onesies",
                    "Sleepwear & Pajamas",
                    "Outerwear & Jackets",
                    "Accessories",
                  ].map((category) => (
                    <li
                      key={category}
                      className={`px-4 py-0.5 transition-colors duration-300 cursor-pointer hover:bg-white/30 ${colorScheme.textColor} text-opacity-70 hover:text-opacity-100 flex justify-center md:justify-start text-sm font-bold`}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            {/* mobile toggler */}
            <button
              className={`flex flex-col gap-1 md:hidden z-[99] bg-transparent overflow-hidden ${colorScheme.bgColor} hover:mix-blend-exclusion`}
              onClick={toggleRotation}
            >
              <span
                ref={rot1}
                className="transition-all duration-300 w-3 h-0.5 self-end bg-white"
              ></span>
              <span
                ref={rot2}
                className="transition-all duration-300 w-6 h-0.5 bg-white"
              ></span>
              <span
                ref={rot3}
                className="transition-all duration-300 w-3 h-0.5 bg-white"
              ></span>
            </button>
            <ul className={`flex items-center lg:gap-2 text-sm lg:text-base`}>
              <li
                className={`inline-block px-2 pt-1 pb-0.5 h-full rounded transition-all duration-500 cursor-pointer hover:mix-blend-exclusion`}
              >
                LOGIN
              </li>
              <li
                className={`relative pr-2 py-2 mr-1 cursor-pointer ${colorScheme.textColor}`}
              >
                <div className="w-4 md:w-5">
                  <RiShoppingBag4Fill className="w-full h-full" />
                </div>

                <span className="absolute right-[15%] top-0 inline-block text-[8px] sm:text-[10px]">
                  0
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
