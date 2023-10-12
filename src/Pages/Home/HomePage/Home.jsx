import Banner from "../Banner/Banner";
import Delevery from "../Delevery/Delevery";
import FeaturesProducts from "../FeaturesProducts/FeaturesProducts";
import Review from "../Review/Review";
import TodaysDeal from "../Todays_deal/TodaysDeal";


const Home = () => {
  return (
    <div className="container">
      <Banner />
      <FeaturesProducts />
      <TodaysDeal />
      <Delevery />
      <Review />
    </div>
  );
};

export default Home;