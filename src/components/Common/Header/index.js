import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Menu from '../Menu'

function Header(props) {
    return (
        <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
          <Menu />
        </Toolbar>
      </AppBar>
    )
}

export default Header
