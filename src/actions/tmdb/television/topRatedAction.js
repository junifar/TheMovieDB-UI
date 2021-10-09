import axios from "axios"
import ResponseDispatch from "../../../components/Common/Dispatch/ResponseDispatch"
import * as constTelevision from "../../../constant/tmdb/television/television"

export const TELEVISION_TOP_RATED = "TELEVISION_TOP_RATED"
export const TIMEOUT = 120000

export const topRatedAction = () => {
    return (dispatch) => {
        dispatch(
            ResponseDispatch(TELEVISION_TOP_RATED, true, false, false)
        )

        //get API
        axios({
            method: "GET",
            url: constTelevision.TMDB_TOP_RATED_URL,
            timeout: TIMEOUT
        }).then((Response)=>{
            dispatch(ResponseDispatch(TELEVISION_TOP_RATED, false, Response.data, false))
        }).catch((error)=>{
            dispatch(ResponseDispatch(TELEVISION_TOP_RATED, false, false, error.message))
        })
    }
}