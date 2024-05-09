"use client";
import Link from "next/link";

const ProductsListTable = ({ products }) => {
  const handleDelete = (product) => {
    const agree = window.confirm("Are you went delete - " + product?.title);
    if (agree) {
      alert("delete");
    } else {
      alert("error");
    }
  };

  return (
    <table className="table-auto w-full">
      <thead>
        <tr className="bg-blue-200 mb-4">
          <th className="py-1">PRODUCT NAME</th>
          <th className="py-1">PRICE</th>
          <th className="py-1">ACTIONS</th>
        </tr>
      </thead>
      <tbody className="">
        {products?.map((product) => (
          <tr className="border-b-2" key={product?._id}>
            <td className="px-2 py-2">{product?.title}</td>
            <td className="px-2 py-2 text-center">{product?.price}</td>
            <td className="px-2 py-2 text-center">
              <Link
                className="btn_sm mr-2"
                href={`/dashboard/products/edit/${product?.slug}`}
              >
                Edit
              </Link>
              <Link
                onClick={() => handleDelete(product)}
                className="btn_sm"
                href={""}
              >
                Delete
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsListTable;
