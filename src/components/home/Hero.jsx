import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Hero({ colorScheme }) {
  return (
    <>
      <section className="">
        <div className="px-[15px] min-h-[36vh] grid place-items-center">
          <div className="kidsHeading max-w-full md:max-w-[780px] m-auto text-center">
            <h3 className="text-lg sm:text-xl lg:text-3xl text-rose-700 font-semibold">
              Quality for Little Superstars
            </h3>
            <h1 className="text-xl sm:text-2xl lg:text-[40px] font-bold leading-8 lg:leading-relaxed text-blue-800 tracking-tight">
              Durable, Stylish, and Kid-Approved Shop.
            </h1>
            <h5 className="text-sm sm:text-base lg:text-xl tracking-wide text-gray-600">
              Our carefully curated collection offers stylish clothes and
              long-lasting toys that kids love. Every item is designed to meet
              the needs of busy, active children.
            </h5>
            <Link
              to="/shop_gallery"
              className={`inline-flex text-base sm:text-lg lg:text-xl font-medium ${colorScheme.bgColor} bg-opacity-70 hover:bg-opacity-100 ${colorScheme.textColor} px-8 lg:px-12 rounded sm:leading-8 md:leading-10 lg:leading-loose mt-4 lg:mt-10 transition-all duration-300`}
            >
              Shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
