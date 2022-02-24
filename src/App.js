import React from "react";
import "./style.css";
import {useState,useEffect} from 'react';

export default function App({name}) {

  const [count,setCount]=useState(0);

  useEffect(()=>{
    document.write=`You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times </p>
      <button onClick={()=>setCount(count+1)}>
        Click Me!
      </button>
    </div>
  );
}
