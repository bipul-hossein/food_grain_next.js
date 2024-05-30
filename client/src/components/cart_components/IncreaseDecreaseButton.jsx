// const IncreaseDecreaseButton = () => {
//     return (
//        <div className="flex justify-center items-center gap-2 my-10">
//                 <span
//                   className="w-6 h-6 bg-gray-100 flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
//                   aria-label="Decrement value"
//                   onClick={() => dispatch(decreaseQuantity(product))}
//                 >
//                   <FiMinus />
//                 </span>
//                 <p className="">{product?.quantity}</p>
//                 <span
//                   className="w-6 h-6 bg-gray-100 flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
//                   aria-label="Increment value"
//                   onClick={() => dispatch(increaseQuantity(product))}
//                 >
//                   <FiPlus />
//                 </span>
//               </div>
//     );
// };

// export default IncreaseDecreaseButton;

{
  /* <table className="table-auto w-full">
            <thead>
              <tr className="bg-blue-200 mb-4">
                <th className="text-sm md:text-base py-1 text-left">Product</th>
                <th className="text-sm hidden md:block md:text-base py-1">
                  Price
                </th>
                <th className="text-sm md:text-base py-1">Qty</th>
                <th className="text-sm md:text-base py-1 text-right pr-4">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="">
              {products?.map((product) => (
                <tr className="border-b-2" key={product?._id}>
                  <td className="text-base md:text-base pr-2 py-2">
                    <p>{product?.title}</p>
                    <span
                      className="text-sm text-blue-500 underline hover:cursor-pointer"
                      onClick={() => dispatch(deleteItem(product))}
                    >
                      remove
                    </span>
                  </td>
                  <td className="text-xs md:text-base text-center px-2 py-2">
                    <span className="">{product?.price}</span>
                  </td>
                  <td className="text-xs md:text-base px-2 py-2 text-center">
                    <div className="flex justify-center items-center gap-2 my-10">
                      <span
                        className="w-6 h-6 bg-gray-100 flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
                        aria-label="Decrement value"
                        onClick={() => dispatch(decreaseQuantity(product))}
                      >
                        <FiMinus />
                      </span>
                      <p className="">{product?.quantity}</p>
                      <span
                        className="w-6 h-6 bg-gray-100 flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
                        aria-label="Increment value"
                        onClick={() => dispatch(increaseQuantity(product))}
                      >
                        <FiPlus />
                      </span>
                    </div>
                  </td>
                  <td className="text-xs md:text-base px-2 py-2 text-right ">
                    <span className="pr-2">
                      {product?.price * product?.quantity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */
}
