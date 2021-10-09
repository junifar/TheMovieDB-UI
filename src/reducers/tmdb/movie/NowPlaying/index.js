import {GET_NOW_PLAYING} from '../../../../actions/tmdb/movie/nowPlayingAction'

const initialState = {
    getListNowPlayingResult: false,
    getListNowPlayingLoading: false,
    getListNowPlayingError: false
}

const moviewNowPlaying = (state = initialState, action) => {
    switch(action.type){
        case GET_NOW_PLAYING:
            return{
                ...state,
                getListNowPlayingResult: action.payload.data,
                getListNowPlayingLoading: action.payload.loading,
                getListNowPlayingError: action.payload.error
            }
        default:
            return state;
    }
}

export default moviewNowPlaying