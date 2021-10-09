
import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopRating } from "../../../actions/tmdb/movie/topRatingAction"
import TableListMovieTopRating from './TableListMovieTopRating'

function ListMovieTopRating() {

    const { getTopRatingResult, getTopRatingLoading, getTopRatingError } = useSelector(state => state.MovieTopRatingReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTopRating())
    }, [dispatch])

    return (
        <Fragment>
            <h2>List Movie Top Rating</h2>
            <hr/>
            {getTopRatingResult ? (
                <TableListMovieTopRating data={getTopRatingResult}/>
            ): getTopRatingLoading ? (
                <p>Loading ...</p>
            ): (
                <p>{getTopRatingError? getTopRatingError : "Data Kosong"}</p>
            )}
        </Fragment>
    )
}

export default ListMovieTopRating
