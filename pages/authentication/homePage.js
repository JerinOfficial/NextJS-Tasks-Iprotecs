import Layout from "@/layout/Layout";
import { Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";

export const logoutHandler = () => {
  window.localStorage.clear();
  window.location.href = "/authentication/auth";
  window.localStorage.setItem("isLoggedin", false);
};

export default function HomePage({ datas }) {
  const [auth, setauth] = useState("");

  useEffect(() => {
    setauth(localStorage.getItem("isLoggedin"));
  }, []);
  if (auth === "false" || auth === null) {
    logoutHandler();
  }
  // console.log("auth", auth);
  return (
    <Layout title={"USER"}>
      <Box
        sx={{
          padding: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <Stack
          sx={{
            boxShadow: "0 0 2px",
            padding: "10px",
            borderRadius: "5px",
            width: "350px",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>
            {"Name : " + datas?.name}
          </Typography>
          <Typography>{datas?.email}</Typography>
          <Button onClick={logoutHandler} variant="outlined" color="primary">
            Logout
          </Button>
        </Stack>
      </Box>
    </Layout>
  );
}
