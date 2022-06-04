import React, { useEffect } from "react";
import useStateRef from "react-usestateref";
import { useLocation } from "react-router-dom";
import Colors from "../constants/Colors";
import AppBarHead from "./AppBarHead";
import APIClient from "../constants/APIClient";
import axios from "axios";

import Images from "../constants/Images";
import { Card, Divider, Stack, Typography } from "@mui/material";

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
        height: "93vh",
      }}
    >

      
    </div>
  </div>
  )
}
