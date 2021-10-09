import React from "react";
import Container from "@mui/material/Container";
import ListMovieTopRating from "../components/tmdb/ListMovieTopRating";
import Header from "../components/Common/Header";
import Content from "../components/Common/Content";

function MovieTopRating() {
  return (
    <Container fixed>
      <Header title="Movie Top Rating"/>
      <Content>
        <ListMovieTopRating/>
      </Content>
      </Container>
  );
}

export default MovieTopRating;
