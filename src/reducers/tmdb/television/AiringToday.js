import { TELEVISION_AIRING_TODAY } from "../../../actions/tmdb/television/airingTodayAction";

const initialState = {
    airingTodayResult: false,
    airingTodayLoading: false,
    airingTodayError: false
}

const AiringTodayReducer = (state = initialState, action) => {
    switch(action.type){
        case TELEVISION_AIRING_TODAY:
            return{
                ...state,
                airingTodayResult: action.payload.data,
                airingTodayLoading: action.payload.loading,
                airingTodayError: action.payload.error
            }
        default:
            return state;
    }
}

export default AiringTodayReducer