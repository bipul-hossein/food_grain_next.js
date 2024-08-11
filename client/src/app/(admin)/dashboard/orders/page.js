"use client";
import products from "@/db/data";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const OrdersPage = () => {
  const { user } = useSelector((state) => state?.user);
  // console.log(user, "admin");

  // if (user?.username == null) {
  //   return redirect("/login");
  // }

  // fetch data
  const { data: orderList = [], refetch } = useQuery({
    queryKey: ["ordersData"],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_serverUrl}/orders`, {
        cache: "no-store",
      });
      const data = await res.json();
      return data.payload;
    },
  });
  console.log(orderList);

  return (
    <div>
      <div className="pt-4">
        <h2 className="text-xl font-medium">Orders List</h2>
        <div>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-blue-200 mb-4">
                <th className="py-1 pl-1 text-start">SL NO.</th>
                <th className="py-1">PRODUCT NAME</th>
                <th className="py-1">CUSTOMER NAME</th>
              </tr>
            </thead>
            <tbody className="">
            {orderList?.map((orderInfo, i) => (
                <tr className="border-b-2" key={orderInfo?._id}>
                  <td className="px-2 py-2 text-center">{i + 1}</td>
                  <td className="px-2 py-2 flex flex-col gap-2">
                    {orderInfo?.orders?.map((order, i) => (
                      <div key={i} >
                        {/* data */}
                       <p className="pl-2 mt-1 font-mono bg-slate-200 cursor-vertical-text text-pretty">{order?.createdAt}</p>
                         {/* product info */}
                       <div className="border-r-4">
                        {order?.products?.map((product, i) => (
                          <p key={i}>{product?.title}</p>
                        ))}
                        {/*  product total */}
                        <div className="flex justify-between">
                          <p className="mt-1 font-semibold">Total: {order?.total}</p>
                        </div>
                       </div>
                        <hr className="border-red-200 mt-2" />
                      </div>
                    ))}
                  </td>
                  <td className="px-2 py-2 text-center">
                    {orderInfo?.userInfo?.fullName}
                    <br />
                    <Link
                      className="text-blue-400 hover:cursor-pointer"
                      href={`/dashboard/orders/${orderInfo?._id}`}
                    >
                       Customer details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
