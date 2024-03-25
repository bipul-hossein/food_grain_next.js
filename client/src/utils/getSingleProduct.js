export const getSingleProduct = async (id) => {
  const res = await fetch(
    `https://food-grain-server.onrender.com/product/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
//  {
//     cache: "no-store",
//   }
