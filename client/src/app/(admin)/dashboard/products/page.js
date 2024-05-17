"use client";

import ProductsListTable from "@/components/admin_components/ProductsListTable";
import Link from "next/link";
import { useQuery } from "react-query";

const ProductsPage = () => {
  // fetch data
  const { data: products = [], refetch } = useQuery({
    queryKey: ["productsData"],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_serverUrl}/products`, {
        cache: "no-store",
      });
      const data = await res.json();
      return data.payload;
    },
  });

  return (
    <div>
      <div className="my-3">
        <Link className="btn" href={"/dashboard/products/new"}>
          Add new product
        </Link>
      </div>
      <ProductsListTable products={products} refetch={refetch} />
    </div>
  );
};

export default ProductsPage;
