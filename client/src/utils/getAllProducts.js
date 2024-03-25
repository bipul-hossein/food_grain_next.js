export const getAllProducts = async () => {
  const res = await fetch("https://food-grain-server.onrender.com/products", {
    cache: "no-store",
  });
  return res.json();
};
