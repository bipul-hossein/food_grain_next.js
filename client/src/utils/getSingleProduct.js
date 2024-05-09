export const getSingleProduct = async (id) => {
  const res = await fetch(
    // `https://food-grain-server.onrender.com/product/${id}`,
    `http://localhost:5000/api/product/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
