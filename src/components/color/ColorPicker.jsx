import { useEffect } from "react";
import { RxGear } from "react-icons/rx";
import PropTypes from "prop-types";

export default function ColorPicker({ colorScheme, setColorScheme }) {
  const colorSchemes = {
    "bg-red-800": "text-white",
    "bg-green-800": "text-pink-200",
    "bg-blue-800": "text-white",
    "bg-orange-800": "text-green-200",
    "bg-indigo-800": "text-white",
    "bg-gray-800": "text-gray-300",
    "bg-black": "text-blue-400",
  };

  // Function to handle color change and save it to localStorage
  const handleColorChange = async (newBgColor) => {
    const newTextColors = colorSchemes[newBgColor] || "text-white";

    const newColorScheme = {
      bgColor: newBgColor,
      textColor: newTextColors,
    };

    setColorScheme(newColorScheme);

    // Save the new color scheme to localStorage
    await localStorage.setItem(
      "selectedColorScheme",
      JSON.stringify(newColorScheme)
    );
  };

  // Retrieve color scheme from localStorage when the component mounts
  useEffect(() => {
    const storedScheme = async () => {
      const savedScheme = await localStorage.getItem("selectedColorScheme");

      if (savedScheme) {
        setColorScheme(JSON.parse(savedScheme)); // Apply the saved color scheme
      }
    };

    storedScheme();
  }, [setColorScheme]);

  return (
    <div className="mode z-[999] fixed -right-[140px] hover:right-0 top-1/2 -translate-y-1/2 border transition-all duration-500 bg-white/70 shadow-lg">
      <ul className="grid grid-cols-3 gap-2 p-3 relative">
        {Object.keys(colorSchemes).map((color) => (
          <li
            key={color}
            onClick={() => handleColorChange(color)}
            className={`cursor-pointer ${color} w-8 h-8 rounded-full duration-300`}
          ></li>
        ))}

        {/* Icon button */}
        <div
          className={`absolute right-full top-0 w-8 aspect-square grid place-items-center border ${colorScheme.bgColor} rounded-s-2xl transition-colors duration-300`}
        >
          <RxGear
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
