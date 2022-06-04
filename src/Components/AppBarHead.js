import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import General from '../constants/General'

export default function AppBarHead() {
  return (
    <div>
        <AppBar position='fixed'>
            <Toolbar>
                <Typography> {General.ProjectMetaData.APP_NAME} </Typography>
            </Toolbar>
        </AppBar>
    </div>
  )
}
