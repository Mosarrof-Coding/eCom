import { BsGearWide } from "react-icons/bs";
import PropTypes from "prop-types";

/* eslint-disable react/prop-types */
export default function ColorPicker({ colorScheme, setColorScheme }) {
  const colorSchemes = {
    "bg-red-600": "text-white",
    "bg-green-600": "text-white",
    "bg-blue-600": "text-white",
    "bg-sky-600": "text-white",
    "bg-yellow-600": "text-black",
    "bg-purple-600": "text-white",
    "bg-gray-800": "text-white",
    "bg-emerald-600": "text-white",
  };

  const handleColorChange = (newBgColor) => {
    const newTextColor = colorSchemes[newBgColor] || "text-white";
    setColorScheme({ bgColor: newBgColor, textColor: newTextColor });
  };

  return (
    <div className="mode fixed -right-28 hover:right-0 top-1/2 -translate-y-1/2 border transition-all duration-500">
      <ul className="grid grid-cols-3 gap-3 p-3 relative">
        <li
          onClick={() => handleColorChange("bg-red-600")}
          className="cursor-pointer bg-red-600 w-5 aspect-square rounded-full"
        ></li>
        <li
          onClick={() => handleColorChange("bg-green-600")}
          className="cursor-pointer bg-green-600 w-5 aspect-square rounded-full"
        ></li>
        <li
          onClick={() => handleColorChange("bg-blue-600")}
          className="cursor-pointer bg-blue-600 w-5 aspect-square rounded-full"
        ></li>
        <li
          onClick={() => handleColorChange("bg-sky-600")}
          className="cursor-pointer bg-sky-600 w-5 aspect-square rounded-full"
        ></li>
        <li
          onClick={() => handleColorChange("bg-yellow-600")}
          className="cursor-pointer bg-yellow-600 w-5 aspect-square rounded-full"
        ></li>
        <li
          onClick={() => handleColorChange("bg-purple-600")}
          className="cursor-pointer bg-purple-600 w-5 aspect-square rounded-full"
        ></li>
        <li
          onClick={() => handleColorChange("bg-gray-600")}
          className="cursor-pointer bg-gray-600 w-5 aspect-square rounded-full"
        ></li>
        <li
          onClick={() => handleColorChange("bg-emerald-600")}
          className="cursor-pointer bg-emerald-600 w-5 aspect-square rounded-full"
        ></li>
        <div
          className={`absolute right-full top-0 p-1.5 ${colorScheme.bgColor} rounded-s-lg`}
        >
          <BsGearWide
            size={24}
            className={` ${colorScheme.textColor} animate-spin`}
          />
        </div>
      </ul>
    </div>
  );
}

// PropTypes to validate props
ColorPicker.propTypes = {
  colorScheme: PropTypes.shape({
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
  }).isRequired,
  setColorScheme: PropTypes.func.isRequired,
};
