import React, { useState, useEffect } from 'react';


export default function Timer(){

    const [counter, setCounter] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCount => {if(prevCount>0){
        return prevCount - 1
      }else{
        return <p>Times Up</p>
      }})}
    , 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{counter}</div>;
}