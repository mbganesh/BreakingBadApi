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

export default function DeathPage() {
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
        {ApiDataRef.current.map((obj, i) => (
          <Card
            sx={{
              width: "300px",
              borderRadius: "10%",
              margin: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >


              
<Typography variant="h5" sx={{ padding: "10px 0", width:'100%' ,textAlign:'center' , backgroundColor:Colors.DARK_TWO , color:Colors.WHITE_COLOR}}> {obj.death} </Typography>

            
         <div style={{padding:'10px'}}>
         <Typography variant="subtitle1" sx={{padding:'10px' ,textAlign:'center' }}>
          Death :  <span style={{fontWeight:'bold'}}>{obj.death}</span>
            </Typography>

            <br />
            <Typography>
              {" "}
              Cause : <span style={{ fontWeight: "bold" }}>
                {" "}
                {obj.cause}{" "}
              </span>{" "}
            </Typography>
            <br />
            <Typography>
              {" "}
              Responsible :{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {obj.responsible}{" "}
              </span>{" "}
            </Typography>
            <br />
            <Typography>
              {" "}
              Last Word :{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {obj.last_words}{" "}
              </span>{" "}
            </Typography>
            <br />

           <div style={{ width:'100%'}} >
           <Stack direction='row' justifyContent='space-between' p={2}> 
            <Typography>
            Season :  <span style={{fontWeight:'bold'}}>{obj.season}</span>
            </Typography>

            <Typography>
            Episode :  <span style={{fontWeight:'bold'}}>{obj.episode}</span>
            </Typography>
          </Stack>
          <br />
          <Typography variant="subtitle1" sx={{padding:'10px' ,textAlign:'center' }}>
              {" "}
              Number Of Deaths :{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                {obj.number_of_deaths}{" "}
              </span>{" "}
            </Typography>

           </div>

         </div>

          </Card>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
