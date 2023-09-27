import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { NoteContext } from "../context/note-context";
import { ButtonEdit } from "./ButtonEdit";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Table,TableHead,TableContainer,TableRow,TableCell,Paper,TableBody } from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { getNotesFromAPI } from "../redux/note-slice";
import { getNotes } from "../../../shared/services/api-client";

const View = () => {
  const dispatch = useDispatch();
  const noteState = useSelector(state => state.noteReducer);
  useEffect(()=>{
    dispatch(getNotesFromAPI());
  },[]);


  // const getDataFromAPI = async () => {
  //   const notes = await getNotes();
  //   console.log("All Notes are: ", notes);
  // };

  // //MOUNT PHASE
  // useEffect(() => {
  //   console.log("Mount Phase");
  //   getDataFromAPI();
  // }, []);

  // //UPDATE PHASE
  // useEffect(() => {
  //   console.log("UPDATE Phase");
  // });

  // //UNMOUNT PHASE
  // useEffect(() => {
  //   return function () {
  //     console.log("UNMOUNT Phase");
  //   };
  // }, []);
  const searchParams = useSearchParams();
  // console.log("Search Params: ", searchParams);
  let val = "";
  for (let [key, value] of searchParams[0].entries()) {
    console.log("Val: ", value);
    val = value;
  }
  return (
    <div>
      <>
      {noteState.isLoading && <p>Loading Notes...</p>}
        <h1>Total Notes are {noteState.notes.length}</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>SNo</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Desc</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {noteState.notes.map((note, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{note.title}</TableCell>
                  <TableCell>{note.desc}</TableCell>
                  <TableCell>{note.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    </div>
  );

  // const searchBox = [];

  // return (
  //   <div>
  //     <NoteContext.Consumer>
  //       {(value) => {
  //         // return (<h1>Value is {val} Note Length is: {value.notes.length}</h1>);
  //         return (
  //           <>

  //             {val === "search" ? (
  //               <>
  //                 <h1>Total Notes are {value.notes.length}</h1>
  //                 <Autocomplete
  //                   disablePortal
  //                   id="combo-box-demo"
  //                   sx={{ my: 4, width: 300 }}
  //                   options={searchBox}
  //                   renderInput={(params) => (
  //                     <TextField {...params} label="Search" />
  //                   )}
  //                 />
  //                 <TableContainer component={Paper}>
  //                   <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //                     <TableHead>
  //                       <TableRow>
  //                         <TableCell>Note Id</TableCell>
  //                         <TableCell>Title</TableCell>
  //                         <TableCell>Desc</TableCell>
  //                         <TableCell>Date</TableCell>
  //                         <TableCell>Delete</TableCell>
  //                       </TableRow>
  //                     </TableHead>
  //                   </Table>
  //                 </TableContainer>
  //               </>
  //             ) : (
  //               <>
  //               <h1>Total Notes are {value.notes.length}</h1>
  //             <TableContainer component={Paper}>
  //               <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //                 <TableHead>
  //                   <TableRow>
  //                     <TableCell>SNo</TableCell>
  //                     <TableCell>Title</TableCell>
  //                     <TableCell>Desc</TableCell>
  //                     <TableCell>Date</TableCell>
  //                     {val === "view" ? (
  //                       <TableCell>Update</TableCell>
  //                     ) : (
  //                       <TableCell>Delete</TableCell>
  //                     )}
  //                   </TableRow>
  //                 </TableHead>
  //                 <TableBody>
  //                   {value.notes.map((note, index) => (
  //                     <TableRow key={index}>
  //                       <TableCell>{index+1}</TableCell>
  //                       <TableCell>{note.title}</TableCell>
  //                       <TableCell>{note.desc}</TableCell>
  //                       <TableCell>{note.date}</TableCell>
  //                       {val === "view" ? (
  //                         <TableCell>
  //                           <ButtonEdit data = {value.notes} noteIndex = {index} function="edit" event="Edit" />
  //                         </TableCell>
  //                       ) : (
  //                         <TableCell>
  //                           <ButtonEdit function="delete" event="Delete" />
  //                         </TableCell>
  //                       )}
  //                     </TableRow>
  //                   ))}
  //                 </TableBody>
  //               </Table>
  //             </TableContainer>
  //             </>
  //             )}
  //           </>
  //         );
  //       }}
  //     </NoteContext.Consumer>
  //   </div>
  // );
};

export default View;
