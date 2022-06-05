import React, { useEffect,useState } from 'react';
import './Timer.css';

export const Timer=()=> {

    const [seconds,setSeconds]=useState(0);
    const [minutes,setMinutes]=useState(0);

    var timer ;
    useEffect(()=>{
         timer= setInterval(()=>{
            setSeconds(seconds+1);
            console.log(seconds)
            if(seconds===59)
            {
                setMinutes(minutes+1);

                setSeconds(0);
            }
        },1000)

         return ()=>clearInterval(timer);

    });

  const restart=()=>{
      setSeconds(0);
      setMinutes(0);
  }

  const stop = ()=>{
      clearInterval(timer);
  }




    return (
        <div className="timer">
            <div className="container">
                <div className="timer_container">
                    <h1 className='heading'>Timer</h1>
                    <h1 className='number'>{minutes < 10 ? "0" + minutes : minutes}m  {seconds < 10 ? "0" + seconds : seconds}s</h1>
                   
                    <div className='button'>
                        <button className="restart" onClick={restart}>Start</button>
                        <button className="stop" onClick={stop}>Stop</button>
                    </div>
                 
                </div>

            </div>
            
        </div>
    );
}
