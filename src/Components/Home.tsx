
import Banner from "./Banner";
import LatestVisas from "../Pages/LatestVisas";
import VisaNewsSection from "../Pages/VisaNewsSection";
import VisaTips from "../Pages/VisaTips";

const Home = () => {
  return (
    <div className="bg-gray-50">
      <Banner />
      <LatestVisas />
      <VisaNewsSection />
      <VisaTips />
    </div>
  );
};

export default Home;