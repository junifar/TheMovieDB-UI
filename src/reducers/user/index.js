import { GET_LIST_USER } from '../../actions/userAction'

const initialState = {
    getListUserResult: false,
    getListUserLoading: false,
    getListUserError: false
}

const user = (state = initialState, action) => {
    switch(action.type){
        case GET_LIST_USER:
            return{
                ...state,
                getListUserResult: action.payload.data,
                getListUserLoading: action.payload.loading,
                getListUserError: action.payload.error
            }
        default:
            return state;
    }
}

export default user