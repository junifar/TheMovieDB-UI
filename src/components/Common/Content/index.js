
import { Container } from '@mui/material'
import React from 'react'

function Content(props) {
    return (
        <Container disableGutters maxWidth="lg" sx={{ pt: 8, pb: 6 }}>
            {props.children}
        </Container>
    )
}

export default Content
