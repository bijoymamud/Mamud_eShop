import React from 'react';

const Faq = () => {
  return (
    <div>
      <div className='w-5/6 mx-auto pb-40'

      >
        <h1 className="text-4xl mb-10 text-center">Frequently Ask Question</h1>
        <div className=" md:flex items-center justify-between container mx-auto gap-5  py-10 p-5">
          <div className="w-full">
            <img
              className="w-1/2 mx-auto"
              src="https://cdn-icons-png.flaticon.com/512/4403/4403555.png"
              alt=""
            />
          </div>

          <div className="dark: ag-none w-full space-y-4 ">
            <div className="border   px-5 shadow-md rounded-md">
              <details>
                <summary className="py-2 outline-none cursor-pointer text-xl ">
                  What is Medibazar?
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-gray-500 ">
                    <span className="font-semibold text-gray-900 ">Medibazar </span> is more than just a medical equipment store; it's a commitment to your health and well-being. We believe that having access to the right tools and equipment can make a world of difference in your healthcare journey.
                  </p>
                </div>
              </details>
            </div>

            <div className="border   px-5 shadow-md rounded-md">
              <details>
                <summary
                  className="py-2 outline-none cursor-pointer 
               text-xl"
                >
                  Why Choose Medibazar?
                </summary>
                <div className="px-4 pb-4">
                  <p className=" ">
                    <ul>
                      <li className='text-gray-500 pb-3'>
                        <span className='font-semibold text-gray-900'>Comprehensive Selection:</span> Explore a vast and carefully curated collection of medical equipment and supplies. From diagnostic tools to daily living aids, we offer a wide range of products to meet your unique needs.
                      </li>


                      <li className='text-gray-500 pb-3'>
                        <span className='font-semibold text-gray-900'>Quality Assurance: </span> Your health is paramount. We prioritize quality and reliability in every product we offer, ensuring that you receive the best solutions available on the market.
                      </li>
                    </ul>
                  </p>
                </div>
              </details>
            </div>

            <div className="border   px-5 shadow-md rounded-md">
              <details>
                <summary
                  className="py-2 outline-none cursor-pointer 
               text-xl"
                >
                  What types of medical equipment & supplies we offer?
                </summary>
                <div className="px-4 pb-4">
                  <p className=" text-gray-500 pb-3">
                    We offer a wide range of products, including diagnostic tools, mobility aids, home healthcare essentials, and more. Explore our catalog for details.
                  </p>
                </div>
              </details>
            </div>

            <div className="border   px-5 shadow-md rounded-md">
              <details>
                <summary
                  className="py-2 outline-none cursor-pointer 
                text-xl"
                >
                  Are our products compliant with regulatory standards?
                </summary>
                <div className="px-4 pb-4">
                  <p className=" text-gray-500">
                    We strive to offer products that meet relevant regulatory standards and certifications. If you have specific compliance requirements, please contact our customer support for detailed information on a particular product.
                  </p>
                </div>
              </details>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;