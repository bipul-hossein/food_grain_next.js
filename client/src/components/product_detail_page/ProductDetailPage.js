// components/ProductDetailPage.js
import PageNav from "../navbar/PageNav";
import ProductAdditionalInfo from "./related/ProductAdditionalInfo";
import ProductImage from "./related/ProductImage";
import ProductInfo from "./related/ProductInfo";

const BREADCRUMBS = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Products", href: "/products" },
];

const ProductDetailPage = ({ product }) => {
  console.log(product, "ldsjfkls");
  return (
    <div className="mx-auto py-4">
      <PageNav BREADCRUMBS={BREADCRUMBS} />
      <div className="flex flex-col justify-between md:flex-row  gap-4">
        <ProductImage product={product} />
        <ProductInfo product={product} />
      </div>
      <ProductAdditionalInfo />
    </div>
  );
};

export default ProductDetailPage;
