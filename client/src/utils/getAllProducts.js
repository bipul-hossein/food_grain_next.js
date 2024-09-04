
export const getAllProducts = async () => {
try {
  const res = await fetch("https://food-grain-server.onrender.com/api/products",{ next: { revalidate: 1000 } });
  return res.json();
} catch (error) {
  console.error(error)
}
};

