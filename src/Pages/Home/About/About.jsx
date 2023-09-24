import React from 'react';
import CountUp from 'react-countup';
import { FaCheckCircle, FaHistory, FaLongArrowAltRight, FaMedkit, FaTruck, FaUsers } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const About = () => {

  return (
    <div className='py-20'>
      <div className='md:flex border-b-2 items-center justify-between'>
        <div className='md:w-1/2  pb-10'>
          <img className='mx-auto' src="https://www.devsnews.com/template/medibazar/medibazar/assets/img/about/01.png" alt="" />
        </div>
        <div className='md:w-1/2'>

          <div className='flex items-start gap-5 pb-10'>
            <FaCheckCircle className='text-2xl mt-1 text-orange-500 ' />
            <div>
              <h2 className='text-3xl font-extrabold text-orange-500' >Our Mission & Vision</h2>
              <p className='w-4/6 text-lg text-slate-400'>Quis autem vel eum iure reprehenderit quin voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum</p>
            </div>
          </div>
          <div className='flex items-start gap-5'>
            <FaCheckCircle className='text-2xl mt-1 text-orange-500 ' />
            <div>
              <h2 className='text-3xl font-extrabold text-orange-500' >Service For Covid -19</h2>
              <p className='w-4/6 text-lg text-slate-400'>But I must explain to you how all this mistaken idea denouncing pleasure and praising pain was born and complete account</p>
            </div>
          </div>
          <div className='pt-10 '>
            <Link to='/contact' className=" btn btn-sm bg-warning  ms-5  font-bold">For More +</Link>
          </div>
        </div>

      </div>

      <div className='achivement md:py-10 w-5/6 mx-auto border-b-2'>
        <h2 className='text-center py-10 text-4xl font-extrabold text-pink-600 ... pb-20'>Our Achievement</h2>
        <div className='grid grid-cols-4 gap-5 items-center'>

          <div>
            <CountUp start={1000} end={2500} delay={0.1}>
              {({ countUpRef }) => (
                <div className='text-center'>
                  <FaUsers className='mb-3  mx-auto text-4xl font-extrabold text-orange-600' />
                  <span className='text-4xl pb-2 border-b-4  border-indigo-500 font-extrabold' ref={countUpRef} />
                  {/* <div className='  w-[100px]'></div> */}
                  <h2 className='font-bold pt-8 text-gray-400 '>SATICFIED CLIENTS</h2>
                </div>
              )}
            </CountUp>
          </div>

          <div>
            <CountUp start={1000} end={6735} delay={0.1}>
              {({ countUpRef }) => (
                <div className='text-center'>
                  <FaTruck className='mb-3 mx-auto  text-4xl font-extrabold text-orange-600' />
                  <span className='text-4xl pb-2 border-b-4  border-indigo-500 font-extrabold' ref={countUpRef} />
                  {/* <div className='  w-[100px]'></div> */}
                  <h2 className='font-bold pt-8 text-gray-400 '>DELEVERY COMPLETED</h2>
                </div>
              )}
            </CountUp>
          </div>

          <div>
            <CountUp start={0} end={47} delay={0.1}>
              {({ countUpRef }) => (
                <div className='text-center'>
                  <FaMedkit className='mb-3 mx-auto text-4xl font-extrabold text-orange-600' />
                  <span className='text-4xl pb-2 border-b-4  border-indigo-500 font-extrabold' ref={countUpRef} />
                  {/* <div className='  w-[100px]'></div> */}
                  <h2 className='font-bold pt-8 text-gray-400 '>COVID-19 EQUIPMENT</h2>
                </div>
              )}
            </CountUp>
          </div>

          <div>
            <CountUp start={0} end={30} delay={0.1}>
              {({ countUpRef }) => (
                <div className='text-center'>
                  <FaHistory className='mb-3 mx-auto text-4xl font-extrabold text-orange-600' />
                  <span className='text-4xl pb-2 border-b-4  border-indigo-500 font-extrabold' ref={countUpRef} />
                  {/* <div className='  w-[100px]'></div> */}
                  <h2 className='font-bold pt-8 text-gray-400 '>GLOBAL BRAND</h2>
                </div>
              )}
            </CountUp>
          </div>

        </div>
      </div>

      <div className='main_goal bg-slate-100 md:mt-20 py-20'>
        <div className='text-center'>
          <h2 className='text-center pt-10 text-4xl font-extrabold '>Our Main Goals</h2>
          <p className='text-slate-400'>Empowering Dreams, Achieving Goals</p>
        </div>

        <div className='grid grid-cols-4 gap-10 p-20'>
          <div className="card hover:rounded-none hover:border-warning hover:border-t-4 hover:border-r-4 bg-base-100 shadow-xl pt-10">
            <div className=" text-center">
              <h2 className=" text-center text-xl font-extrabold pb-3">Medical Accessories</h2>
              <img className='h-[80px] w-[80px] mx-auto pb-3' src="https://www.devsnews.com/template/medibazar/medibazar/assets/img/icon/f-01.png" alt="" />
              <p className='pb-5 text-slate-400'>Sed ut perspiciatis unde omnis wste natsit volupta explic</p>
              <div className="card-actions justify-center pb-2">
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
          <div className="card hover:rounded-none hover:border-indigo-500 hover:border-t-4 hover:border-r-4 bg-base-100 shadow-xl pt-10">
            <div className=" text-center">
              <h2 className=" text-center text-xl font-extrabold pb-3">Treatment Center</h2>
              <img className='h-[80px] w-[80px] mx-auto pb-3' src="https://www.devsnews.com/template/medibazar/medibazar/assets/img/icon/f-02.png" alt="" />
              <p className='pb-5 text-slate-400'>Sed ut perspiciatis unde omnis wste natsit volupta explic</p>
              <div className="card-actions justify-center">
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
          <div className="card hover:rounded-none hover:border-indigo-500 hover:border-t-4 hover:border-r-4 bg-base-100 shadow-xl pt-10">
            <div className=" text-center">
              <h2 className=" text-center text-xl font-extrabold pb-3">Emergency Care</h2>
              <img className='h-[80px] w-[80px] mx-auto pb-3' src="https://www.devsnews.com/template/medibazar/medibazar/assets/img/icon/f-03.png" alt="" />
              <p className='pb-5 text-slate-400'>Sed ut perspiciatis unde omnis wste natsit volupta explic</p>
              <div className="card-actions justify-center">
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
          <div className="card hover:rounded-none hover:border-indigo-500 hover:border-t-4 hover:border-r-4 bg-base-100 shadow-xl pt-10">
            <div className=" text-center">
              <h2 className=" text-center text-xl font-extrabold pb-3">Online Consultations
              </h2>
              <img className='h-[80px] w-[80px] mx-auto pb-3' src="https://www.devsnews.com/template/medibazar/medibazar/assets/img/icon/f-04.png" alt="" />
              <p className='pb-5 text-slate-400'>Sed ut perspiciatis unde omnis wste natsit volupta explic</p>
              <div className="card-actions justify-center">
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;