import { getProducts } from "@/actions/dyamicContents";
import TemplateCard from "@/components/TemplateCard";
import TemplateCardSkeleton from "@/components/TemplateCardSkeleton";
import Layout from "@/layout/Layout";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

import React, { useEffect, useState } from "react";
import SkeletonContainer from "@/components/SkeletonContainer";

export const StyledGrid = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
});

export default function DynamicContent() {
  const [products, setproducts] = useState([]);
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    getProducts().then((data) => {
      setproducts(data);
    });
    setisloading(false);
    window?.addEventListener("scroll", reveal);

    const timer = setTimeout(() => {
      setisloading(false);
    }, 2500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const reveal = () => {
    var reveal = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveal.length; i++) {
      var winHeight = window.innerHeight;
      var revealTop = reveal[i].getBoundingClientRect().top;
      var revealpoint = 10;
      if (revealTop < winHeight - revealpoint) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  };
  console.log("GET_Products", products);
  return (
    <>
      {!isloading ? (
        <Layout title={"Dynamic Content Loading"}>
          <>
            {products.map((product, index) => {
              return (
                <>
                  <Stack
                    className={index === 0 || index === 1 ? "" : "reveal"}
                    key={index}
                    sx={{ width: "100%", padding: "10px" }}
                  >
                    <Typography sx={{ marginLeft: "70px" }} variant="h5">
                      {product.title}
                    </Typography>
                    <Grid container rowGap="10px" sx={{ padding: "10px" }}>
                      {product.products.map((item) => {
                        return (
                          <StyledGrid
                            className={
                              index === 0 || index === 1 ? "" : "reveal"
                            }
                            key={item.id}
                            item
                            md={3}
                          >
                            <TemplateCard item={item} />
                          </StyledGrid>
                        );
                      })}
                    </Grid>
                  </Stack>
                </>
              );
            })}
          </>
        </Layout>
      ) : (
        <SkeletonContainer />
      )}
    </>
  );
}
