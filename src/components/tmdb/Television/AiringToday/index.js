/* eslint-disable */
import { Typography } from '@mui/material'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { airingTodayAction } from '../../../../actions/tmdb/television/airingTodayAction'
import ListAiringToday from './ListAiringToday'

function AiringToday() {

    const { airingTodayResult, airingTodayLoading, airingTodayError } = useSelector(state => state.TVAiringTodayReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(airingTodayAction())
    }, [dispatch])


    return (
        <Fragment>
            {airingTodayResult ? (
                <ListAiringToday data={airingTodayResult}/>
            ):airingTodayLoading ? (
                <Typography component={'span'} variant={'body2'}>
                    Loading ...
                </Typography>
            ): (
                <Typography component={'span'} variant={'body2'}>{airingTodayError ? airingTodayError : "Data Kosong"}</Typography>
            )}
        </Fragment>
    )
}

export default AiringToday
