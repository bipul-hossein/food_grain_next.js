// components/ProductInfo.js
const ProductInfo = ({ product }) => {
  return (
    <div className="md:w-[60%]">
      <h1 className="text-3xl font-bold mb-3 ">{product?.title}</h1>
      <p className="text-sm text-justify  text-gray-700 mb-4">
        {product?.description}
      </p>
      <div className="flex items-center mb-4">
        <span className="text-xl text-gray-600 mr-2">Price:</span>
        <span className="text-xl text-green-600 font-semibold">
          {product?.price}
        </span>
      </div>
      <div className="flex items-center mb-4">
        <span className="text-gray-600 mr-2">Availability:</span>
        <span className="text-green-600 font-semibold">In Stock</span>
      </div>
      <button className="uppercase md:text-xl bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;
