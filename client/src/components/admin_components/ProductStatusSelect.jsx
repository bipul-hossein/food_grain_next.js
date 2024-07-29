import React, { useState } from 'react';

const ProductStatusSelect = () => {
 
  const handleStatusChange = (event) => {
   const form= event.target.value
    console.log(form);
  };

  const products=[
    {title:"Apple",status:"instock",price:5, weight:0.5, description:"This is an apple"},
    {title:"Banana",status:"upcoming",price:3, weight:0.2, description:"This is a banana"},
    {title:"Orange",status:"stockout",price:6, weight:0.7, description:"This is an orange"},
    // Add more products as needed
  ]
  const productStatus =[
      {title:"Stockout",value:"stockout"},
    {title:"In Stock",value:"instock"},
    {title:"Upcoming",value:"upcoming"},
   // Add more status options as needed
  ]
/////////


const orders=[
  {_id:"1",status:"cancel_order"},
  {_id:"2",status:"waiting_request"},
  {_id:"3",status:"parcel_cancel"},
  // Add more products as needed
]

  const orderStatus=[
    {title:"Not Verified", value:"not_verified"},
    {title:"Verified", value:"verified"},
    {title:"Pending Parcel", value:"pending_parcel"},
    {title:"Cancel Order", value:"cancel_order"},
    {title:"Waiting Request", value:"waiting_request"},
    {title:"Successfully Delivery", value:"success_delivery"},
    {title:"Parcel Cancel", value:"parcel_cancel"},
  ]



  return (
    <div className='mt-20'>
      <label htmlFor="productStatus">Product Status:</label>
      {
        products.map((product,i)=>
        <div key={i} className='flex gap-4'>
          <p>{product.title}</p>
          <select className='rounded border'
              id="productStatus"
              defaultValue={product.status}
              onChange={handleStatusChange}
            >
                {productStatus.map((status,i) =>
                <option key={i} value={status.value}>{status.title}</option>
                )}
          </select>
        </div>
      )}

      <br />
      <label htmlFor="productStatus">Order Status:</label>
      {
        orders.map((order,i)=>
        <div key={i} className='flex gap-4'>
          <p>{order._id}</p>
          <select className='rounded border'
              id="productStatus"
              defaultValue={order.status}
              onChange={handleStatusChange}
            >
                {orderStatus.map((status,i) =>
                <option key={i} value={status.value}>{status.title}</option>
                )}
          </select>
        </div>
      )}
    </div>
  );
};

export default ProductStatusSelect;
