import React, { useEffect } from "react";
import useStateRef from "react-usestateref";
import { useLocation } from "react-router-dom";
import Colors from "../constants/Colors";
import AppBarHead from "./AppBarHead";
import APIClient from "../constants/APIClient";
import axios from "axios";

import Images from "../constants/Images";
import { Card, Divider, Stack, Typography } from "@mui/material";
import Footer from "./Footer";

export default function EpisodePage() {
  const location = useLocation();
  const [endPoint, setEndPoint, endPointRef] = useStateRef("");

  const [apiData, setApiData, ApiDataRef] = useStateRef([]);

  const API = APIClient.API_BASE_URL;
  console.log(API);

  useEffect(() => {
    setEndPoint(location.state);
    console.log(endPointRef.current);

    axios.get(API + endPointRef.current).then((result) => {
      setApiData(result.data);
      console.log(ApiDataRef.current);
    });
  }, []);

  return (
    <div>
      <AppBarHead setPage="" />

      <div
        style={{
          backgroundColor: Colors.DARK_THREE,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "7vh",
        }}
      >
       {
         ApiDataRef.current.map((obj , i) => (
          <Card key={i} sx={{ margin: "20px", width: "300px" ,height:'500px',  borderRadius:'6px'}}>
          <Typography variant="h5" sx={{padding:'10px' ,textAlign:'center' , backgroundColor:Colors.DARK_TWO , color:Colors.WHITE_COLOR}}> {obj.series} </Typography>

          <Typography variant="subtitle1" sx={{padding:'10px' ,textAlign:'center' }}>
          Title :  <span style={{fontWeight:'bold'}}>{obj.title}</span>
            </Typography>

          <Stack direction='row' justifyContent='space-between' p={2}> 
            <Typography>
            Season :  <span style={{fontWeight:'bold'}}>{obj.season}</span>
            </Typography>

            <Typography>
            Episode :  <span style={{fontWeight:'bold'}}>{obj.episode}</span>
            </Typography>
          </Stack>

 <Typography variant="subtitle1" sx={{padding:'10px' ,textAlign:'center' }}>
          Release Date :  <span style={{fontWeight:'bold'}}>{obj.air_date}</span>
            </Typography>
            
        

            <Stack  p={2}> 
            <Typography sx={{fontWeight:'bold'}}>
            Characters :
            </Typography>

            <ul>
              {
                obj.characters.map((txt , i) =>(
                  <li>{txt}</li>
                ))
              }
            </ul>

          </Stack>



      </Card>
         ))
       }
      </div>

<Footer/>

    </div>
  );
}
