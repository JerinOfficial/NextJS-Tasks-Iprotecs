import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function TemplateCardSkeleton() {
  return (
    <Stack
      sx={{
        width: "250px",
        bgcolor: "white",
        padding: "5px",
        height: "300px",
        borderRadius: "10px",
        boxShadow: "0 0 1px",
        justifyContent: "space-between",
      }}
    >
      <Skeleton
        variant="rectangular"
        sx={{ borderRadius: "10px", height: "70%" }}
      />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </Stack>
  );
}
