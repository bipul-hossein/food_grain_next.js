import SummaryApi from "@/common";

export const getAllProducts = async () => {
  const res = await fetch(SummaryApi.allProduct.url, {
    cache: "no-store",
  });
  return res.json();
};
