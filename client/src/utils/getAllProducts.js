export const getAllProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  return res.json();
};
