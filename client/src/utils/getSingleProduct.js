export const getSingleProduct = async (id) => {
  try {
     const res = await fetch(`https://food-grain-server.onrender.com/api/product/${id}`,
  {
    cache: "no-store",
  }
  );
    return res.json();
} catch (error) {
  console.error(error)
}
};
