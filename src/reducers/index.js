import { combineReducers } from "redux";
import UserReducer from "./user";
import MovieNowPlayingReducer from "./tmdb/movie/NowPlaying"
import MovieTopRatingReducer from "./tmdb/movie/TopRating"
import TVAiringTodayReducer from "./tmdb/television/AiringToday"
import TVOnTheAirReducer from "./tmdb/television/OnTheAirReducer"
import TVPopularReducer from "./tmdb/television/PopularReducer"
import TVTopRatedReducer from "./tmdb/television/TopRatedReducer"

export default combineReducers({
    UserReducer,
    MovieNowPlayingReducer,
    MovieTopRatingReducer,
    TVAiringTodayReducer,
    TVOnTheAirReducer,
    TVPopularReducer,
    TVTopRatedReducer
})