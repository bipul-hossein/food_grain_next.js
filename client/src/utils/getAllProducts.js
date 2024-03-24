export const getAllProducts = async () => {
  const res = await fetch("http://localhost:5100/products", {
    cache: "no-store",
  });
  return res.json();
};
