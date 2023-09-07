import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export default function TemplateCard({ item }) {
  const StyledBox = styled(Box)({
    width: "100%",
    height: "70%",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  return (
    <Stack
      sx={{
        width: "250px",
        bgcolor: "white",
        padding: "5px",
        maxHeight: "300px",
        borderRadius: "10px",
        boxShadow: "0 0 1px",
        justifyContent: "space-between",
      }}
    >
      <StyledBox>
        <Image
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
          src={require(`../assets/${item.image}`)}
          alt=""
        />
      </StyledBox>
      <Typography
        sx={{ fontSize: "small", fontWeight: "bold" }}
      >
        {item.title}
      </Typography>
      <Typography
        sx={{ fontSize: "small", color: "green", fontWeight: "bold" }}
      >
        {"₹ " + item.price}
      </Typography>
    </Stack>
  );
}
