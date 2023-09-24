import { useEffect, useState } from "react";
import { FaHeart, FaStar, FaUserCheck } from "react-icons/fa";
import SingleFeatureProduct from "../SingleFeatureProduct/SingleFeatureProduct";



const FeaturesProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/public/Features_Products.json")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])


  return (
    <div>
      <div className='container w-5/6 mx-auto'>
        <div className=''>
          <h2 className="text-3xl font-bold">Features Products</h2>

          <div className='flex justify-between items-center'>
            <div>
              <p className="text-slate-500">Elevate Your Life with Features Products.</p>
            </div>
            <div>

              <div className="tabs tabs-boxed ">
                <a className="tab tab-active flex items-center gap-2">
                  <FaUserCheck className="mb-1" />
                  <h2>Best Seller</h2>
                </a>
                <a className="tab flex items-center gap-2 ">
                  <FaHeart />
                  <h2>Top Rated</h2>
                </a>
                <a className="tab flex items-center gap-2">
                  <FaStar className="mb-1" />
                  <h2>Popular</h2>
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-3 py-20 gap-10">
          {
            products.map(product => <SingleFeatureProduct key={product.id}
              product={product}></SingleFeatureProduct>)
          }

        </div>

      </div>


    </div>
  );
};

export default FeaturesProducts;