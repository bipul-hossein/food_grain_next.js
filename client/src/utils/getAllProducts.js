export const getAllProducts = async () => {
  // const res = await fetch("https://food-grain-server.onrender.com/products", {
  const res = await fetch("http://localhost:5000/api/products", {
    cache: "no-store",
  });
  return res.json();
};
