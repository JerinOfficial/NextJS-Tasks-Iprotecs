import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import { createAccont } from "@/actions/user";
import Loader from "@/components/Loader";

const defaultTheme = createTheme();

export default function SignUp() {
  const [isloading, setisloading] = useState(true);
  const [emailErr, setemailErr] = useState(false);
  const [passwordErr, setpasswordErr] = useState(false);
  const [nameErr, setnameErr] = useState(false);
  const [auth, setauth] = useState("");
  const [formDatas, setformDatas] = useState({
    name: "",
    userType: "",
    email: "",
    password: "",
  });
  const [errorMsg, seterrorMsg] = useState({
    password: "password is required",
    email: "email is required",
    name: "name is required",
  });

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

  const { email, password, userType, name } = formDatas;

  const onchangeName = (e) => {
    setformDatas({ ...formDatas, name: e.target.value });
  };

  const onchangeUserType = (e) => {
    setformDatas({ ...formDatas, userType: e.target.value });
  };

  const onchangeEmail = (e) => {
    setformDatas({ ...formDatas, email: e.target.value });
  };

  const onchangePassword = (e) => {
    setformDatas({ ...formDatas, password: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const allDatas = {
      name,
      email,
      password,
      userType,
    };
    if (email !== "" && password !== "" && name !== "" && userType !== "") {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email.match(emailRegex)) {
        setemailErr(false);
      } else {
        setemailErr(true);
        seterrorMsg({ ...errorMsg, email: "email is not valid" });
      }
      if (password.length < 5) {
        setpasswordErr(true);
        seterrorMsg({
          ...errorMsg,
          password: "password should contain minimum 5 letters",
        });
      } else {
        setpasswordErr(false);
      }

      if (
        email.match(emailRegex) &&
        password.length > 4 &&
        userType != "" &&
        name !== ""
      ) {
        createAccont(allDatas);
        setnameErr(false);
        setformDatas({
          name: "",
          userType: "",
          email: "",
          password: "",
        });
      }
    } else {
      if (name !== "") {
        setnameErr(false);
      } else {
        setnameErr(true);
      }
      if (email === "") {
        setemailErr(true);
      } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.match(emailRegex)) {
          setemailErr(false);
        } else {
          setemailErr(true);
          seterrorMsg({ ...errorMsg, email: "email is not valid" });
        }
      }
      if (password === "") {
        setpasswordErr(true);
      } else {
        if (password.length < 5) {
          setpasswordErr(true);
          seterrorMsg({
            ...errorMsg,
            password: "password should contain minimum 5 letters",
          });
        } else {
          setpasswordErr(false);
        }
      }
    }
  };

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
                Sign up
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <FormLabel id="userType">Register as</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="userType"
                  name="userType"
                  onChange={onchangeUserType}
                >
                  <FormControlLabel
                    value="user"
                    control={<Radio />}
                    label="User"
                  />
                  <FormControlLabel
                    value="admin"
                    control={<Radio />}
                    label="Admin"
                  />
                  <FormControlLabel
                    value="operator"
                    control={<Radio />}
                    label="Operator"
                  />
                </RadioGroup>

                <TextField
                  value={formDatas.name}
                  error={nameErr}
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Username"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  helperText={nameErr && errorMsg.name}
                  onChange={onchangeName}
                />
                <TextField
                  value={formDatas.email}
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
                  value={formDatas.password}
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
                  label="I agree the terms and conditions"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, color: "black" }}
                >
                  Sign Up
                </Button>

                <Link href="/authentication/login" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}
