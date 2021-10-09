import { TELEVISION_POPULAR } from "../../../actions/tmdb/television/popularAction";

const initialState = {
    popularResult: false,
    popularLoading: false,
    popularError: false
}

const PopularReducer = (state = initialState, action) => {
    switch(action.type){
        case TELEVISION_POPULAR:
            return{
                ...state,
                popularResult: action.payload.data,
                popularLoading: action.payload.loading,
                popularError: action.payload.error
            }
        default:
            return state;
    }
}

export default PopularReducer