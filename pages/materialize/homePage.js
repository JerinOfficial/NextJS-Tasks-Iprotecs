import React from "react";
import Layout from "./Layout/Layout";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import style from "./materialize.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import { Button } from "@mui/material";
import Image from "next/image";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";

export default function HomePage() {
  return (
    <Layout
      maskImg={<Image src={require("./assets/auth-v2-login-mask-light.png")} />}
      image={<Image src={require("./assets/bg.png")} />}
    >
      <Stack className={style.formBox} sx={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              borderRadius: "8px",
              marginBottom: "24px",
              gap: "6px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: "24px",
                fontWeight: 600,
                color: "rgba(76, 78, 100, 0.87)",
                letterSpacing: "0.18px",
              }}
            >
              Welcome to Materialize! 👋🏻
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "rgba(76, 78, 100, 0.6)",
                letterSpacing: "0.15px",
              }}
            >
              Please sign-in to your account and start the adventure
            </Typography>
          </Box>
          <Box
            sx={{
              color: "rgb(102, 108, 255)",
              backgroundColor: "rgba(102, 108, 255, 0.12)",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              fontSize: "12px",
              letterSpacing: ".4px",
              padding: "12px 16px",
              borderRadius: "8px",
              marginBottom: "24px",
            }}
          >
            <span>
              Admin: <strong>admin@materialize.com</strong> / Pass:
              <strong>admin</strong>
            </span>
            <span>
              Client: <strong>client@materialize.com</strong> / Pass:
              <strong>client</strong>
            </span>
          </Box>
          <FormGroup sx={{ display: "flex", gap: "15px" }}>
            <TextField
              type="email"
              label="Email"
              placeholder="admin@materialize.com"
            />
            <TextField type="password" label="Password" />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1px",
              }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember Me"
                sx={{ color: "#4C4E6499", fontSize: "14px" }}
              />
              <Link href="#" underline="none" sx={{ fontSize: "14px" }}>
                Forgot Password?
              </Link>
            </Box>

            <Button
              variant="contained"
              style={{ backgroundColor: "#666cff", marginBottom: "28px" }}
            >
              login
            </Button>
          </FormGroup>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Typography sx={{ color: "#4C4E6499", fontSize: "16px" }}>
              New on our platform?
            </Typography>
            <Link href="#" underline="none" sx={{ fontSize: "16px" }}>
              Create an account
            </Link>
          </Box>
        </Box>
      </Stack>
    </Layout>
  );
}
