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
        <div className="">
          <div className="pb-2 text-center">
            <address className="row-span-3 text-left">
          
              <details>
                <summary className="text-neutral-800">Customer Info</summary>
                <p>
                  <span className="font-normal">
                    <p className="font-semibold inline-block">Name:</p> {orderInfo?.userInfo?.fullName};
                    <p className="font-semibold inline-block"> Phone:</p> {orderInfo?.userPhone};
                    <p className="font-semibold inline-block"> Thana:</p> {orderInfo?.userInfo?.thana};
                    <p className="font-semibold inline-block"> Address:</p> {orderInfo?.userInfo?.address}
                  </span>
                </p>
              </details>
 
              <details>
                <summary className="text-neutral-800">Delivery Info</summary>
                <p>
                <span className="font-normal">
                    <p className="font-semibold inline-block">Name:</p> {orderInfo?.userInfo?.fullName};
                    <p className="font-semibold inline-block"> Phone:</p> {orderInfo?.userPhone};
                    <p className="font-semibold inline-block"> Thana:</p> {orderInfo?.userInfo?.thana};
                    <p className="font-semibold inline-block"> Address:</p> {orderInfo?.userInfo?.address}
                  </span>
                </p>
              </details>
            </address>
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
