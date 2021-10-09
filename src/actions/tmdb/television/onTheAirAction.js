import axios from "axios"
import ResponseDispatch from "../../../components/Common/Dispatch/ResponseDispatch"
import * as constTelevision from "../../../constant/tmdb/television/television"

export const TELEVISION_ON_THE_AIR = "TELEVISION_ON_THE_AIR"
export const TIMEOUT = 120000

export const onTheAirAction = () => {
    return (dispatch) => {
        dispatch(
            ResponseDispatch(TELEVISION_ON_THE_AIR, true, false, false)
        )

        //get API
        axios({
            method: "GET",
            url: constTelevision.TMDB_ON_THE_AIR_URL,
            timeout: TIMEOUT
        }).then((Response)=>{
            dispatch(ResponseDispatch(TELEVISION_ON_THE_AIR, false, Response.data, false))
        }).catch((error)=>{
            dispatch(ResponseDispatch(TELEVISION_ON_THE_AIR, false, false, error.message))
        })
    }
}