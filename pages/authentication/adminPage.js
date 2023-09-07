import Layout from "@/layout/Layout";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { logoutHandler } from "./homePage";

export default function AdminPage({ datas }) {
  const [auth, setauth] = useState("");

  useEffect(() => {
    setauth(localStorage.getItem("isLoggedin"));
  }, []);
  if (auth === "false" || auth === null) {
    logoutHandler();
  }
  return (
    <Layout title={"ADMIN"}>
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
