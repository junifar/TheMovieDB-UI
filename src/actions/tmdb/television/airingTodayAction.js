import axios from "axios"
import ResponseDispatch from "../../../components/Common/Dispatch/ResponseDispatch"
import * as constTelevision from "../../../constant/tmdb/television/television"

export const TELEVISION_AIRING_TODAY = "TELEVISION_AIRING_TODAY"
export const TIMEOUT = 120000

export const airingTodayAction = () => {
    return (dispatch) => {
        dispatch(
            ResponseDispatch(TELEVISION_AIRING_TODAY, true, false, false)
        )

        //get API
        axios({
            method: "GET",
            url: constTelevision.TMDB_AIRING_TODAY_URL,
            timeout: TIMEOUT
        }).then((Response)=>{
            dispatch(ResponseDispatch(TELEVISION_AIRING_TODAY, false, Response.data, false))
        }).catch((error)=>{
            dispatch(ResponseDispatch(TELEVISION_AIRING_TODAY, false, false, error.message))
        })
    }
}