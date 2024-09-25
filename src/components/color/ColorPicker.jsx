import { BsGearWide } from "react-icons/bs";
import PropTypes from "prop-types";

export default function ColorPicker({ colorScheme, setColorScheme }) {
  const colorSchemes = {
    "bg-pink-500": "text-white",
    "bg-teal-500": "text-white",
    "bg-orange-500": "text-black",
    "bg-indigo-500": "text-white",
    "bg-lime-500": "text-black",
    "bg-rose-500": "text-white",
    "bg-amber-500": "text-black",
    "bg-violet-500": "text-white",
    "bg-cyan-500": "text-white",
    "bg-slate-600": "text-white",
  };

  const handleColorChange = (newBgColor) => {
    const newTextColor = colorSchemes[newBgColor] || "text-white";
    setColorScheme({ bgColor: newBgColor, textColor: newTextColor });
  };

  return (
    <div className="mode z-[999] fixed -right-[136px] hover:right-0 top-1/2 -translate-y-1/2 border transition-all duration-500">
      <ul className="grid grid-cols-3 gap-2 p-3 relative">
        {Object.keys(colorSchemes).map((color) => (
          <li
            key={color}
            onClick={() => handleColorChange(color)}
            className={`cursor-pointer ${color} w-8 h-8 rounded-full`}
          ></li>
        ))}
        <div
          className={`absolute right-full top-0 p-2 ${colorScheme.bgColor} rounded-s-lg`}
        >
          <BsGearWide
            size={24}
            className={`${colorScheme.textColor} animate-spin`}
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
