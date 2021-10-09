import axios from "axios";

export const GET_LIST_USER = 'GET_LIST_USER';
export const TIMEOUT = 120000;
export const GET_LIST_USET_URL = 'https://jsonplaceholder.typicode.com/users'


export const getListUer = () => {
    return (dispatch) => {
        
        //loading
        dispatch({
            type: GET_LIST_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: "GET",
            url: GET_LIST_USET_URL,
            timeout: TIMEOUT
        }).then((Response)=>{
            //success get api
            dispatch({
                type: GET_LIST_USER,
                payload: {
                    loading: false,
                    data: Response.data,
                    errorMessage: true
                }
            })
            
        }).catch((error) => {
            //error get api
            dispatch({
                type: GET_LIST_USER,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message
                }
            })
        })

    }
}