import Landing from "sections/Landing";
import Pricing from "sections/Pricing";
import Faq from "sections/Faq";
// import Video from "sections/Video";
import Gallery from "sections/Gallery";
import Services from "sections/Services";
// import CompanyLogos from "sections/CompanyLogos";
// import Footer from "sections/Footer";

const Home: React.FC = () => {
  return (
    <div className="">
      <Landing />
      <Gallery />
      <Services />
      <Pricing />
      <Faq />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
