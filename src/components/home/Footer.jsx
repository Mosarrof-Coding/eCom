/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
export default function Footer({ colorScheme }) {
  return (
    <footer className={`py-4 ${colorScheme.bgColor}`}>
      <nav className={`block py-3 lg:py-4 border-b-2 border-[#00000025]`}>
        <div className="contizer">
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-10">
            <div className="max-w-full lg:max-w-[600px]">
              <h4 className="text-xl lg:text-2xl font-bold text-white mb-2 lg:mb-3">
                eCom Kids
              </h4>
              <p className={`text-sm lg:text-base ${colorScheme.textColor}`}>
                Discover a world of fun and fashion at ECom Kids! We offer the
                best in children's clothing, toys, and accessories. Shop our
                playful collections designed for comfort and style, perfect for
                every little adventurer. With quality you can trust and prices
                that delight, ECom Kids is your go-to for everything kids love.
                Join our family today and make every day an exciting one for
                your little ones!
              </p>
            </div>
            <div
              className={`max-w-full lg:w-[calc(100%-800px)] flex justify-between flex-wrap gap-8 ${colorScheme.textColor}`}
            >
              <ul className="w-fit whitespace-nowrap">
                <h3 className="font-semibold text-base lg:text-xl mb-2 lg:mb-3 border-b-2 w-fit">
                  Customer Service
                </h3>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/faq"
                  >
                    FAQ
                  </span>
                </li>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/shipping"
                  >
                    Shipping Information
                  </span>
                </li>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/returns"
                  >
                    Returns
                  </span>
                </li>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/contact"
                  >
                    Contact Us
                  </span>
                </li>
              </ul>
              <ul className="w-fit whitespace-nowrap">
                <h3 className="font-semibold text-base lg:text-xl mb-2 lg:mb-3 border-b-2 w-fit">
                  Shop
                </h3>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/toys"
                  >
                    Toys
                  </span>
                </li>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/clothing"
                  >
                    Clothing
                  </span>
                </li>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/books"
                  >
                    Books
                  </span>
                </li>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/games"
                  >
                    Games
                  </span>
                </li>
              </ul>
              <ul className="w-fit whitespace-nowrap">
                <h3 className="font-semibold text-base lg:text-xl mb-2 lg:mb-3 border-b-2 w-fit">
                  About Us
                </h3>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/our-story"
                  >
                    Our Story
                  </span>
                </li>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/careers"
                  >
                    Careers
                  </span>
                </li>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/blog"
                  >
                    Blog
                  </span>
                </li>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/privacy-policy"
                  >
                    Privacy Policy
                  </span>
                </li>
              </ul>
              <ul className="w-fit whitespace-nowrap">
                <h3 className="font-semibold text-base lg:text-xl mb-2 lg:mb-3 border-b-2 w-fit">
                  Follow Us
                </h3>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/our-story"
                  >
                    Facebook
                  </span>
                </li>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/careers"
                  >
                    Twitter
                  </span>
                </li>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/blog"
                  >
                    Instagram
                  </span>
                </li>
                <li>
                  <span
                    className="text-base lg:text-lg inline-block opacity-70 hover:opacity-90 transition-all duration-300 pb-0.5 tracking-wide lg:pb-1"
                    to="/privacy-policy"
                  >
                    You tube
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="text-center pt-4">
        <p className={`${colorScheme.textColor} text-base lg:text-lg`}>
          &copy; 2024 eCom Kids. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
