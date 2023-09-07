import React, { useEffect, useState } from "react";
import { loginUser } from "@/actions/user";
import Loader from "@/components/Loader";
import Login from "./login";
import AdminPage from "./adminPage";
import HomePage from "./homePage";
import OperatorPage from "./operatorPage";

export default function auth() {
  const [isloading, setisloading] = useState(true);
  const [pageRoute, setpageRoute] = useState("login");
  const [datas, setdatas] = useState();

  loginUser().then((data) => {
    if (data?.userType === "admin") {
      setpageRoute("admin");
      setdatas(data);
    } else if (data?.userType === "user") {
      setpageRoute("user");
      setdatas(data);
    } else if (data?.userType === "operator") {
      setpageRoute("operator");
      setdatas(data);
    }
  });

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
        <>
          {pageRoute === "login" && <Login datas={datas} />}
          {pageRoute === "admin" && <AdminPage datas={datas} />}
          {pageRoute === "user" && <HomePage datas={datas} />}
          {pageRoute === "operator" && <OperatorPage datas={datas} />}
        </>
      )}
    </>
  );
}
