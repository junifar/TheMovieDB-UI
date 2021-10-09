import { Container } from "@mui/material";
import React from "react";
import Content from "../components/Common/Content";
import Header from "../components/Common/Header";

function SummaryUser() {
  return (
    <Container fixed>
      <Header title="Summary User"/>
      <Content>
        <h1>Test</h1>
      </Content>
    </Container>
  );
}

export default SummaryUser;
