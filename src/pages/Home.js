import React from "react";
import { Container } from "@mui/material";
import Header from "../components/Common/Header";
import Content from "../components/Common/Content";
import { ListUser } from "../components";

export default function Home() {
  return (
    <Container fixed>
      <Header title="Aplikasi User Apps"/>
      <Content>
        <ListUser/>
      </Content>
    </Container>
  );
}
