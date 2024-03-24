import ProductDetailPage from "@/components/product_detail_page/ProductDetailPage";
import { getSingleProduct } from "@/utils/getSingleProduct";

const DynamicProductsPage = async ({ params }) => {
  const { payload } = await getSingleProduct(params.productId);
  return <ProductDetailPage product={payload} />;
};
export default DynamicProductsPage;
