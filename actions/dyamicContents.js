export const getProducts = async () => {
  try {
    const res = await fetch("/products.json").then((res) => res.json());
    return res;
  } catch (error) {
    console.log(error);
  }
};
