import ProductDetailPage from "@/components/product_detail_page/ProductDetailPage";
import { getSingleProduct } from "@/utils/getSingleProduct";

const DynamicProductsPage = async ({ params }) => {
  const { payload } = await getSingleProduct(params.slug);
  // console.log(payload);
  return <ProductDetailPage product={payload} />;
};
export default DynamicProductsPage;
