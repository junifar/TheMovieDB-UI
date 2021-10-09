import { Grid } from '@mui/material'
import React, { Fragment } from 'react'

function TelevisionDetail() {
    return (
        <Fragment>
            <h2>Television Detail</h2>
            <hr/>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <img src="https://via.placeholder.com/240x320.png" alt="poster"/>
                </Grid>
                <Grid item xs={9}>
                    Column 2
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default TelevisionDetail
