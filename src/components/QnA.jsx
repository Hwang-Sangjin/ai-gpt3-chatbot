import React, { useEffect } from "react";
import data from "../data/question";
import { useState } from "react";


const QNA = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(count)
    },[count])

    function chnageData(index){
    
        setCount(count + 1)
      }

  return (
    <div>
      <section className="flex-none max-w-screen-sm py-4 h-screen  mx-auto">
      <div className="mx-auto">{count+1}/5</div>
      <div className="bg-white mt-10 max-w-screen-sm py-10 mx-auto rounded-xl shadow-2xl">
        {data[count].q}
      </div>
      {data[count].a.map(e => {
        return(
            <button className="bg-white mt-5 w-full py-5 mx-auto rounded-xl shadow-2xl" onClick={() => chnageData()}>
      {e.answer}
      </button>
        )
      })}
      
        </section>    
    </div>
  );
};

export default QNA;
