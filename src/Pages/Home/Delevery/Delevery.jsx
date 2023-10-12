import React from 'react';
import { FaDollarSign, FaMapMarkedAlt, FaShippingFast, FaShoppingCart, FaUnlockAlt, FaUsers } from 'react-icons/fa';

const Delevery = () => {
  return (
    <div className=' container mx-auto w-5/6 rounded-xl py-32'>
      <div className='flex items-center gap-10 pb-20'>
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

      <div className='bg-gray-100 p-20 rounded-lg w-full my-10'>
        <div className='grid grid-cols-3 gap-10 mx-auto'>
          <div className='flex items-start justify-between gap-5 bg-white p-4 rounded-lg shadow-lg'>
            <FaShippingFast className='text-6xl text-sky-500 ease-in duration-300' />
            <div>
              <h1 className='text-2xl pb-3'>Free Delivery</h1>
              <p className='text-gray-400'>Sed perspicia unde omnis iste nat error voluptate accus</p>
            </div>
          </div>

          <div className='flex items-start justify-between gap-5 bg-white p-4 rounded-lg shadow-lg'>
            <FaDollarSign className='text-4xl text-rose-600' />
            <div>
              <h1 className='text-2xl pb-3'>Money Back</h1>
              <p className='text-gray-400'>Sed perspicia unde omnis iste nat error voluptate accus</p>
            </div>
          </div>

          <div className='flex items-start justify-between gap-5 bg-white p-4 rounded-lg shadow-lg'>
            <FaUnlockAlt className='text-4xl text-yellow-400' />
            <div>
              <h1 className='text-2xl pb-3'><span className='text-green-600 font-bold'>100%</span> Secure</h1>
              <p className='text-gray-400'>Sed perspicia unde omnis iste nat error voluptate accus</p>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Delevery;
