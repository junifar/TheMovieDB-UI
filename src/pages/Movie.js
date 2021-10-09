import { Container } from '@mui/material'
import React from 'react'
import Content from '../components/Common/Content'
import Header from '../components/Common/Header'
import MovieSchedule from '../components/tmdb/MovieSchedule'

function Movie() {
    return (
        <Container fixed>
            <Header title="Movie - Schedule"/>
            <Content>
                <MovieSchedule/>
            </Content>
        </Container>
    )
}

export default Movie
