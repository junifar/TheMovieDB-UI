import axios from "axios"
import * as NowPlaying from "../../../constant/tmdb/movie/now_playing"

export const GET_NOW_PLAYING = 'GET_NOW_PLAYING'

const TMDB_NOW_PLAYING_URL = NowPlaying.TMDB_NOW_PLAYING_URL + '?api_key=' + NowPlaying.TMDB_API_KEY + '&language=en-US&page=1'

export const getNowPlaying = () => {
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_NOW_PLAYING,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            }
        })

        //get API
        axios({
            method: "GET",
            url: TMDB_NOW_PLAYING_URL,
            timeout: 120000,
        }).then((Response)=>{
            //success get api
            dispatch({
                type: GET_NOW_PLAYING,
                payload: {
                    loading: false,
                    data: Response.data,
                    errorMessage: false,
                }   
            })
        }).catch((error) => {
            dispatch({
                type: GET_NOW_PLAYING,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: error.message,
                }
            })
        })
    }
}