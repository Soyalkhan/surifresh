import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import MarqueeProduct from "./components/ProductMarquee/MarqueeProduct";
import FeaturedProduct from "./components/Featuredproducts/FeaturedProduct";
import KeyFactors from "./components/KeyFactors/KeyFactors";
import Clientele from "./components/Clientele/Clientele";
import ImageBanner from "./components/ImageBanner/ImageBanner";
import JuiceComparison from "./components/Comparison/JuiceComparison";
import Footer from "./components/Footer/Footer";
import LogoSlider from "./components/LogoSlider/LogoSlider";
import InvestorRelations from "./components/InvestorRelations/InvestorRelations";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"; // whwn go to any page
import FAQ from "./components/FAQ/Faq";
import ContactUs from "./components/Contact/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import Fromorchardtomarket from "./components/Fromorchardtomarket/Fromorchardtomarket";
import Dips from "./components/Dips/Dips";
import Frozen from "./components/Frozen/Frozen";
import Juice from "./components/Juices/Juice";
import Loader from "./components/Loader/Loader";
import License from "./components/License/License";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <Router>
       <ScrollToTop/> 
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <MarqueeProduct />
              <FeaturedProduct />
              <KeyFactors />
              <Clientele />
              <ImageBanner />
              <JuiceComparison />
              <LogoSlider />
            </>
          }
        />
        <Route path="/investor-relations" element={<InvestorRelations />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/fromorchardtomarket" element={<Fromorchardtomarket />} />
        <Route path="/Dips" element={<Dips />} />
        <Route path="/Frozen" element={<Frozen />} />
        <Route path="/Juice" element={<Juice />} />
        <Route path="/Licenses" element={<License />} />
        <Route path="/Privacy-policy" element={<PrivacyPolicy />} />

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
