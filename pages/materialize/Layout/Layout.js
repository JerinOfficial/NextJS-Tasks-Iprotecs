import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import React from "react";
import style from "../materialize.module.css";
import Logo from "../assets/Logo";
import Typography from "@mui/material/Typography";

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
      <div className={style.contentContainer}>
        <Box
          sx={{
            position: "absolute",
            top: "30px",
            left: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Logo />
          <Typography
            variant="h6"
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              color: "rgba(76, 78, 100, 0.87)",
              letterSpacing: "0.18px",
            }}
          >
            Materialize
          </Typography>
        </Box>
        <div className={style.imageCover}>
          <Stack className={style.imageContainer}>{image}</Stack>
        </div>
        <div className={style.maskImgContainer}>{maskImg}</div>
      </div>
      <div
        className={style.formContainer}
        style={{
          background: "white",
          padding: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Stack className={style.resFormContainer}>
          <div className={style.resForm}>
            <Logo />
            <Typography
              variant="h6"
              sx={{
                fontSize: "24px",
                fontWeight: 600,
                color: "rgba(76, 78, 100, 0.87)",
                letterSpacing: "0.18px",
              }}
            >
              Materialize
            </Typography>
          </div>
        </Stack>
        {children}
      </div>
    </Stack>
  );
}
