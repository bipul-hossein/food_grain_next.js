"use client";
import OrderDetails from "@/components/admin_components/OrederDetails";
import ProductStatusSelect from "@/components/admin_components/ProductStatusSelect";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

const SettingsPage = () => {
  const { user } = useSelector((state) => state?.user);
  // console.log(user, "admin");

  if (user?.username == null) {
     return redirect("/login");
  }

  return (
    <div>
      <h2 className="text-xl font-medium">Settings page</h2>
      <div>
        <ProductStatusSelect/>
        {/* <OrderDetails></OrderDetails> */}
      </div>
    </div>
  );
};

export default SettingsPage;
