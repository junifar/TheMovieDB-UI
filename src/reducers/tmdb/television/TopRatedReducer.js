import { TELEVISION_TOP_RATED } from "../../../actions/tmdb/television/topRatedAction";

const initialState = {
    topRatedResult: false,
    topRatedLoading: false,
    topRatedError: false
}

const TopRatedReducer = (state = initialState, action) => {
    switch(action.type){
        case TELEVISION_TOP_RATED:
            return{
                ...state,
                topRatedResult: action.payload.data,
                topRatedLoading: action.payload.loading,
                topRatedError: action.payload.error
            }
        default:
            return state;
    }
}

export default TopRatedReducer