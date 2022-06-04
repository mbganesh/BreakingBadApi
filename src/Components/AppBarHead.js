import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import BackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'
import Colors from '../constants/Colors'
import General from '../constants/General'

export default function AppBarHead({setPage}) {
  const navigate = useNavigate()
  return (

    <div>
        <AppBar position='fixed' >
            <Toolbar sx={{backgroundColor:Colors.DARK_TWO , height:'7vh'}}>
                <Typography sx={{fontSize:'25px',flex:1}}> {General.ProjectMetaData.APP_NAME} </Typography>

                  <Button startIcon={<BackIcon/>} variant='contained' sx={{ display: setPage==='home'? 'none' : ''  }} onClick={() => {navigate(-1)}}> Back </Button>

            </Toolbar>
        </AppBar>
    </div>
  )
}
