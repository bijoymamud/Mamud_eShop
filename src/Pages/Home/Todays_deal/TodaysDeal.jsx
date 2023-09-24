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
    </div>
  );
}
export default TodaysDeal;