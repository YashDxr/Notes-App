import React, { useState } from "react";                                  //,useEffect
import Container from "@mui/material/Container";
import { Header } from "../../../shared/components/Header";
import { Grid } from "@mui/material";
import { SideBar } from "../components/SideBar";
import { Main } from "../components/Main";
import { useLocation } from "react-router-dom";
import { NoteContext } from "../context/note-context";
import { getNotes } from "../../../shared/services/api-client" ;

export const NoteDashBoard = () => {
  const location = useLocation();
  const [currentNotes,setCurrentNotes] = useState([]);

  // const getDataFromAPI = async () => {
  //   const notes = await getNotes();
  //   setCurrentNotes(notes);
  //   console.log("All Notes are: ", notes);
  // };

  // //MOUNT PHASE
  // useEffect(() => {
  //   console.log("Mount Phase");
  //   getDataFromAPI();
  // }, []);


  
  console.log("location : ", location);
  if (location && location.state) {
    localStorage.setItem("username", location.state.username);
  }

  const addNote = (noteObject) => {
    console.log("Received Note form ADD-Note Component: ",noteObject);
    const oldNotes = [...currentNotes];
    oldNotes.push(noteObject);
    setCurrentNotes(oldNotes);
  }



  return (
    <Container>
      <Header username={localStorage.getItem("username")} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SideBar />
        </Grid>
        <Grid item xs={8}>
          <NoteContext.Provider value={{notes:currentNotes, addSingleNote:addNote}}>
            <Main />
          </NoteContext.Provider>
        </Grid>
      </Grid>
    </Container>
  );
};
