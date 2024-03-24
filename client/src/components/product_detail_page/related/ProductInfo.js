// components/ProductInfo.js
const ProductInfo = ({ product }) => {
  return (
    <div className="w-[60%]">
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.sfdijflksaflksa
        jlksajf Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
        ad dicta sit vel ratione blanditiis architecto, dolorum, pariatur
        ducimus, voluptate exercitationem? Minima reiciendis sit id, in
        reprehenderit rerum culpa doloribus quisquam distinctio dolorem odio a
        beatae tempore ipsum mollitia assumenda expedita. Illum sapiente facilis
        obcaecati tenetur praesentium accusamus culpa perferendis!
      </p>
      <div className="flex items-center mb-4">
        <span className="text-gray-600 mr-2">Price:</span>
        <span className="text-green-600 font-semibold">{product.price}</span>
      </div>
      <div className="flex items-center mb-4">
        <span className="text-gray-600 mr-2">Availability:</span>
        <span className="text-green-600 font-semibold">In Stock</span>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;
