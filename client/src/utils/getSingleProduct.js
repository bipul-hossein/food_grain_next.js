export const getSingleProduct = async (id) => {
  const res = await fetch(`http://localhost:5000/product/${id}`, {
    cache: "no-store",
  });
  return res.json();
};
//  {
//     cache: "no-store",
//   }
