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
                href={"/movie"} sx={{ m:2 }}>
                Movie
            </Link>
            <Link
                color="inherit"
                underline="none"
                href={"/tv"} sx={{ m:2 }}>
                TV
            </Link>
            <Link
                color="inherit"
                underline="none"
                href={"/tv/detail"} sx={{ m:2 }}>
                Detail
            </Link>
        </Fragment>
    )
}

export default Menu
