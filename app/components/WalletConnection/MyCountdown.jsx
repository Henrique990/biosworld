// import React from 'react';
// import Countdown from 'react-countdown';

// const Completionist = () => <span>Contagem regressiva finalizada!</span>;

// const MyCountdown = ({ days, hours, minutes, seconds }) => (
//   <div className="group-one flex flex-row space-x-4">
//     <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
//       <p>{days}</p>
//       <p>Dias</p>
//     </div>
//     <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
//       <p>{hours}</p>
//       <p>Horas</p>
//     </div>
//     <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
//       <p>{minutes}</p>
//       <p>Minutos</p>
//     </div>
//     <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
//       <p>{seconds}</p>
//       <p>Segundos</p>
//     </div>
//   </div>
// );

// export default function MyPage() {
//   const renderer = ({ days, hours, minutes, seconds, completed }) => {
//     if (completed) {
//       // Render a complete state
//       return <Completionist />;
//     } else {
//       // Render a countdown
//       return (
//         <MyCountdown
//           days={days}
//           hours={hours}
//           minutes={minutes}
//           seconds={seconds}
//         />
//       );
//     }
//   };

//   return (
//     <>
//       <Countdown date={Date.now() + 1296000000} renderer={renderer} />
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const Completionist = () => <span>Contagem regressiva finalizada!</span>;

const MyCountdown = ({ days, hours, minutes, seconds }) => (
  <div className="group-one flex flex-row space-x-4">
    <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
      <p>{days}</p>
      <p>Dias</p>
    </div>
    <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
      <p>{hours}</p>
      <p>Horas</p>
    </div>
    <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
      <p>{minutes}</p>
      <p>Minutos</p>
    </div>
    <div className="basis-1/4 flex flex-col justify-center text-center  bg-[#40A072] rounded-md h-10 border border-gray-500 hover:border-green-300">
      <p>{seconds}</p>
      <p>Segundos</p>
    </div>
  </div>
);

export default function MyPage() {
  const [timeLeft, setTimeLeft] = useState(Date.now() + 1296000000);

  useEffect(() => {
    const savedTime = localStorage.getItem('timeLeft');
    if (savedTime) {
      setTimeLeft(savedTime);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('timeLeft', timeLeft);
  }, [timeLeft]);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <MyCountdown
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      );
    }
  };

  return (
    <>
      <Countdown date={timeLeft} renderer={renderer} />
    </>
  );
}
