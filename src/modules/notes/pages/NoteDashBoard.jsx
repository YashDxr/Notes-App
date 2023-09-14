import React from "react";
import Container from "@mui/material/Container";
import { Header } from "../../../shared/components/Header";
import { Grid } from "@mui/material";
import { SideBar } from "../components/SideBar";
import { Main } from "../components/Main";
import { useLocation } from "react-router-dom";

export const NoteDashBoard = () => {
  const location = useLocation();
  console.log('location : ',location);
  if(location && location.state){
    localStorage.setItem('username',location.state.username);
  }
;  return (
    <Container>
      <Header username={localStorage.getItem('username')}/>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SideBar/>
        </Grid>
        <Grid item xs={8}>
          <Main/>
        </Grid>
      </Grid>
    </Container>
  );
};
