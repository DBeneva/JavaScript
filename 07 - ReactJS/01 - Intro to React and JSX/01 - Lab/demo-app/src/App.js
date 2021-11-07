import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mission from "./components/Mission";
import LatestNews from "./components/LatestNews";
import OurServices from "./components/OurServices";
import PricingPlan from "./components/PricingPlan";
import Search from "./components/Search";
import WhatWeDo from "./components/WhatWeDo";

function App() {
  return (
    <div className="App">
      <div className="back-to-top"></div>

      <Header />

      <WhatWeDo />

      <AboutUs />

      <OurServices />

      <Search />

      <PricingPlan />

      <Mission />

      <LatestNews />
      
      <Footer />
    </div>
  );
}

export default App;