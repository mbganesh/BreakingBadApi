import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Colors from '../constants/Colors'
import General from '../constants/General'

export default function AppBarHead() {
  return (
    <div>
        <AppBar position='sticky' >
            <Toolbar sx={{backgroundColor:Colors.DARK_TWO , height:'7vh'}}>
                <Typography sx={{fontSize:'25px'}}> {General.ProjectMetaData.APP_NAME} </Typography>
            </Toolbar>
        </AppBar>
    </div>
  )
}
