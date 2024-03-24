// components/ProductDetails.js
const ProductDetails = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Product Details</h2>
      <ul>
        <li className="mb-2">
          <span className="font-semibold">Color:</span> Red
        </li>
        <li className="mb-2">
          <span className="font-semibold">Material:</span> Cotton
        </li>
        <li className="mb-2">
          <span className="font-semibold">Size:</span> Medium
        </li>
        <li className="mb-2">
          <span className="font-semibold">Weight:</span> 250g
        </li>
        <li className="mb-2">
          <span className="font-semibold">Dimensions:</span> 10 x 5 x 5 inches
        </li>
      </ul>
    </div>
  );
};

export default ProductDetails;
