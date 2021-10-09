import {Fragment, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getNowPlaying} from '../../../actions/tmdb/movie/nowPlayingAction'
import CardListItem from './CardListItem';
import Grid from '@mui/material/Grid';

function ListMovieNowPlaying() {

    const { getListNowPlayingResult, getListNowPlayingLoading, getListNowPlayingError } = useSelector(state => state.MovieNowPlayingReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNowPlaying())
    }, [dispatch])

    return (
        <Fragment>
            <h2>List Movie Now Playing</h2>
            {getListNowPlayingResult ? (
                <Grid container spacing={2}>
                {
                    getListNowPlayingResult.results.map((nowPlaying) => {
                        return(
                            <Grid item key={nowPlaying.id}>
                                <CardListItem data={nowPlaying}/>
                            </Grid>
                        )
                    })
                }
                </Grid>                
            ): getListNowPlayingLoading ? (
                <p>Loading ...</p>
            ): (
                <p>{getListNowPlayingError? getListNowPlayingError : "Data Kosong"}</p>
            )}
        </Fragment>
    )
}

export default ListMovieNowPlaying
