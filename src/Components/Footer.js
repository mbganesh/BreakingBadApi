import { Typography } from "@mui/material";
import React from "react";
import Colors from "../constants/Colors";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: Colors.DARK_FOUR,
        color: Colors.WHITE_COLOR,
        height:'5vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Typography variant="body1">
        {" "}
        Developed By{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open("https://mbganesh.github.io/my_profile/");
          }}
        >
          {" "}
          @mbganesh{" "}
        </span>{" "}
      </Typography>
    </div>
  );
}
