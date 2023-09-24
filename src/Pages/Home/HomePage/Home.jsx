import Banner from "../Banner/Banner";
import FeaturesProducts from "../FeaturesProducts/FeaturesProducts";
import TodaysDeal from "../Todays_deal/TodaysDeal";


const Home = () => {
  return (
    <div className="container">
      <Banner />
      <FeaturesProducts />
      <TodaysDeal />
    </div>
  );
};

export default Home;