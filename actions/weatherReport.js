const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const forcast = "https://api.openweathermap.org/data/2.5/forecast?";
const apiKey = "bcef7e941619bb1627883d604a50f728";

export const getAllDatas = async (city) => {
  try {
    const response = await fetch(
      apiUrl + `q=${city}` + `&appid=${apiKey}` + "&units=metric"
    );
    const data = await response.json();
    // console.log(data, "Weather");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const daysForcast = async (city) => {
  console.log("name", city);

  try {
    const forcastRes = await fetch(
      forcast + `q=${city}` + `&appid=${apiKey}` + "&units=metric"
    );
    const data = await forcastRes.json();
    // console.log(data, "forcastRes");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getLocation = async (location) => {
  const lat = location?.latitude;
  const long = location?.longitude;
  const response = await fetch(
    apiUrl + `lat=${lat}&lon=${long}` + `&appid=${apiKey}` + "&units=metric"
  );
  const data = await response.json();
  //   console.log(data, "CURRENT");
  const res = data?.name;
  return res;
};
