"use client";
import products from "@/db/data";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const OrdersPage = () => {
  const { user } = useSelector((state) => state?.user);
  // console.log(user, "admin");

  if (user?.username == null) {
    return redirect("/login");
  }

  // fetch data
  const { data: orders = [], refetch } = useQuery({
    queryKey: ["ordersData"],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_serverUrl}/orders`, {
        cache: "no-store",
      });
      const data = await res.json();
      return data.payload;
    },
  });
  console.log(orders);

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
              {orders?.map((order, i) => (
                <tr className="border-b-2" key={order?._id}>
                  <td className="px-2 py-2">{i + 1}</td>
                  <td className="px-2 py-2">
                    {order?.orders?.map((or, i) => (
                      <div key={i}>
                        {or?.products?.map((p, i) => (
                          <p key={i}>{p?.title}</p>
                        ))}
                        <div className="flex justify-between">
                          <p className="mt-1">Total: {or?.total}</p>

                          <p className="mt-1">{or?.createdAt}</p>
                        </div>
                        <hr className="border-gray-300" />
                      </div>
                    ))}
                  </td>
                  <td className="px-2 py-2 text-center">
                    {order?.userInfo?.fullName}
                    <br />
                    <Link
                      className="text-blue-400 hover:cursor-pointer"
                      href={`/dashboard/orders/${order?._id}`}
                    >
                      Order Details
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
