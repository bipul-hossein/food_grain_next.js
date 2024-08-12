"use client";

import SummaryApi from "@/common";
import ProductsListTable from "@/components/admin_components/ProductsListTable";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const { user } = useSelector((state) => state?.user);
  // console.log(user, "admin");

  // if (user?.username == null) {
  //   return redirect("/login");
  // }

  const { data: products = [], refetch } = useQuery({
    queryKey: ["productsData"],
    queryFn: async () => {
      const res = await fetch(SummaryApi.allProduct.url, {
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
