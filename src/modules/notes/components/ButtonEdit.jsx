import { Button } from "@mui/material"; //, DialogTitle
import React from "react";
import { useNavigate } from "react-router-dom";

export const ButtonEdit = (obj) => {
  const navigate = useNavigate();
  // const buttonPressed = () => {
  //   console.log(obj.function, " called");
  //   if (obj.function === "edit") {
  //   } else {
  //     //Delete click event method
  //   }
  // };
  const EditNoteData = () => {
    navigate("/dashboard/add-note/Update");
    const data = obj.data;
    const id = obj.noteIndex;
    // Data in data and record id in id
  };
  return (
    <Button onClick={EditNoteData} variant="contained">
      {obj.event}
    </Button>
  );
};
