import * as common from "../common"

export const TMDB_TELEVISION_URL = common.TMDB_API_3_URL + '/tv'

export const TMDB_AIRING_TODAY_URL = TMDB_TELEVISION_URL + '/airing_today?api_key=' + common.TMDB_API_KEY + '&language=id-ID&page=1'
export const TMDB_ON_THE_AIR_URL = TMDB_TELEVISION_URL + '/on_the_air?api_key=' + common.TMDB_API_KEY + '&language=id-ID&page=1'
export const TMDB_POPULAR_URL = TMDB_TELEVISION_URL + '/popular?api_key=' + common.TMDB_API_KEY + '&language=id-ID&page=1'
export const TMDB_TOP_RATED_URL = TMDB_TELEVISION_URL + '/top_rated?api_key=' + common.TMDB_API_KEY + '&language=id-ID&page=1'