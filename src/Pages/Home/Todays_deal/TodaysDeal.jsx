import React, { useEffect, useState } from 'react';

const TodaysDeal = () => {
  const [totalSeconds, setTotalSeconds] = useState(200400);

  useEffect(() => {
    const interval = setInterval(() => {
      if (totalSeconds > 0) {
        setTotalSeconds(totalSeconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [totalSeconds]);

  const totalDays = Math.floor(totalSeconds / 86400);
  const remainingSeconds = totalSeconds % 86400;
  const totalHours = Math.floor(remainingSeconds / 3600);
  const remainingSeconds2 = remainingSeconds % 3600;
  const totalMinutes = Math.floor(remainingSeconds2 / 60);
  const seconds = remainingSeconds2 % 60;

  return (
    <div className="">
      <div className="font-bold text-center">
        <h2 className="text-3xl">Deal Of This Week</h2>
        <p className="text-gray-500">Get Your Week Started Right: The Deal of the Week Awaits!</p>
      </div>


      <div className="flex flex-row gap-20 items-center justify-center mx-auto py-16 ms-5 ">
        <div className='bg-green-400 w-[100px] px-5 py-5 flex flex-col items-center rounded-xl shadow-xl'>
          {totalDays > 0 && <p className='text-4xl'>{totalDays}</p>}
          <p className='text-sm'>DAY</p>
        </div>
        <div className='bg-green-400 w-[100px] px-5 py-5 flex flex-col items-center rounded-xl shadow-xl'>
          {totalHours > 0 && <p className='text-4xl'>{totalHours} </p>}
          <p className='text-sm'>HOUR</p>
        </div>
        <div className='bg-green-400 w-[100px] px-5 py-5 flex flex-col items-center rounded-xl shadow-xl'>
          {totalMinutes > 0 && <p className='text-4xl'>{totalMinutes} </p>}
          <p className='text-sm'>MINUTE</p>
        </div>
        <div className='bg-green-400 w-[100px] px-5 py-5 flex flex-col items-center rounded-xl shadow-xl'>
          {seconds > 0 && <p className='text-4xl'>{seconds} </p>}
          <p className='text-sm'>SECOND</p>
        </div>
        <div >
          {totalSeconds <= 0 && <p>Time's up!</p>}
        </div>
      </div>




      <div className='hotDealsSection container w-5/6 md:grid mx-auto md:grid-cols-3 gap-10 py-20'>


        <div className="card mb-5 bg-base-100 shadow-xl" style={{ position: "relative" }}>
          <figure style={{ position: "relative" }}><img src="https://st.depositphotos.com/1000693/2141/i/450/depositphotos_21413179-stock-photo-bottle-of-indicator-strips-for.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title flex justify-between items-center">
              Diabetic Strip
              <div className="  rounded-xl p-2 badge-error text-black" style={{ position: "absolute", top: 0, right: 0 }}>HOT</div>
            </h2>
            <p>ACCESSORIES</p>
            <div className="card-actions items-center justify-end">
              <div className=" badge-outline line-through decoration-red-500   text-red-300">$34.99</div>
              <div className="text-green-500 badge badge-outline text-lg ">$30.99</div>
            </div>
          </div>
        </div>

        <div className="card mb-5 bg-base-100 shadow-xl" style={{ position: "relative" }}>
          <figure style={{ position: "relative" }}><img src="https://static8.depositphotos.com/1397202/867/i/450/depositphotos_8675453-stock-photo-blood-pressure-monitor.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title flex justify-between items-center">
              Blood Pressure Machine
              <div className="  rounded-xl p-2 badge-error text-black" style={{ position: "absolute", top: 0, right: 0 }}>HOT</div>
            </h2>
            <p>ACCESSORIES</p>
            <div className="card-actions items-center justify-end">
              <div className=" badge-outline line-through decoration-red-500   text-red-300">$39.99</div>
              <div className="text-green-500 badge badge-outline text-lg ">$35.99</div>
            </div>
          </div>
        </div>

        <div className="card mb-5 bg-base-100 shadow-xl" style={{ position: "relative" }}>
          <figure style={{ position: "relative" }}><img src="https://st5.depositphotos.com/16888564/65202/i/450/depositphotos_652026840-stock-photo-black-stethoscope-white-background-healthcare.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title flex justify-between items-center">
              Stethoscope
              <div className="  rounded-xl p-2 badge-error  text-black" style={{ position: "absolute", top: 0, right: 0 }}>HOT</div>
            </h2>
            <p>ACCESSORIES</p>
            <div className="card-actions items-center justify-end">
              <div className=" badge-outline line-through decoration-red-500   text-red-300">$49.99</div>
              <div className="text-green-500 badge badge-outline text-lg ">$45.99</div>
            </div>
          </div>
        </div>



      </div>

    </div >
  );
}
export default TodaysDeal;