import { ColorContextProvider } from "./context/ColorContext";
import ColorSection from "./section/ ColorSection";
import BatterySection from "./section/BatterySection";
import CameraSection from "./section/CameraSection";
import DesignSection from "./section/DesignSection";
import DisplaySection from "./section/DisplaySection";
import HeroSection from "./section/HeroSection";
import PhoneModel from "./section/PhoneModel";
import PricingSection from "./section/PricingSection";
import ProcessorSection from "./section/ProcessorSection";
import Quote from "./section/Quote";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Quote />
      <PhoneModel />
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <ColorContextProvider>
        <ColorSection />
        <CameraSection />
        <PricingSection />
      </ColorContextProvider>
    </>
  );
}

export default App;
