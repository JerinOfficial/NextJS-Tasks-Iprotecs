import React from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Layout from "@/layout/Layout";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function WeatherSkeleton() {
  return (
    <Layout title={"Simple  Weather  Application"}>
      <Skeleton variant="text" sx={{ fontSize: "50px", width: "50%" }} />
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
          <Skeleton
            variant="rectangular"
            sx={{
              height: "100%",
              borderRadius: "10px",
              boxShadow: "0 0 1px",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              width: "80px",
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              height: "100%",
              borderRadius: "10px",
              boxShadow: "0 0 1px",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              width: "80px",
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              height: "100%",
              borderRadius: "10px",
              boxShadow: "0 0 1px",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              width: "80px",
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              height: "100%",
              borderRadius: "10px",
              boxShadow: "0 0 1px",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              width: "80px",
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              height: "100%",
              borderRadius: "10px",
              boxShadow: "0 0 1px",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
              width: "80px",
            }}
          />
        </Box>
        <Stack
          sx={{
            height: "70%",
            width: "100%",
            borderRadius: "10px",
            boxShadow: "0 0 1px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Skeleton
            variant="rectangular"
            sx={{ borderRadius: "10px", height: "100%", width: "100%" }}
          />
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
          <Skeleton variant="text" sx={{ fontSize: "50px", width: "200px" }} />
          <Skeleton variant="text" sx={{ fontSize: "50px", width: "200px" }} />
        </Box>
      </Container>
    </Layout>
  );
}
