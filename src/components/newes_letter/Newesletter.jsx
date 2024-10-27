/* eslint-disable react/prop-types */
export default function Newesletter({ colorScheme }) {
  return (
    <>
      <div
        className={`w-full xl:w-[440px] 2xl:w-[480px] ${colorScheme.textColor} text-opacity-95`}
      >
        <h3 className="mix-blend-exclusion text-base lg:text-xl">
          Get Offers by Submitting Your Email.
        </h3>
        <form action="" className="mt-2">
          <div className="flex items-center rounded overflow-hidden text-base lg:text-lg">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className={`py-0.5 sm:py-1 md:py-0.5 lg:py-1.5 px-2 focus:outline-${colorScheme.bgColor} w-full`}
            />
            <input
              type="button"
              value={"Submit"}
              className={`py-0.5 sm:py-1 md:py-0.5 lg:py-1.5 px-4 lg:px-8 ${colorScheme.bgColor} bg-opacity-60 hover:bg-opacity-100 hover:shadow-lg w-fit cursor-pointer transition-all duration-300`}
            />
          </div>
        </form>
      </div>
    </>
  );
}
