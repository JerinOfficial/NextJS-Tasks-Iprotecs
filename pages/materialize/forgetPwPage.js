import React, { useState } from "react";
import Layout from "./Layout/Layout";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import style from "./materialize.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "@mui/material/Link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ForgetPwPage() {
  const [email, setemail] = useState("");
  const [emailErr, setemailErr] = useState(false);
  const [errAlert, seterrAlert] = useState("email is a required field");

  const emailOnchangeHandler = (e) => {
    setemail(e.target.value);
  };

  const emailBlurHandler = () => {
    if (email === "") {
      setemailErr(true);
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setemailErr(true);
        seterrAlert("email must be a valid email");
      } else {
        setemailErr(false);
      }
    }
  };

  const validation = () => {
    if (email === "") {
      setemailErr(true);
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setemailErr(true);
        seterrAlert("email must be a valid email");
      } else {
        setemailErr(false);
      }
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email !== "") {
      console.log(email, "form");
      setemailErr(false);
      validation();
    } else {
      setemailErr(true);
    }
  };

  return (
    <Layout
      maskImg={<Image alt="mask" src={require("./assets/forgetpw-mask.png")} />}
      image={
        <Image
          alt="bg"
          className={style.bgImg}
          src={require("./assets/forgetpw-Bg.png")}
        />
      }
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
              className={style.formHeading}
              variant="h5"
              sx={{
                fontSize: "24px",
                fontWeight: 600,
                color: "rgba(76, 78, 100, 0.87)",
                letterSpacing: "0.18px",
              }}
            >
              Forgot Password? 🔒
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "rgba(76, 78, 100, 0.6)",
                letterSpacing: "0.15px",
              }}
            >
              Enter your email and we′ll send you instructions to reset your
              password
            </Typography>
          </Box>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            style={{ display: "flex", gap: "15px", flexDirection: "column" }}
          >
            <TextField
              onBlur={emailBlurHandler}
              error={emailErr && true}
              type="email"
              label="Email"
              helperText={emailErr && errAlert}
              value={email}
              onChange={emailOnchangeHandler}
              inputProps={{ style: { color: "#677086" } }}
              InputProps={{
                style: {
                  borderRadius: "8px",
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "#666cff",
                marginBottom: "28px",
                padding: "8px 26px",
                borderRadius: "10px",
              }}
            >
              send reset link
            </Button>
          </form>
          <div
            className={style.resBox2}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "6px",
              fontWeight: 400,
              letterSpacing: "0.15px",
              fontSize: "16px",
            }}
          >
            <Link
              className={`${inter.className}`}
              href="/materialize/homePage"
              underline="none"
            >
              {"< Back to login"}
            </Link>
          </div>
        </Box>
      </Stack>
    </Layout>
  );
}
