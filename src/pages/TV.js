import { Container } from "@mui/material";
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
      </Content>
    </Container>
  );
}

export default TV;
