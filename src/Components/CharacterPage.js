import React, { useEffect } from "react";
import useStateRef from "react-usestateref";
import { useLocation } from "react-router-dom";
import Colors from "../constants/Colors";
import AppBarHead from "./AppBarHead";
import APIClient from "../constants/APIClient";
import axios from "axios";
import CakeIcon from '@mui/icons-material/Cake';
import { Stack , Typography } from "@mui/material";
import { styled } from "@mui/system";
import Footer from "./Footer";

const MyCard = styled("div")(({ theme }) => ({
  width: "280px",
  height: "500px",
  borderRadius: "15px",
  padding: "1.5rem",
  background: "white",
  position: "relative",
  display: "flex",
  alignItems: "flex-end",
  transition: `0.4s ease-out`,
  boxShadow: `0px 7px 10px rgba(black, 0.5)`,

  margin:'20px',

  "&:hover": {
    transform: `translateY(20px)`,
    "&:before": {
      opacity: 1,
    },
    ".info": {
      opacity: 1,
      transform: `translateY(0px)`,
    },
  },

  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    background: `rgba(black, 0.6)`,
    zIndex: 2,
    transition: "0.5s",
    opacity: 0,
  },

  ".img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: "15px",
  },

  ".info": {
    position: "relative",
    zIndex: 3,
    color: "white",
    opacity: 0,
    transform: `translateY(30px)`,
    transition: "0.5s",
  },
}));

export default function CharacterPage() {
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
     <AppBarHead  setPage='' />

     <div
        style={{
          backgroundColor: Colors.DARK_THREE,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop:'7vh'
        }}
      >
        {ApiDataRef.current.map((obj, i) => (
          // card
          <MyCard key={i}>
            <img className="img" src={obj.img} alt="loading" />

            {/* info */}
            <div className="info">
             <Stack
            
             direction='row' justifyContent='space-between'> 
             <h3 style={{margin:'10px'}} > {obj.name} </h3>
             <h4 style={{margin:'10px'}} >{obj.portrayed}</h4  >
             </Stack>

             <Stack>
             <Typography variant="subtitle1" sx={{ fontWeight: "bold" ,  }}>
             Occupation :
              </Typography>
              <ul>
                {
                  obj.occupation.map((txt) =>(
                    <li> {txt} </li>
                  ))
                }
              </ul>
            </Stack>


              <Stack>

              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Birthday :
              </Typography>
              <Typography sx={{alignItems:'center'}}> <span> {<CakeIcon/>} </span>  {obj.birthday} </Typography>
            </Stack>


            </div>
          </MyCard>
        ))}
      </div>

      <Footer/>
    </div>
  );
}
