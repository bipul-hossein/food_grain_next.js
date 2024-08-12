export const getSingleProduct = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_serverUrl}/product/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
