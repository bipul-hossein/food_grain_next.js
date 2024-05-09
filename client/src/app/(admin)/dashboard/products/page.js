import ProductsListTable from "@/components/admin_components/ProductsListTable";
import { getAllProducts } from "@/utils/getAllProducts";
import Link from "next/link";

const ProductsPage = async () => {
  const { payload: products } = await getAllProducts();
  //console.log(products);
  return (
    <div>
      <div className="my-3">
        <Link className="btn" href={"/dashboard/products/new"}>
          Add new product
        </Link>
      </div>
      <ProductsListTable products={products} />
    </div>
  );
};

export default ProductsPage;
