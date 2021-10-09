/* eslint-disable */
import { Typography } from '@mui/material'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { topRatedAction } from '../../../../actions/tmdb/television/topRatedAction'
import ListData from './ListData'

function TopRated() {

    const { topRatedResult, topRatedLoading, topRatedError } = useSelector(state => state.TVTopRatedReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(topRatedAction())
    }, [dispatch])


    return (
        <Fragment>
            {topRatedResult ? (
                <ListData data={topRatedResult}/>
            ):topRatedLoading ? (
                <Typography component={'span'} variant={'body2'}>
                    Loading ...
                </Typography>
            ): (
                <Typography component={'span'} variant={'body2'}>{topRatedError ? topRatedError : "Data Kosong"}</Typography>
            )}
        </Fragment>
    )
}

export default TopRated
