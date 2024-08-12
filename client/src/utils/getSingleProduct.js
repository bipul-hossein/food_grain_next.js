export const getSingleProduct = async (id) => {
  console.log(id,process.env.NEXT_PUBLIC_serverUrl)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_serverUrl}/product/${id}`,
    // `http://localhost:5000/api/product/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
