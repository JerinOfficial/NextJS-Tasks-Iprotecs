import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

export default function Layout({ children, title }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            bgcolor: "#333",
            height: "100px",
            color: "white",
          }}
        >
            <Typography variant="h4" sx={{ textTransform: "uppercase", fontWeight: "bold" }}> {title}</Typography>

         
        </Box>
        {children}
      </Box>
    </>
  );
}
