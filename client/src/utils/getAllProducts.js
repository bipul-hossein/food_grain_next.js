import SummaryApi from "@/common";

export const getAllProducts = async () => {
try {
  const res = await fetch(SummaryApi.allProduct.url,{cache:"no-store"});
  return res.json();
} catch (error) {
  console.error(error)
}
};
