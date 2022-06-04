import { Card, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import APIClient from "../constants/APIClient";
import Colors from "../constants/Colors";
import AppBarHead from "./AppBarHead";
import Footer from "./Footer";

export default function HomePage() {
    const navigate = useNavigate()

  const CardData = [
    {
      title: "Characters",
      path:'/character',
      end_point: APIClient.API_CHARACTERS,
    },
    {
      title: "Quotes",
      path:'/quote',
      end_point: APIClient.API_QUOTES,
    },
    {
      title: "Episodes",
      path:'/episode',
      end_point: APIClient.API_EPISODES,
    },
    {
      title: "Deaths",
      path:'/death',
      end_point: APIClient.API_DEATHS,
    },
  ]

  const handleCard = (obj) => {
     navigate(obj.path , {state:obj.end_point})
  }

  return (
    <div>
   <AppBarHead  setPage='home' />

      <div
        style={{
          backgroundColor: Colors.DARK_THREE,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          height: "88vh",
          marginTop:'7vh'
        }}
      >
        {CardData.map((obj, index) => (
          <Card
          onClick={() => handleCard(obj)}
            sx={{
              height: 100,
              width: 200,
              margin: "20px",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            transition:'0.5s',
              "&:hover": {
                backgroundColor: Colors.DARK_FOUR,
                color: Colors.WHITE_COLOR,
                cursor:'pointer',
                borderRadius:'20px',
                border:'1px solid #fff'
              },
            }}
          >
            <Typography variant="h4"> {obj.title} </Typography>
          </Card>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
