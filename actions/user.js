export const createAccont = async (data) => {
  try {
    const DATA = JSON.stringify(data);
    window.localStorage.setItem("User", DATA);
    console.log("REGISTERD", data);
    alert("User Registered Successfully");
    window.location.href = "/authentication/login";
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async () => {
  try {
    const DATA = await JSON.parse(window.localStorage.getItem("User"));
    console.log("GET", DATA);
    return DATA;
  } catch (error) {
    console.log(error);
  }
};
