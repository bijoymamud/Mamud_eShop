import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div>
      <div className="hero h-[90vh]" >

        <div className="hero-content text-start ">
          <div className=" md:flex items-center gap-20">
            <div className="md:w-1/3 w-full">
              <h1 className="mb-5 text-lg text-center px-2 rounded-md text-white bg-orange-600 w-1/2 ">COVID-19 PRODUCTS</h1>
              <p className="mb-5 "><span className="text-5xl tracking-wide ">PULSE</span> <br /><span className="text-7xl tracking-widest ">OXIMETER</span></p>
              <button className="btn rounded-full btn-info px-5 text-white">Contact</button>
              <Link className=" underline ms-5 text-xl font-bold">Hot Collection +</Link>
            </div>

            <div className="md:w-2/3 w-full">
              <img src="https://images.unsplash.com/photo-1615486511262-c7b5c7f42b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;