import React from "react";
import { useSearchParams } from "react-router-dom";

const View = () => {
  const searchParams = useSearchParams();
  console.log("Search Params: ",searchParams);
  let val = '';
  for(let [key,value] of searchParams[0].entries()){
    console.log('Val: ',value);
    val = value;
  }

  return (
    <div>
      <h1>Value is {val}</h1>
    </div>
  );
};

export default View;
