import React, { Fragment } from 'react'
import Link from '@mui/material/Link';

function Menu() {
    return (
        <Fragment>
            <Link
                href={"/"}
                color="inherit"
                underline="none" sx={{ m:2 }}>
                Home
            </Link>
            <Link
                color="inherit"
                underline="none"
                href={"/movie/now_playing"} sx={{ m:2 }}>
                Now Playing
            </Link>
            <Link
                color="inherit"
                underline="none"
                href={"/movie/top_rating"} sx={{ m:2 }}>
                Top Rating
            </Link>
            <Link
                color="inherit"
                underline="none"
                href={"/summary"} sx={{ m:2 }}>
                Summary User
            </Link>
        </Fragment>
    )
}

export default Menu
