import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="pb-60">
      <div className="hero h-[90vh]" >

        <div className="hero-content text-start ">
          <div className=" md:flex items-center gap-20">
            <div className="md:w-1/3 w-full">
              <h1 className="mb-5 text-lg text-center px-2 rounded-md text-white bg-orange-600 w-1/2 ">COVID-19 PRODUCTS</h1>
              <p className="mb-5 "><span className="text-5xl tracking-wide ">PULSE</span> <br /><span className="text-7xl tracking-widest ">OXIMETER</span></p>
              <Link to='/contact' className="btn rounded-full btn-info px-5 text-white">Contact</Link>
              <Link className=" underline ms-5 text-xl font-bold">Hot Collection +</Link>
            </div>

            <div className="md:w-2/3 w-full">
              <img className="w-full md:h-[87vh]" src="https://i.ibb.co/nLf8pKL/PA-O2-11-removebg-preview.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;