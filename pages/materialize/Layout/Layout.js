import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import style from "../materialize.module.css";

export default function Layout({ maskImg, children, image }) {
  return (
    <Stack
      direction="row"
      className={style.body}
      sx={{
        background: "#f7f7f9",
        padding: 0,
        margin: 0,
        display: "flex",
      }}
    >
      <div
        className={style.contentContainer}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", bottom: "63.925px" }}>{maskImg}</Box>
        <Box
          sx={{
            width: "80%",
          }}
        >
          <Stack sx={{ padding: "80px 0 80px 80px" }}>{image}</Stack>
        </Box>
      </div>
      <div
        className={style.formContainer}
        style={{
          background: "white",
          padding: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </Stack>
  );
}
