
import React from 'react'
import ListMovieNowPlaying from '../components/tmdb/ListMovieNowPlaying'
import Container from '@mui/material/Container';
import Header from '../components/Common/Header';
import Content from '../components/Common/Content';

function MovieNowPlaying() {
    return (
        <Container fixed>
            <Header title="Movie Now Playing"/>
            <Content>
                <ListMovieNowPlaying />    
            </Content>
        </Container>
    )
}

export default MovieNowPlaying
