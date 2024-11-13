import React, { useEffect } from 'react'
import { useState} from 'react'
function App() {
  const [num,setNum]=useState(' ');
  const[time,setTime]=useState(60);
  const[s,ss]=useState(false);
  
  useEffect (()=>
  {
    if(time>0)
      {
    const timer=setInterval(()=>{
      setTime(prevTime=>prevTime-1)
    },1000);
    return ()=>{clearInterval(timer)
  }
}
  },[time]);
  // const [seconds, setSeconds] = useState(60);

  // useEffect(() => {
  //   if (seconds > 0) {
  //     const timer = setInterval(() => {
  //       setSeconds(prevSeconds => prevSeconds - 1);
  //     }, 1000);

  //     // Clear the interval on component unmount
  //     return () => clearInterval(timer);
  //   }
  // }, [seconds]);
  return (
    <div>
        <div>00:{time}
        {time==0 && <div>time  is over</div>}
        </div>
    </div>
  )
}

export default App