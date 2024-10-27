import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ColorPicker from "./components/color/ColorPicker";
import Footer from "./components/home/Footer";
import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import Shop_Gallery from "./components/shopGallery/Shop_Gallery";

function App() {
  const [colorScheme, setColorScheme] = useState({
    bgColor: "bg-sky-800",
    textColor: "text-white",
  });

  return (
    <BrowserRouter>
      <div className={`flex flex-col h-screen`}>
        <Header colorScheme={colorScheme} />
        <main
          className={`flex-grow flex flex-col justify-between py-4 lg:py-12 ${colorScheme.bgColor} bg-opacity-10`}
        >
          <ColorPicker
            colorScheme={colorScheme}
            setColorScheme={setColorScheme}
          />
          <Hero colorScheme={colorScheme} />
          <Shop_Gallery colorScheme={colorScheme} />
        </main>
        <Footer colorScheme={colorScheme} />
      </div>
    </BrowserRouter>
  );
}

export default App;
