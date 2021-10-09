import axios from "axios"
import * as NowPlaying from "../../../constant/tmdb/movie/now_playing"

export const GET_TOP_RATING = "GET_TOP_RATING"

const TMDB_TOP_RATING_URL = NowPlaying.TMDB_TOP_RATING_URL + '?api_key=' + NowPlaying.TMDB_API_KEY + '&language=en-US&page=1'

export const getTopRating = () => {
    return (dispatch) => {
        dispatch({
            type: GET_TOP_RATING,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        })

        //get API
        axios({
            method: "GET",
            url: TMDB_TOP_RATING_URL,
            timeout: 120000
        }).then((Response)=>{
            console.log("Test")
            console.log(Response)
            dispatch({
                type: GET_TOP_RATING,
                payload: {
                    loading: false,
                    data: Response.data,
                    errorMessage: false,
                }   
            })
        }).catch((error)=>{
            dispatch({
                type: GET_TOP_RATING,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                }
            })
        })

    }
}
