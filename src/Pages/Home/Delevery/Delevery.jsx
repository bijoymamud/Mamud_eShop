import React from 'react';
import { FaMapMarkedAlt, FaShoppingCart, FaUsers } from 'react-icons/fa';

const Delevery = () => {
  return (
    <div className=' container mx-auto w-5/6 rounded-xl py-20'>
      <div className='flex items-center gap-10'>
        <div className='w-1/2'
        >
          <img className='w-full' src="https://i.ibb.co/D75BTpQ/red-delivery-car-deliver-express-shipping-fast-delivery-background-3d-rendering-illustration-removeb.png" alt="" />
        </div>
        <div >
          <div>
            <h2 className='text-4xl pb-5 font-extrabold '>Others Deliver <br /> Parcels<span className='text-sm'>,</span> We Deliver <br /><span className='text-orange-500'>Emotions</span></h2>
            <p className='w-1/2 text-gray-700'>We take care of order fulfillment, collection, transport, tracking and delevery of percel</p>
          </div>
          <div className='grid grid-cols-3 gap-2 py-10'>
            <div className='flex gap-5 items-center'>
              <div >
                <FaShoppingCart className='text-black text-3xl ' />
              </div>
              <div className='font-extrabold'>
                <h2>10k+</h2>
                <p>Parcels Delivered</p>
              </div>
            </div>

            <div className='flex gap-5 items-center'>
              <div>
                <FaMapMarkedAlt className='text-black text-3xl' />
              </div>
              <div className='font-extrabold'>
                <h2>20+</h2>
                <p>Towns & Even More</p>
              </div>
            </div>

            <div className='flex gap-5 items-center'>
              <div>
                <FaUsers className='text-black text-3xl' />
              </div>
              <div className='font-extrabold'>
                <h2>500</h2>
                <p>Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Delevery;
