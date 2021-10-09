import axios from "axios"
import ResponseDispatch from "../../../components/Common/Dispatch/ResponseDispatch"
import * as constTelevision from "../../../constant/tmdb/television/television"

export const TELEVISION_POPULAR = "TELEVISION_POPULAR"
export const TIMEOUT = 120000

export const popularAction = () => {
    return (dispatch) => {
        dispatch(
            ResponseDispatch(TELEVISION_POPULAR, true, false, false)
        )

        //get API
        axios({
            method: "GET",
            url: constTelevision.TMDB_POPULAR_URL,
            timeout: TIMEOUT
        }).then((Response)=>{
            dispatch(ResponseDispatch(TELEVISION_POPULAR, false, Response.data, false))
        }).catch((error)=>{
            dispatch(ResponseDispatch(TELEVISION_POPULAR, false, false, error.message))
        })
    }
}