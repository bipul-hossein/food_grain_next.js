import { getSingleProduct } from "@/utils/getSingleProduct";

const DynamicProductEditPage = async ({ params }) => {
  console.log(params.slug, "params");
  const { payload: product } = await getSingleProduct(params.slug);
  console.log(product);
  return (
    <div>
      <h2 className="text-xl font semibold">This is Delete Product Page</h2>
      <p className="text-blue-500"> {product?.title}</p>
    </div>
  );
};

export default DynamicProductEditPage;
