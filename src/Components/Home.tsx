
import Banner from "./Banner";
import LatestVisas from "../Pages/LatestVisas";
import VisaNewsSection from "../Pages/VisaNewsSection";
import VisaTips from "../Pages/VisaTips";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="px-12 bg-gradient-to-r from-teal-500 to-blue-600">
        <LatestVisas></LatestVisas>
        <VisaNewsSection></VisaNewsSection>
        <VisaTips></VisaTips>
      </div>
    </div>
  );
};

export default Home;
