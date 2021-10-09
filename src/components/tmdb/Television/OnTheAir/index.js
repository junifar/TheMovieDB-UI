/* eslint-disable */
import { Typography } from '@mui/material'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onTheAirAction } from '../../../../actions/tmdb/television/onTheAirAction'
import ListData from './ListData'

function OnTheAir() {

    const { onTheAirResult, onTheAirLoading, onTheAirError } = useSelector(state => state.TVOnTheAirReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(onTheAirAction())
    }, [dispatch])


    return (
        <Fragment>
            {onTheAirResult ? (
                <ListData data={onTheAirResult}/>
            ):onTheAirLoading ? (
                <Typography component={'span'} variant={'body2'}>
                    Loading ...
                </Typography>
            ): (
                <Typography component={'span'} variant={'body2'}>{onTheAirError ? onTheAirError : "Data Kosong"}</Typography>
            )}
        </Fragment>
    )
}

export default OnTheAir
