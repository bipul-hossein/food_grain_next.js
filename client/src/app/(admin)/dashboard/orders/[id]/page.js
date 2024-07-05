"use client";
import Link from "next/link";
import { useQuery } from "react-query";

const DynamicOrderPage = ({ params }) => {
  const { data: orderInfo = [], refetch } = useQuery({
    queryKey: ["orderData"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_serverUrl}/orderbyid/${params?.id}`,
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      return data.payload;
    },
  });
  console.log(orderInfo);
  const orders = orderInfo?.orders;

  return (
    <div>
      <div className="pt-4">
        <h2 className="text-xl font-medium">Order Details</h2>
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-4 border-r-2 border-red-500 pb-2 text-center bg-blue-50">
            <h2 className="row-span-1 bg-red-500 pt-2 text-xl">
              Customer Info
            </h2>
            <div className="row-span-3 text-left">
              <p className="font-semibold">
                Name:
                <span className="font-normal">
                  {" "}
                  {orderInfo?.userInfo?.fullName}
                </span>
              </p>
              <p className="font-semibold">
                Phone Number:
                <span className="font-normal"> {orderInfo?.userPhone}</span>
              </p>
              <p className="font-semibold">
                Thana:
                <span className="font-normal">
                  {" "}
                  {orderInfo?.userInfo?.thana};
                </span>
              </p>
              <p className="font-semibold">
                Address:
                <span className="font-normal">
                  {" "}
                  {orderInfo?.userInfo?.address}
                </span>
              </p>
            </div>
          </div>
          <div className="grid grid-rows-4 pb-2 text-center bg-blue-50">
            <h2 className="row-span-1 bg-red-500 pt-2 text-xl">
              Delivery Info
            </h2>
            <div className="row-span-3">
              <p className="text-center mt-4">Same</p>
            </div>
          </div>
        </div>
        <div>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-blue-200 mb-4">
                <th className="py-1 pl-1 text-start">
                  ORDER NO. <br /> Order Time & Date
                </th>
                <th className="py-1">PRODUCT NAME</th>
              </tr>
            </thead>
            <tbody className="">
              {orders?.map((order, i) => (
                <tr key={i} className="border-b-2">
                  <td className="px-2 py-2">
                    <p> {order?._id}</p>
                    <p>{order?.createdAt}</p>
                  </td>

                  <td className="px-2 py-2">
                    <div>
                      {order?.products?.map((p, i) => (
                        <p key={i}>{p?.title}</p>
                      ))}
                      <div className="flex justify-between">
                        <p className="mt-1">Total: {order?.total}</p>
                      </div>
                    </div>
                  </td>
                  <hr className="border-gray-300" />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DynamicOrderPage;
