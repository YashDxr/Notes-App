import React from "react";
import { useParams } from "react-router-dom";

const Add = () => {
  const params = useParams();
  console.log('Params: ',params);
  return (
    <div>
      <h1>{params.operationname} Note</h1>
    </div>
  );
};

export default Add;
