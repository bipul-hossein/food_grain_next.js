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









[
  {
    "_id": "66a428426c6fe023107eb86b",
    "userPhone": "01303378890",
    "orders": [
      {
        "_id": "66b4d3b90b63ac683e6ef99b",
        "status": "not_verified",
        "products": [
          {
            "_id": "66a34aa85f4425655d95309f",
            "title": "Kejurer Patali (খেজুরের পাটালি)",
            "image": "https://i.ibb.co/s53rvnc/patali.png",
            "weight": "1 KG",
            "price": 500,
            "slug": "kejurer-patali",
            "quantity": 2
          },
          {
            "_id": "66a34aa85f4425655d9530a0",
            "title": "Mabroom Dates (মাবরুম খেজুর)",
            "image": "https://i.ibb.co/qRjN3BP/dates.png",
            "weight": "1 KG",
            "price": 1050,
            "slug": "mabroom-dates",
            "quantity": 1
          }
        ],
        "subtotal": 2050,
        "shipping": 100,
        "total": 2150,
        "createdAt": "Sunday 4 August 2024 at 11:48 am",
        "orderId": "66aefa2a086806b18d2251e8"
      },
      {
        "_id": "66b4d3b90b63ac683e6ef99c",
        "status": "not_verified",
        "products": [
          {
            "_id": "66a34aa85f4425655d9530a0",
            "title": "Mabroom Dates (মাবরুম খেজুর)",
            "image": "https://i.ibb.co/qRjN3BP/dates.png",
            "weight": "1 KG",
            "price": 1050,
            "slug": "mabroom-dates",
            "quantity": 3
          }
        ],
        "subtotal": 3150,
        "shipping": 100,
        "total": 3250,
        "createdAt": "Sunday 4 August 2024 at 11:52 am",
        "orderId": "66aefb12086806b18d2251ef"
      },
      {
        "_id": "66b4d3b90b63ac683e6ef99d",
        "status": "not_verified",
        "products": [
          {
            "_id": "66a34aa85f4425655d9530a0",
            "title": "Mabroom Dates (মাবরুম খেজুর)",
            "image": "https://i.ibb.co/qRjN3BP/dates.png",
            "weight": "1 KG",
            "price": 1050,
            "slug": "mabroom-dates",
            "quantity": 3
          }
        ],
        "subtotal": 3150,
        "shipping": 100,
        "total": 3250,
        "createdAt": "Sunday 4 August 2024 at 12:36 pm",
        "orderId": "66af0562086806b18d2251f8"
      },
     
    ],
    "__v": 0
  },
  {
    "_id": "66af2eb92aaccbcf0176df9e",
    "userPhone": "013033788908",
    "userInfo": {
      "fullName": "bipul",
      "address": "helanchi,khadapara",
      "thana": "manirampur, jashore"
    },
    "orders": [
      {
        "_id": "66b4d3b90b63ac683e6ef99f",
        "status": "not_verified",
        "products": [
          {
            "_id": "66a34aa85f4425655d9530a0",
            "title": "Mabroom Dates (মাবরুম খেজুর)",
            "image": "https://i.ibb.co/qRjN3BP/dates.png",
            "weight": "1 KG",
            "price": 1050,
            "slug": "mabroom-dates",
            "quantity": 3
          }
        ],
        "subtotal": 3150,
        "shipping": 100,
        "total": 3250,
        "createdAt": "Sunday 4 August 2024 at 03:33 pm",
        "orderId": "66af2eb92aaccbcf0176df9f"
      }
    ],
    "__v": 0
  }
]
