"use client";
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
    </div>
  );
};

export default SettingsPage;
