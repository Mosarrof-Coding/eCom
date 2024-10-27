/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import Newesletter from "../newes_letter/Newesletter";
export default function Footer({ colorScheme }) {
  return (
    <>
      <footer className={`${colorScheme.bgColor} bg-opacity-80`}>
        <nav className="block py-3 lg:py-6">
          <div className="contizer">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8">
              <div
                className={`col-span-6 lg:col-span-4 ${colorScheme.textColor}`}
              >
                <h3 className="cursor-pointer pacifico-regular text-xl lg:text-3xl font-medium md:font-bold mb-2 lg:mb-3 w-fit drop-shadow-xl mix-blend-exclusion">
                  eCom Kids
                </h3>
                <p className={` ${colorScheme.textColor} text-opacity-80`}>
                  Enjoy stylish apparel for your sweet kids, perfect for every
                  occasion! Our collection ensures they look great and feel
                  comfortable in every sphere of their lives.
                </p>
              </div>
              <div
                className={`col-span-6 lg:col-span-8 flex justify-between flex-wrap gap-4 ${colorScheme.textColor}`}
              >
                <ul className="w-fit whitespace-nowrap flex flex-col gap-0.5 lg:gap-1">
                  <h3 className="font-semibold text-base lg:text-lg mb-2 lg:mb-3 border-b w-fit">
                    Customer Service
                  </h3>
                  <li>
                    <Link
                      className="text-sm lg:text-base inline-block opacity-80 hover:opacity-100 transition-all duration-300 tracking-wide font-light"
                      to="/faq"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm lg:text-base inline-block opacity-80 hover:opacity-100 transition-all duration-300 tracking-wide font-light"
                      to="/shipping"
                    >
                      Shipping Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm lg:text-base inline-block opacity-80 hover:opacity-100 transition-all duration-300 tracking-wide font-light"
                      to="/returns"
                    >
                      Returns
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm lg:text-base inline-block opacity-80 hover:opacity-100 transition-all duration-300 tracking-wide font-light"
                      to="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <ul className="w-fit whitespace-nowrap flex flex-col gap-0.5 lg:gap-1">
                  <h3 className="font-semibold text-base lg:text-lg mb-2 lg:mb-3 border-b w-fit">
                    Shop
                  </h3>
                  <li>
                    <Link
                      className="text-sm lg:text-base inline-block opacity-80 hover:opacity-100 transition-all duration-300 tracking-wide font-light"
                      to="/toys"
                    >
                      Toys
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm lg:text-base inline-block opacity-80 hover:opacity-100 transition-all duration-300 tracking-wide font-light"
                      to="/clothing"
                    >
                      Clothing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm lg:text-base inline-block opacity-80 hover:opacity-100 transition-all duration-300 tracking-wide font-light"
                      to="/books"
                    >
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm lg:text-base inline-block opacity-80 hover:opacity-100 transition-all duration-300 tracking-wide font-light"
                      to="/games"
                    >
                      Games
                    </Link>
                  </li>
                </ul>
                <ul className="w-fit whitespace-nowrap flex flex-col gap-0.5 lg:gap-1">
                  <h3 className="font-semibold text-base lg:text-lg mb-2 lg:mb-3 border-b w-fit">
                    About Us
                  </h3>
                  <li>
                    <Link
                      className="text-sm lg:text-base inline-block opacity-80 hover:opacity-100 transition-all duration-300 tracking-wide font-light"
                      to="/our-story"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm lg:text-base inline-block opacity-80 hover:opacity-100 transition-all duration-300 tracking-wide font-light"
                      to="/careers"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm lg:text-base inline-block opacity-80 hover:opacity-100 transition-all duration-300 tracking-wide font-light"
                      to="/blog"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm lg:text-base inline-block opacity-80 hover:opacity-100 transition-all duration-300 tracking-wide font-light"
                      to="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
                <ul className="w-full xl:w-fit whitespace-nowrap">
                  <Newesletter colorScheme={colorScheme} />
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className={`py-1 lg:py-2 ${colorScheme.bgColor}`}>
          <div className="contizer flex justify-center sm:justify-between gap-6 items-center flex-wrap">
            <p
              className={`text-sm lg:text-base font-light ${colorScheme.textColor}`}
            >
              &copy; 2024 eCom Kids. All rights reserved.
            </p>
            <div className={`flex items-center gap-3 ${colorScheme.textColor}`}>
              <span>
                <Link
                  className="opacity-80 hover:opacity-100 transition-all duration-300"
                  to="/FiFacebook"
                >
                  <FiFacebook size={19} />
                </Link>
              </span>
              <span>
                <Link
                  className="opacity-80 hover:opacity-100 transition-all duration-300"
                  to="/FiTwitter"
                >
                  <FiTwitter size={19} />
                </Link>
              </span>
              <span>
                <Link
                  className="opacity-80 hover:opacity-100 transition-all duration-300"
                  to="/FiInstagram"
                >
                  <FiInstagram size={19} />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
