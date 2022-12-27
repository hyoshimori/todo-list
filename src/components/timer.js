import { useEffect, useState } from "react";

const Timer = () => {

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let intervalId = null;

    intervalId = window.setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return(
    <>
      <span>{timer} s</span>
    </>
  )
}

export default Timer;
