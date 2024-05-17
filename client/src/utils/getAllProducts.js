export const getAllProducts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_serverUrl}/products`, {
    // const res = await fetch("http://localhost:5000/api/products", {
    cache: "no-store",
  });
  return res.json();
};
