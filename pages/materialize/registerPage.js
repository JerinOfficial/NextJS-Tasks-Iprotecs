import React, { useState } from "react";
import Layout from "./Layout/Layout";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import style from "./materialize.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Image from "next/image";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import GitHub from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { Inter } from "next/font/google";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { FormControl } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function RegisterPage() {
  const [hidePw, sethidePw] = useState(false);
  const [formDatas, setformDatas] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { email, password, name } = formDatas;
  const [nameErr, setnameErr] = useState(false);
  const [emailErr, setemailErr] = useState(false);
  const [passwordErr, setpasswordErr] = useState(false);
  const [errAlert, seterrAlert] = useState({
    name: "name is a required field",
    email: "email is a required field",
    password: "password must be at least 5 characters",
  });

  const nameOnchangeHandler = (e) => {
    setformDatas({ ...formDatas, name: e.target.value });
  };
  const emailOnchangeHandler = (e) => {
    setformDatas({ ...formDatas, email: e.target.value });
  };
  const passwordOnchangeHandler = (e) => {
    setformDatas({ ...formDatas, password: e.target.value });
  };

  const unameBlurHandler = () => {
    if (name === "") {
      setnameErr(true);
    } else {
      setnameErr(false);
    }
  };
  const emailBlurHandler = () => {
    if (email === "") {
      setemailErr(true);
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setemailErr(true);
        seterrAlert({ ...errAlert, email: "email must be a valid email" });
      } else {
        setemailErr(false);
      }
    }
  };
  const passwordBlurHandler = () => {
    if (password.length < 5) {
      setpasswordErr(true);
    } else {
      setpasswordErr(false);
    }
  };

  const validation = () => {
    if (email === "") {
      setemailErr(true);
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setemailErr(true);
        seterrAlert({ ...errAlert, email: "email must be a valid email" });
      } else {
        setemailErr(false);
      }
    }
    if (password.length < 5) {
      setpasswordErr(true);
    } else {
      setpasswordErr(false);
    }
    if (name === "") {
      setnameErr(true);
    } else {
      setnameErr(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "" && name !== "") {
      console.log(formDatas, "form");
      setemailErr(false);
      setpasswordErr(false);
      setnameErr(false);
      validation();
    } else {
      setemailErr(true);
      setpasswordErr(true);
      setnameErr(true);
    }
  };

  return (
    <Layout
      maskImg={<Image alt="mask" src={require("./assets/register-mask.png")} />}
      image={
        <Image
          alt="bg"
          className={style.bgImg}
          src={require("./assets/registerBg.png")}
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
              Adventure starts here 🚀
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "rgba(76, 78, 100, 0.6)",
                letterSpacing: "0.15px",
              }}
            >
              Make your app management easy and fun!
            </Typography>
          </Box>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            style={{ display: "flex", gap: "15px", flexDirection: "column" }}
          >
            <TextField
              onBlur={unameBlurHandler}
              error={nameErr && true}
              type="text"
              label="Username"
              placeholder="johndoe"
              helperText={nameErr && errAlert.name}
              value={name}
              onChange={nameOnchangeHandler}
              inputProps={{ style: { color: "#677086" } }}
              InputProps={{
                style: {
                  borderRadius: "8px",
                },
              }}
              autoFocus
            />
            <TextField
              onBlur={emailBlurHandler}
              error={emailErr && true}
              type="email"
              label="Email"
              placeholder="user@materialize.com"
              helperText={emailErr && errAlert.email}
              value={email}
              onChange={emailOnchangeHandler}
              inputProps={{ style: { color: "#677086" } }}
              InputProps={{
                style: {
                  borderRadius: "8px",
                },
              }}
            />
            <FormControl sx={{ position: "relative" }}>
              <TextField
                onBlur={passwordBlurHandler}
                inputProps={{
                  style: {
                    letterSpacing: hidePw ? "" : "3px",
                    color: "#677086",
                    fontSize: hidePw ? "" : "large",
                    padding: hidePw ? "" : "15px",
                  },
                }}
                InputProps={{
                  style: {
                    borderRadius: "8px",
                  },
                }}
                sx={{ color: "#95858d" }}
                error={passwordErr && true}
                type={hidePw ? "text" : "password"}
                label="Password"
                helperText={passwordErr && errAlert.password}
                value={password}
                onChange={passwordOnchangeHandler}
              />
              <IconButton
                sx={{ position: "absolute", right: 15, top: 10 }}
                edge="end"
                type="submit"
                onClick={() => {
                  sethidePw((p) => !p);
                }}
              >
                {hidePw ? (
                  <VisibilityOutlinedIcon />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </IconButton>
            </FormControl>

            <div
              className={style.resBox1}
              style={{
                display: "flex",
                marginBottom: "1px",
              }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="I agree to"
                sx={{ color: "#4C4E6499" }}
                className={style.resPara}
              />
              <Link
                href="#"
                underline="none"
                sx={{ fontSize: "14px" }}
                className={style.resPara}
              >
                privacy policy & terms
              </Link>
            </div>

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
              sign up
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
            <Typography
              className={`${inter.className}`}
              c
              sx={{ color: "#4C4E6499" }}
            >
              Already have an account?
            </Typography>
            <Link
              className={`${inter.className}`}
              href="/materialize/homePage"
              underline="none"
            >
              Sign in instead
            </Link>
          </div>
          <Divider
            sx={{
              fontSize: "16px",
              color: "#4C4E64DE",
              textAlign: "center",
              padding: "20px 0 30px",
            }}
          >
            <Typography variant="p">or</Typography>
          </Divider>
          <Box
            sx={{
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton>
              <Facebook sx={{ color: "#497ce2" }} />
            </IconButton>
            <IconButton>
              <Twitter sx={{ color: "#1da1f2" }} />
            </IconButton>
            <IconButton>
              <GitHub sx={{ color: "#272727" }} />
            </IconButton>
            <IconButton>
              <GoogleIcon sx={{ color: "#dc483b" }} />
            </IconButton>
          </Box>
        </Box>
      </Stack>
    </Layout>
  );
}
