import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import SectionBenefit from "./Components/SectionBenefit";
import SectionFlow from "./Components/SectionFlow";
import Testimonial from "./Components/Testimonial";
import Usp from "./Components/Usp";
import Faq from "./Components/Faq";
import Cta from "./Components/Cta";
import Footer from "./Components/Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Pricing from "./Components/Pricing";
import Error from "./Components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Banner />
        <SectionBenefit />
        <SectionFlow />
        <Usp />
        <Testimonial />
        <Faq />
        <Cta />
        <Footer />
        {/* <SignInPage /> */}
      </>
    ),
  },
  {
    path: "/pricing",
    element: (
      <>
        <Navbar />
        <Pricing />
        <Faq />
        <Cta />
        <Footer />
      </>
    ),
  },
<<<<<<< HEAD
  {
    path: "*",
    element: (
      <>
        <Navbar />
        <Error />
        <Footer />
      </>
    ),
  },
  // {
  //   path: "/blog",
  //   element: (
  //     <>
  //       <Navbar />
  //       <Blog />
  //       <Cta />
  //       <Footer />
  //     </>
  //   ),
  // },
=======
>>>>>>> a3b6f53e8b25cfc5997a2b8f5acd45acb14f7d4a
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
