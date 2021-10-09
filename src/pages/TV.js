import { Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Content from "../components/Common/Content";
import Header from "../components/Common/Header";
import Television from "../components/tmdb/Television";

function TV() {
  return (
    <Container fixed>
      <Header title="Television" />
      <Content>
        <Television />
        <FORM />
      </Content>
    </Container>
  );
}

function FORM() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off">
      asas
    </Box>
  );
}

export default TV;
