import { Link } from "react-router-dom";


const SingleFeatureProduct = ({ product }) => {

  const { id, img, sub_title, product_name, price } = product;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <p>{sub_title}</p>
          <h2 className="card-title">{product_name}</h2>
          <p>${price}</p>
          <div className="card-actions justify-end">
            <Link to={`/productDetails/${id}`} className="btn btn-sm mt-2">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeatureProduct;