import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import React from 'react'

export default function ForcastCart({weatherData}) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d=new Date(weatherData?.dt_txt)
    const day=daysOfWeek[d.getDay()]
  return (
    <Stack
    sx={{
      height: "100%",
      borderRadius: "10px",
      boxShadow: "0 0 1px",
      justifyContent: "center",
      alignItems: "center",
      padding:"10px",
      minWidth:"80px"
    }}
  >
    <Typography variant="h3" sx={{color: day ==="Sunday"?'red':"blue",fontWeight: "bold",fontSize:"small" }}>
      {day}
    </Typography>
    <div style={{ textAlign: "center",  width: "100%" }}>
      {weatherData?.weather ? (
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
    <Typography variant="h8" sx={{ fontWeight: "bold" ,fontSize:"small"}}>
      {weatherData?.main?.temp}
      <span>&deg;</span>C
    </Typography>
  </Stack>
  )
}
