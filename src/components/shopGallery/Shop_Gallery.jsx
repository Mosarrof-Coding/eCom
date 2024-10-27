/* eslint-disable react/prop-types */
import tom from "../../assets/foor.png";
import useFetch from "../hooks/useFetch";
export default function Shop_Gallery({ colorScheme }) {
  const { data, loading, error } = useFetch();
  if (loading) {
    return (
      <section>
        <div className="contizer text-lg lg:text-xl font-bold text-yellow-500">
          Loading...
        </div>
      </section>
    );
  }
  if (error) {
    return (
      <section>
        <div className="contizer text-lg lg:text-xl font-bold text-red-500">
          Something went wrong!
        </div>
      </section>
    );
  }
  return (
    <>
      <section>
        <div className="contizer">
          <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {data.map((datam) => (
              <div
                key={datam.id}
                className="item border border-emerald-600 rounded"
              >
                <div className="">
                  <img
                    src={tom}
                    alt=""
                    className="scale-75 hover:scale-95 transition-all duration-300"
                  />
                </div>
                <ul className="name p-2">
                  <p>{datam.id}</p>
                  <li className="text-sm md:text-base font-medium text-blue-400">
                    Googoogs
                  </li>
                  <li className="text-sm md:text-base mix-blend-exclusion">
                    Hoody
                  </li>
                  <li className="text-sm md:text-base mix-blend-exclusion flex gap-2 items-center">
                    <del className="text-red-700">189</del>
                    <span className="text-blue-700">179</span>
                  </li>
                  <li className="text-sm md:text-base mix-blend-exclusion">
                    ⭐⭐⭐⭐⭐
                  </li>
                  <li
                    className={`${colorScheme.bgColor} bg-opacity-50 hover:bg-opacity-80 ${colorScheme.textColor} px-6 lg:px-10 py-0.5 lg:py-1 rounded transition-all duration-300 cursor-pointer inline-block mt-2 lh:mt-4`}
                  >
                    Add to Cart
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
