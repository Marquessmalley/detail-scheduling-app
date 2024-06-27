import Landing from "sections/Landing";
import Pricing from "sections/Pricing";
import Faq from "sections/Faq";
// import Video from "sections/Video";
import Services from "sections/Services";
// import CompanyLogos from "sections/CompanyLogos";

const Home = () => {
  return (
    <div>
      <Landing />
      <Services />
      <Pricing />
      <Faq />
    </div>
  );
};

export default Home;
