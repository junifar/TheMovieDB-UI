import { TELEVISION_ON_THE_AIR } from "../../../actions/tmdb/television/onTheAirAction";

const initialState = {
    onTheAirResult: false,
    onTheAirLoading: false,
    onTheAirError: false
}

const OnTheAirReducer = (state = initialState, action) => {
    switch(action.type){
        case TELEVISION_ON_THE_AIR:
            return{
                ...state,
                onTheAirResult: action.payload.data,
                onTheAirLoading: action.payload.loading,
                onTheAirError: action.payload.error
            }
        default:
            return state;
    }
}

export default OnTheAirReducer