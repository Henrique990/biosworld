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

// import React, { useState, useEffect } from 'react';
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
//   const [timeLeft, setTimeLeft] = useState(Date.now() + 1296000000);

//   useEffect(() => {
//     const savedTime = localStorage.getItem('timeLeft');
//     if (savedTime) {
//       setTimeLeft(savedTime);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('timeLeft', timeLeft);
//   }, [timeLeft]);

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
//       <Countdown date={timeLeft} renderer={renderer} />
//     </>
//   );
// }

// import React, { useState, useEffect } from 'react';
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
//   const [timeLeft, setTimeLeft] = useState(
//     localStorage.getItem('timeLeft') || Date.now() + 1296000000
//   );

//   useEffect(() => {
//     localStorage.setItem('timeLeft', timeLeft);
//   }, [timeLeft]);

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
//       <Countdown date={timeLeft} renderer={renderer} />
//     </>
//   );
// }

import React from "react";
import Countdown from "react-countdown";

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
  const initialTimer = localStorage.getItem("timer") ?? 1296000;
  const timeoutId = React.useRef(null);
  const [timer, setTimer] = React.useState(initialTimer);

  const countTimer = React.useCallback(() => {
    if (timer <= 0) {
      localStorage.clear("timer");
    } else {
      setTimer(timer - 1);
      localStorage.setItem("timer", timer);
    }
  }, [timer]);

  React.useEffect(() => {
    timeoutId.current = window.setTimeout(countTimer, 1000);
    // cleanup function
    return () => window.clearTimeout(timeoutId.current);
  }, [timer, countTimer]);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <MyCountdown days={days} hours={hours} minutes={minutes} seconds={seconds} />
      );
    }
  };

  return (
    <>
      <Countdown date={Date.now() + timer * 1000} renderer={renderer} />
    </>
  );
}
