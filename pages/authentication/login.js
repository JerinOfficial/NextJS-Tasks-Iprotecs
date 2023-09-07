import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { loginUser } from "@/actions/user";
import Loader from "@/components/Loader";

const defaultTheme = createTheme();

export default function Login() {
  const [isloading, setisloading] = useState(true);
  const [emailErr, setemailErr] = useState(false);
  const [passwordErr, setpasswordErr] = useState(false);
  const [formDatas, setformDatas] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, seterrorMsg] = useState({
    password: "password is required",
    email: "email is required",
  });

  const { email, password } = formDatas;

  const onchangeEmail = (e) => {
    setformDatas({ ...formDatas, email: e.target.value });
  };
  const onchangePassword = (e) => {
    setformDatas({ ...formDatas, password: e.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email !== "" && password !== "") {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email.match(emailRegex)) {
        setemailErr(false);
      } else if (password.length < 6) {
        setemailErr(true);

        setpasswordErr(true);
        seterrorMsg({
          email: "email is not valid",
          password: "password should contain minimum 5 letters",
        });
      } else {
        setpasswordErr(false);
      }

      loginUser().then((data) => {
        if (data) {
          if (data?.email === email && data?.password === password) {
            window.location.href = "/authentication/auth";
            localStorage.setItem("isLoggedin", true);
          } else {
            if (data?.email !== email) {
              setemailErr(true);
              seterrorMsg({ ...errorMsg, email: "email not exsist" });
            }
            if (data?.password !== password) {
              setpasswordErr(true);
              seterrorMsg({ ...errorMsg, password: "password incorrect" });
            }
          }
        } else {
          setemailErr(true);
          setpasswordErr(true);
          seterrorMsg({
            password: "password is invalid",
            email: "email not found",
          });
        }
      });
    } else {
      setemailErr(true);
      setpasswordErr(true);
      seterrorMsg({
        password: "password is required",
        email: "email is required",
      });
    }
  };
  const [auth, setauth] = useState("");
  useEffect(() => {
    const res = localStorage.getItem("isLoggedin");
    console.log(auth, "IsLOGGED");
    setauth(res);
    const timer = setTimeout(() => {
      setisloading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  if (auth === "true") {
    window.location.href = "/authentication/auth";
  }

  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  error={emailErr}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  helperText={emailErr && errorMsg.email}
                  onChange={onchangeEmail}
                />
                <TextField
                  error={passwordErr}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  helperText={passwordErr && errorMsg.password}
                  onChange={onchangePassword}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, color: "black" }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs></Grid>
                  <Grid item>
                    <Link href="/authentication/signUp" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}
