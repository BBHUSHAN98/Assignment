import React, { useState } from 'react'


export const AddTodo = ({ onAdd }) => {
    
    const [newTodo, setNewTodo] = useState("");

    
   
    return (
        <div>
            <input type="text" placeholder='Write Something'
        style={{
            width: "20%",
            height : "5%",
          paddingLeft: "8px",
          paddingTop: "6px",
          paddingBottom: "6px",
          borderRadius: "10px",
          border: "1px solid teal"
         
        }}
                onChange={(e) => setNewTodo(e.target.value)} ></input>
            <button
              style={{
                width: "70px",
                height : "30px",
                borderRadius: "10px",
                marginLeft:"20px",
                border: "1px solid green"
             
                }}
                onClick={() => { onAdd(newTodo); setNewTodo(""); }} >Add</button>
        </div>
      
    );
};

