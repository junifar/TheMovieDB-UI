import { Container } from "@mui/material";
import React from "react";
import Content from "../components/Common/Content";
import Header from "../components/Common/Header";
import TelevisionDetail from "../components/tmdb/TelevisionDetail";

function TVDetailsPage() {
  return (
    <Container fixed>
      <Header title="Television" />
      <Content>
        <TelevisionDetail/>
      </Content>
    </Container>
  );
}

export default TVDetailsPage;
