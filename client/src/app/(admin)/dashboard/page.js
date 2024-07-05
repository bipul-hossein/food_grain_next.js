"use client";

import { redirect } from "next/navigation";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

const AdminPage = () => {
  const { user } = useSelector((state) => state?.user);
  console.log(user, "admin");

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
