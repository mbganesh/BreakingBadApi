import React, { useEffect } from "react";
import useStateRef from "react-usestateref";
import { useLocation } from "react-router-dom";
import Colors from "../constants/Colors";
import AppBarHead from "./AppBarHead";
import APIClient from "../constants/APIClient";
import axios from "axios";

import Images from "../constants/Images";
import { Card, Divider, Stack, Typography } from "@mui/material";

export default function QuotePage() {
  const location = useLocation();
  const [endPoint, setEndPoint, endPointRef] = useStateRef("");

  const [apiData, setApiData, ApiDataRef] = useStateRef([]);

  const API = APIClient.API_BASE_URL;
  console.log(API);

  useEffect(() => {
    setEndPoint(location.state);
    console.log(endPointRef.current);

    axios.get(API + endPointRef.current).then((result) => {
      setApiData(result.data)
      console.log(ApiDataRef.current);
    });
  }, []);

  return (
    <div>
      <AppBarHead />

      <div
        style={{
          backgroundColor: Colors.DARK_THREE,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
       {
         ApiDataRef.current.map(((obj,i) => (
          <Card key={i} sx={{ width: 300, padding: "25px", margin: "20px" }}>
          <img
            src={ obj.series==="Breaking Bad" ? Images.BreakingBadImg : Images.BetterCallSaulImg}
            width="100%"
            height="100px"
            style={{objectFit:'contain' , width:'100%'}}
            alt="Loading"
          />
          <Stack>
            <Typography variant="h6">Quote : </Typography>
            <Typography>
              {obj.quote}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={5}
            justifyContent="space-between"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Stack>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Author :{" "}
              </Typography>
              <Typography>   {obj.author} </Typography>
            </Stack>

            <Stack>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Series :{" "}
              </Typography>
              <Typography> {obj.series} </Typography>
            </Stack>
          </Stack>
        </Card>
         )))
       }
        
      </div>
    </div>
  );
}
