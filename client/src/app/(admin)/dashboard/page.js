"use client";

import SummaryApi from "@/common";
import { redirect } from "next/navigation";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const AdminPage = () => {
  const { user } = useSelector((state) => state?.user);
  console.log(user, "admin");

  // if (user?.username == null) {
  //   return redirect("/login");
  // }

  // fetch data
  const { data: orderList = [], refetch } = useQuery({
    queryKey: ["ordersData"],
    queryFn: async () => {
      const res = await fetch(SummaryApi.userOrders.url, {
        cache: "no-store",
      });
      const data = await res.json();
      return data.payload;
    },
  });

  return (
    <div>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <div className="w-full bg-slate-200 p-3 rounded">
          <h2>Not Verified Orders</h2>
          <p>{3}</p>
        </div>
        <div className="w-full bg-slate-200 p-3 rounded">
          <h2>Pending Orders</h2>
          <p>{7}</p>
        </div>
      </div>

      <div className="pt-4">
        <h2 className="text-xl font-medium">Recent Orders</h2>
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
                    {orderInfo?.userPhone}
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
export default AdminPage;
