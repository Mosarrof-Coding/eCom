import { RxGear } from "react-icons/rx";
import PropTypes from "prop-types";

export default function ColorPicker({ colorScheme, setColorScheme }) {
  const colorSchemes = {
    "bg-blue-900": "text-yellow-500",
    "bg-rose-800": "text-white",
    "bg-orange-800": "text-purple-300",
    "bg-indigo-500": "text-white",
    // You can add more color schemes as needed
  };

  const handleColorChange = (newBgColor) => {
    const newTextColors = colorSchemes[newBgColor] || "text-white"; // Default to white if color not in schemes

    setColorScheme({
      bgColor: newBgColor,
      textColor: newTextColors, // Set the corresponding text color
    });
  };

  return (
    <div className="mode z-[999] fixed -right-[136px] hover:right-0 top-1/2 -translate-y-1/2 border transition-all duration-500 bg-white/70 shadow-lg">
      <ul className="grid grid-cols-3 gap-2 p-3 relative">
        {/* Loop through available color schemes */}
        {Object.keys(colorSchemes).map((color) => (
          <li
            key={color}
            onClick={() => handleColorChange(color)}
            className={`cursor-pointer ${color} w-8 h-8 rounded-full duration-300`}
          ></li>
        ))}

        {/* Icon button */}
        <div
          className={`absolute right-full top-0 w-12 h-12 grid place-items-center border ${colorScheme.bgColor} rounded-s-lg transition-colors duration-300`}
        >
          <RxGear
            size={28}
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
