import { daysForcast, getAllDatas, getLocation } from "@/actions/weatherReport";
import Layout from "@/layout/Layout";
import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Search from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import ForcastCart from "@/components/ForcastCart";
import { Cancel } from "@mui/icons-material";
import WeatherSkeleton from "@/components/WeatherSkeleton";

export default function WeatherReport() {
  const [inputData, setinputData] = useState();
  const [forCastDays, setforCastDays] = useState("");
  const [weatherData, setweatherData] = useState("");
  const [location, setLocation] = useState(null);
  const [swapIcon, setswapIcon] = useState(false);

  const [isloading, setisloading] = useState(true);

  const ARRAY = [];

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(position.coords);
      });
    }
    const timer = setTimeout(() => {
      setisloading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleInputs = (e) => {
    e.preventDefault();
    setinputData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (swapIcon) {
      setinputData("");
      setswapIcon(false);
    } else {
      if (inputData !== "") {
        getAllDatas(inputData).then((data) => {
          if (data) {
            setweatherData(data);
          }
        });
        daysForcast(inputData).then((data) => {
          if (data) {
            setforCastDays(data.list);
          }
        });
        setswapIcon(true);
      } else {
        setswapIcon(false);
      }
    }
  };

  console.log(weatherData, "Weather");

  if (weatherData === "") {
    getLocation(location).then((data) => {
      daysForcast(data).then((data) => {
        if (data) {
          setforCastDays(data.list);
        }
      });

      getAllDatas(data).then((data) => {
        if (data) {
          setweatherData(data);
        }
      });
    });
  }

  console.log("Forcast", forCastDays);

  if (forCastDays && forCastDays.length >= 39) {
    ARRAY.push(
      forCastDays[6],
      forCastDays[14],
      forCastDays[22],
      forCastDays[30],
      forCastDays[38]
    );
  } else {
    console.log("ARRAY EMPTY");
  }

  return (
    <>
      {isloading ? (
        <WeatherSkeleton />
      ) : (
        <Layout title={"Simple  Weather  Application"}>
          <FormControl sx={{ m: 1, width: "50%" }} variant="outlined">
            <OutlinedInput
              autoFocus
              type="text"
              placeholder="type city name here..."
              value={inputData}
              onChange={handleInputs}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleSubmit} edge="end" type="submit">
                    {swapIcon ? <Cancel sx={{ color: "red" }} /> : <Search />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <Container
            maxWidth="sm"
            sx={{
              height: "68vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                padding: "4px",
                height: "120px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {ARRAY.map((item) => {
                return <ForcastCart weatherData={item} />;
              })}
            </Box>

            <Stack
              sx={{
                background: "linear-gradient(135deg,#00feba,#5b548a)",
                height: "70%",
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 0 1px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{ textAlign: "center", padding: "10px", width: "30%" }}
              >
                {weatherData.weather ? (
                  <img
                    style={{ objectFit: "contain", width: "100%" }}
                    src={
                      "https://openweathermap.org/img/wn/" +
                      weatherData?.weather[0]?.icon +
                      ".png"
                    }
                    alt="data"
                  />
                ) : (
                  "Loading"
                )}
              </div>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                {weatherData?.main?.temp}
                <span>&deg;</span>C
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {weatherData?.name}
              </Typography>
            </Stack>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                borderRadius: "10px",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Typography
                sx={{
                  boxShadow: "0 0 1px",
                  bgcolor: "white",
                  padding: "4px",
                  borderRadius: "3px",
                }}
                variant="h6"
              >
                {"Humidity: " + weatherData?.main?.humidity + " %"}
              </Typography>

              <Typography
                sx={{
                  boxShadow: "0 0 1px",
                  bgcolor: "white",
                  padding: "4px",
                  borderRadius: "3px",
                }}
                variant="h6"
              >
                {"Wind: " + weatherData?.wind?.speed + " km/h"}
              </Typography>
            </Box>
          </Container>
        </Layout>
      )}
    </>
  );
}
