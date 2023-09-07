import Loader from "@/components/Loader";
import SkeletonContainer from "@/components/SkeletonContainer";
import Layout from "@/layout/Layout";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [isloading, setisloading] = useState(true);
  const router = useRouter();

  const tasks = [
    {
      id: "0",
      name: "Crud Operation",
      to: "/crudOperation/crudOperation",
    },
    {
      id: "1",
      name: "Authentication",
      to: "/authentication/auth",
    },
    {
      id: "2",
      name: "Simple Weather Application",
      to: "/weatherReport/weatherReport",
    },
    {
      id: "3",
      name: "Dynamic Content Loading",
      to: "/dynamicContentLoading/dynamicContent",
    },
    {
      id: "4",
      name: "Materialize UI",
      to: "/materialize/homePage",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setisloading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isloading ? (
        <Loader />
      ) : (
        <Layout title={"HOME PAGE"}>
          <Typography variant="h3" color="initial">
            My Tasks
          </Typography>
          {tasks.map((task, index) => {
            return (
              <>
                <Button
                  sx={{ minWidth: "350px" }}
                  key={task.id}
                  variant="outlined"
                  onClick={() => {
                    router.push(task.to);
                    setisloading(true);
                  }}
                >
                  {`TASK ${index + 1} : ` + task.name}
                </Button>
              </>
            );
          })}
        </Layout>
      )}
    </>
  );
}
