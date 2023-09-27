import React, { useContext, useState } from "react"; // useRef,
import { useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import { NoteContext } from "../context/note-context";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { useApi } from "../../../shared/hooks/api-hook";
import {useDispatch, useSelector} from 'react-redux';
import { addNote, noteAdd } from "../redux/note-slice";

const Add = () => {
  const [dateValue, setdateValue] = useState(dayjs("2022-04-17"));
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [message, setMessage] = useState("");
  const apiCall = useApi("POST");
  const params = useParams();
  console.log("Params: ", params);
  const dispatch = useDispatch();
  const noteState = useSelector((state) => state.noteReducer);
  const noteContext = useContext(NoteContext);
  const ErrorStyle = {
    color: "red",
  };
  // const nameRef = useRef();
  // const descRef = useRef();
  // const dateRef = useRef();
  // const GiveError = ()=>{
  //   throw new Error("Testing Error");
  // }
  // const takeInput = () => {
  //   const noteObject = {
  //     title : nameRef.current.value,
  //     desc : descRef.current.value,
  //     date : dateRef.current.value
  //   }
  //   noteContext.addSingleNote(noteObject);
  //   console.log(noteObject);
  //   setMessage('Note-Added...');
  // }
  const getFormData = async (formData) => {
    console.log("Data in form is", formData);
    dispatch(noteAdd(formData));
    dispatch(addNote(formData));
    // noteContext.addSingleNote(formData);
    // const response = apiCall(formData);
    // setMessage(response.message);
  };
  return (
    <form onSubmit={handleSubmit(getFormData)}>
      <h1>
        {params.operationname} Note {noteState.message}
      </h1>
      {/* {params.operationname === "Add" ? (
        <> */}
          <TextField
            {...register("title", { required: true, min: 3, max: 10 })}
            id="outlined-basic"
            label="Title"
            variant="outlined"
          />
          {errors && errors.title && errors.title.type === "required" && (
            <p style={ErrorStyle}>Title cannot be empty</p>
          )}
          <br /> <br /> <br />
          <TextField
            {...register("desc", {
              validate: { checkLength: (value) => value.length > 7 },
            })}
            id="outlined-multiline-static"
            label="Desc"
            multiline
            rows={4}
          />
          {errors && errors.desc && errors.desc.type === "checkLength" && (
            <p style={ErrorStyle}>
              Description should be greater than 7 characters
            </p>
          )}
          <br /> <br />
          {/* {GiveError()}           Error Testing for UI Experience */}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dateValue}
              {...register("date")}
              onChange={(newValue) => setdateValue(newValue)}
              label="Date"
            />
          </LocalizationProvider>
          <br /> <br />
          <Button type="submit" variant="contained">
            Add Note
          </Button>{" "}
          &nbsp;&nbsp;
          <Button
            onClick={() => {
              reset({
                title: "",
                desc: "",
                date: setdateValue(dayjs("2023-01-01")),
              });
            }}
            variant="contained"
          >
            Reset
          </Button>
        {/* </>
      ) : (
        <>
          <TextField
            {...register("title", { required: true, min: 3, max: 10 })}
            id="outlined-basic"
            label="Title"
            variant="outlined"
          />
          {errors && errors.title && errors.title.type === "required" && (
            <p style={ErrorStyle}>Title cannot be empty</p>
          )}
          <br /> <br /> <br />
          <TextField
            {...register("desc", {
              validate: { checkLength: (value) => value.length > 7 },
            })}
            id="outlined-multiline-static"
            label="Desc"
            multiline
            rows={4}
          />
          {errors && errors.desc && errors.desc.type === "checkLength" && (
            <p style={ErrorStyle}>
              Description should be greater than 7 characters
            </p>
          )}
          <br /> <br />
          <Button type="submit" variant="contained">
            Update Note
          </Button>{" "}
          &nbsp;&nbsp;
          <Button
            onClick={() => {
              reset({
                title: "",
                desc: "",
                date: setdateValue(dayjs("2023-01-01")),
              });
            }}
            variant="contained"
          >
            Reset
          </Button>
        </>
      )} */}
    </form>
  );
};

export default Add;
