import React from 'react';
import { useForm } from "react-hook-form";
import { FaClock, FaEnvelopeOpen, FaLocationArrow, FaPhoneAlt, FaTelegram } from "react-icons/fa";



const Contact = () => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();

  };


  return (
    <div className='md:pb-40'>
      <div className='md:flex  md:justify-between md:items-center gap-10 md:px-20 my-10'>

        <div className='md:w-1/2'>
          <img src="https://i.ibb.co/ggwycs1/contact-removebg-preview.png" alt="" />
        </div>
        <div className='md:w-1/2 px-10 '>
          <h2 className='text-2xl tracking-wide text-center bg-orange-300 text-white'>Contact Us</h2>

          <div className='py-5'>
            <div className='flex items-center gap-10 py-10'>
              <FaLocationArrow className='text-2xl text-orange-500 font-bold' />
              <div>
                <h2 className=' font-bold text-orange-500 tracking-widest '>HEAD OFFICE</h2>
                <p>Gatepar, Jamalpur-2000</p>
              </div>
            </div>

            <div className='flex items-center gap-10 pb-10 '>
              <FaPhoneAlt className='text-2xl font-bold text-orange-500' />
              <div>
                <h2 className=' font-bold text-orange-500 tracking-widest'>PHONE NUMBER</h2>
                <p>+880123456789</p>
                <p>+012 (345) 678 99</p>
              </div>
            </div>

            <div className='flex items-center gap-10 pb-10'>
              <FaEnvelopeOpen className='text-2xl font-bold text-orange-500' />
              <div>
                <h2 className=' font-bold text-orange-500 tracking-widest'>EMAIL </h2>
                <p>support@gmail.com</p>
                <p>medibazar.net</p>
              </div>
            </div>

            <div className='flex items-center gap-10 pb-10 '>
              <FaClock className='text-2xl font-bold text-orange-500' />
              <div>
                <h2 className=' font-bold text-orange-500 tracking-widest'>OFFICE TIME </h2>
                <p>Sunday - Monday</p>
                <p>08 am - 09 pm</p>
              </div>
            </div>

          </div>
        </div>



      </div>


      <div className='pt-20'>
        <div className='text-center'>
          <h2 className='text-3xl tracking-wider text-center text-orange-300'>Send Us A Message</h2>
          <p className='text-slate-400'>Sending Inspiration, One Message at a Time..</p>
        </div>

        <div className='py-16'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='md:w-4/6 px-5 md:px-0 mx-auto' >
              <div className='md:grid md:grid-cols-3 mb-2 md:mb-0 gap-5'>
                <div className='form-control'>

                  <input
                    {...register('name', { required: true })}
                    type='text'
                    placeholder='Enter your name'
                    className='bg-transparent p-8 mb-2 md:mb-0 rounded-none input input-bordered'
                  />

                </div>
                <div className='form-control'>

                  <input
                    {...register('email', { required: true })}
                    type='email'
                    placeholder='Enter your email'
                    className='bg-transparent  mb-2 md:mb-0 p-8 rounded-none input input-bordered'

                  />


                </div>

                <div className='form-control'>

                  <input
                    {...register('number', { required: true })}
                    type='number'
                    placeholder='Enter your Number'
                    className='bg-transparent p-8 rounded-none input input-bordered'
                  />

                </div>
                <div className='form-control'>


                </div>

              </div>

              {/* <textarea
                {...register('text', { required: true })}
                type='text'
                placeholder='Enter your Number'
                className='bg-transparent w-full p-8 rounded-none input input-bordered'
              /> */}
              <textarea
                {...register('message', { required: true })}
                placeholder="Your Message"

                className="textarea p-8 rounded-none textarea-bordered textarea-sm w-full " ></textarea>
              <div className='text-center pt-3'>
                <button
                  type="submit"
                  className='md:w-1/6 items-center btn btn-primary btn-sm text-white '>Send Message <FaTelegram className='text-xl ms-2' /></button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;