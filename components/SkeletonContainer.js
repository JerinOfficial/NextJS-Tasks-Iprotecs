import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { StyledGrid } from "@/pages/dynamicContentLoading/dynamicContent";
import TemplateCardSkeleton from "./TemplateCardSkeleton";
import Layout from "@/layout/Layout";

export default function SkeletonContainer() {
  return (
    <Layout title={"Dynamic Content Loading"}>
      <Stack sx={{ width: "100%", padding: "10px" }}>
        <Skeleton
          variant="text"
          sx={{ marginLeft: "70px", fontSize: "2rem", width: "200px" }}
        />
        <Grid container rowGap="10px" sx={{ padding: "10px" }}>
          <StyledGrid item md={3}>
            <TemplateCardSkeleton />
          </StyledGrid>
          <StyledGrid item md={3}>
            <TemplateCardSkeleton />
          </StyledGrid>
          <StyledGrid item md={3}>
            <TemplateCardSkeleton />
          </StyledGrid>
          <StyledGrid item md={3}>
            <TemplateCardSkeleton />
          </StyledGrid>
          <StyledGrid item md={3}>
            <TemplateCardSkeleton />
          </StyledGrid>
          <StyledGrid item md={3}>
            <TemplateCardSkeleton />
          </StyledGrid>
          <StyledGrid item md={3}>
            <TemplateCardSkeleton />
          </StyledGrid>
          <StyledGrid item md={3}>
            <TemplateCardSkeleton />
          </StyledGrid>
        </Grid>
      </Stack>
    </Layout>
  );
}
