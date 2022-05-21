import React from 'react'
import { useState } from "react"

export const Count = () => {

    const [counter, setCounter] = useState(0) 

    const handleClick1 = () => {
        setCounter(counter+1)
    
    }
    const handleClick3 = () => {
        setCounter(counter-1)
    }

    const handleClick2 = () => {
        setCounter(counter*2)
    }
    
  
    return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '200%',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '-15%',
        }}>
          
          <div style={{
            fontSize: '120%',
          }}>
            {counter}
          </div>
          <div className="buttons">
            <button style={{
              fontSize: '60%',
              marginRight: '5px',
              backgroundColor: 'green',
              color: 'white',
            }}
              onClick={handleClick1}>Increment</button>
            <button style={{
              fontSize: '60%',
              marginLeft: '5px',
              backgroundColor: 'red',
              color: 'white',
                }}
             onClick={handleClick3}>Decrement</button>
               <button style={{
              fontSize: '60%',
              marginLeft: '5px',
              backgroundColor: 'Yellow',
              color: 'white',
                }}
             onClick={handleClick2}>Double</button>

          </div>
        </div>
      
  );
}
