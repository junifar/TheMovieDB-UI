import {GET_TOP_RATING} from '../../../../actions/tmdb/movie/topRatingAction'

const initialState = {
    getTopRatingResult: false,
    getTopRatingLoading: false,
    getTopRatingError: false
}

const movieTopRating = (state = initialState, action) => {
    switch(action.type){
        case GET_TOP_RATING:
            return{
                ...state,
                getTopRatingResult: action.payload.data,
                getTopRatingLoading: action.payload.loading,
                getTopRatingError: action.payload.error
            }
        default:
            return state;
    }
}

export default movieTopRating