import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='py-20'>
      <div className='md:flex items-center justify-between'>
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

      <div className='achivement'>
        <div>
          
        </div>
      </div>

    </div>
  );
};

export default About;