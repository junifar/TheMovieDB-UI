/* eslint-disable */
import { Typography } from '@mui/material'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { popularAction } from '../../../../actions/tmdb/television/popularAction'
import ListData from './ListData'

function Popular() {

    const { popularResult, popularLoading, popularError } = useSelector(state => state.TVPopularReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(popularAction())
    }, [dispatch])


    return (
        <Fragment>
            {popularResult ? (
                <ListData data={popularResult}/>
            ):popularLoading ? (
                <Typography component={'span'} variant={'body2'}>
                    Loading ...
                </Typography>
            ): (
                <Typography component={'span'} variant={'body2'}>{popularError ? popularError : "Data Kosong"}</Typography>
            )}
        </Fragment>
    )
}

export default Popular
