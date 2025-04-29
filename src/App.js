import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import SectionBenefit from "./Components/SectionBenefit";
import SectionFlow from "./Components/SectionFlow";
import Testimonial from "./Components/Testimonial";
import Usp from "./Components/Usp";
import Faq from "./Components/Faq";
import Cta from "./Components/Cta";
import Footer from "./Components/Footer";
import Test from "./Components/Test";
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <SectionBenefit />
      <SectionFlow />
      <Usp />
      <Testimonial />
      <Faq />
      <Cta />
      <Footer />
      {/* <Test /> */}
    </div>
  );
}

export default App;
