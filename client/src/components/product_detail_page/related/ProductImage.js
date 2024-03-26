import Image from "next/image";

// components/ProductImage.js
const ProductImage = ({ product }) => {
  return (
    <div className="md:w-[40%]">
      <Image
        src={product?.image}
        alt="Product Image"
        width={500}
        height={500}
        className="rounded-lg"
      />
    </div>
  );
};

export default ProductImage;
