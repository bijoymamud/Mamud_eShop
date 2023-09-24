import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {

  const viewDetails = useLoaderData();
  const { img, sub_title, product_name, price } = viewDetails;

  const productsDetails = viewDetails.productDetails.map(singleProduct => singleProduct)

  return (
    <div>
      <img src={img} alt="" />
    </div>
  );
};

export default ProductDetails;