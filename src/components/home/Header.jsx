/* eslint-disable react/prop-types */
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoChevronDown } from "react-icons/io5";

export default function Header({ colorScheme }) {
  return (
    <header className={`${colorScheme.bgColor}`}>
      <nav className={`py-1 lg:py-2 shadow-md ${colorScheme.textColor}`}>
        <div className="contizer px-4 lg:px-10">
          <div className="navMain flex justify-between items-center">
            <h3 className="pacifico-regular text-xl lg:text-2xl font-bold w-fit drop-shadow-xl text-nowrap">
              eCom Kids
            </h3>
            <ul className="flex gap-6 items-center font-medium">
              {["Home", "Shop", "Blog", "About Us", "Wishlist"].map((item) => (
                <li
                  key={item}
                  className="px-3 py-2 hover:underline transition-all duration-500 cursor-pointer"
                >
                  {item}
                </li>
              ))}
              <li className="group relative px-3 py-2 hover:underline transition-all duration-500 cursor-pointer">
                <span className="flex items-center gap-1">
                  Categories
                  <IoChevronDown />
                </span>
                <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white text-gray-800 shadow-lg rounded w-48 overflow-hidden">
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
                      className="px-4 py-2 hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <ul className="flex gap-6 items-center font-medium">
              <li className="px-3 py-2 rounded hover:underline transition-all duration-500 cursor-pointer">
                Profile
              </li>
              <li className="relative px-3 py-2 hover:underline transition-all duration-500 cursor-pointer">
                <RiShoppingBag4Fill size={22} color="white" />
                <span className="absolute right-0 top-0 inline-block text-white">
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
