"use client"
import SummaryApi from "@/common";
import { useQuery } from "react-query";

const DynamicOrderPage = () => {
  const { data: orderInfo = [], refetch } = useQuery({
    queryKey: ["orderData"],
    queryFn: async () => {
      const res = await fetch(
        SummaryApi.userOrdersById.url,
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      return data.payload;
    },
  });
  const orders = orderInfo?.orders;
  console.log(orderInfo);



//   const orders = [
//     { name: 'Bipul Hossain', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending', quantity: '1' },
//     { name: 'jubayer ahmed', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending', quantity: '1' },
//     { name: 'Bipul Hossain', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending', quantity: '1' },
// ]




  return (
    <div className='bg-[#F5F7FA]'>
    <div className='max-w-[1200px] w-11/12 mx-auto mb-8'>
        <div className='mb-6'>
            <h2 className='text-xl md:text-2xl py-6 font-bold'>Order #80294</h2>
            <div className='flex gap-2 py-2 border-y-[1px] border-[#2125291a] text-sm'>
                <p className='border-r-[1px] pr-2'>October 7, 2020 at 9:08 pm</p>
                <p className='border-r-[1px] pr-2'>6 items</p>
                <p className='border-r-[1px] pr-2'>Total $5,882.00</p>
                <p className='border-r-[1px] pr-2 text-green-500'>paid</p>
            </div>
        </div>
        <div className='flex flex-col gap-3 md:flex-row'>

            <div className='md:w-2/3'>
                {/* Items */}
                <div className='py-6 mb-5 w-full bg-white shadow shadow-[#00000026]'>
                    <p className='pt-1 pl-4'>Note about Order</p>
                </div>
                <div className='bg-white mt-6 shadow shadow-[#00000026] '>
                    <div>
                        <table className="table-auto w-full">
                            <thead className='text-left'>
                                <tr className=''>
                                    <th className="text-lg font-bold md:font-medium py-2 pl-3 md:pl-5 md:py-3">Items</th>
                                    <th className="text-sm font-semibold md:font-medium py-2 md:p-2"></th>
                                    <th className="text-sm font-semibold md:font-medium py-2 md:p-2"></th>
                                    <th className="text-end pr-6 text-sm font-semibold md:font-medium py-2 md:p-2 text-[#0b5be5]">Edit items</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders?.map((order, i) =>
                                        <tr key={i} className='my-2 text-base'>
                                            <td className="pl-5 py-1 md:py-3 border-t-[1px] border-[#2125291a]">{order.product}</td>
                                            <td className="text-center px-3 py-1 md:py-3 border-t-[1px] border-[#2125291a]">{order.price}</td>
                                            <td className="text-center px-3 py-1 md:py-3 border-t-[1px] border-[#2125291a]">+ {order.quantity} +</td>
                                            <td className="text-end pl-3 pr-6 px-3 py-1 md:py-3 border-t-[1px] border-[#2125291a]">$123</td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                        <table className='table-auto w-full'>
                            <tbody className='text-'>
                                <tr className=' my-2 text-base'>
                                    <td className="pl-5 py-1 md:pt-3 md:pb-1 border-t-[1px] border-[#2125291a]">Subtotal</td>

                                    <td className="text-end pl-2 pr-6 py-1 md:pt-3 md:pb-1 border-t-[1px] border-[#2125291a]">$677</td>
                                </tr>
                                <tr className=' my-2 text-base'>
                                    <td className="pl-5 py-1 md:py-1 ">Store Credit</td>
                                    <td className="text-end pl-2 pr-6 py-1 md:py-1 ">$677</td>
                                </tr>
                                <tr className=' my-2 text-base'>
                                    <td className="pl-5 py-1 md:pb-3 md:pt-1 ">
                                        <p>Shipping </p>
                                        <p className='text-xs'>via FedEx International </p>
                                    </td>
                                    <td className="text-end pl-2 pr-6 py-1 md:pb-3 md:pt-1 ">$677</td>
                                </tr>
                                <tr className=' my-2 border text-base'>
                                    <td className="pl-5 py-1 md:py-1 border-t-[1px] border-[#2125291a]">Total</td>
                                    <td className="text-end pl-2 pr-6 py-1 md:py-3 border-t-[1px] border-[#2125291a]">$677</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='bg-white mt-6 shadow shadow-[#00000026]'>
                    {/* Transactions */}
                    <table className="table-auto rounded-t-md w-full">
                        <thead className='text-left'>
                            <tr className=''>

                                <th className="text-lg font-bold md:font-medium py-2 md:py-4 pl-3 md:pl-5 ">Transactions</th>
                                <th className="text-sm font-semibold md:font-medium py-2 md:p-2"></th>
                                <th className="text-end text-sm font-semibold md:font-medium py-2 md:p-2 text-[#0b5be5]">Edit Transactions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, i) =>
                                    <tr key={i} className=' my-2 border text-base'>

                                        <td className=" pl-5 py-1 md:py-3 border-t-[1px] border-[#2125291a]"><p>payment</p> <p className='text-xs'>via bkash</p></td>
                                        <td className="text-center px-3 py-1 md:py-3 border-t-[1px] border-[#2125291a]">October 7, 2020</td>
                                        <td className="text-end pl-2 pr-6 py-1 md:py-3 border-t-[1px] border-[#2125291a]">$5665</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className='bg-white mt-6 shadow shadow-[#00000026]'>
                    {/* Balance */}
                    <table className="table-auto rounded-t-md w-full">
                        <thead className='text-left'>
                            <tr className=''>

                                <th className="text-lg font-bold md:font-medium py-2 md:py-4 pl-3 md:pl-5">Balance</th>
                                <th className="text-end text-sm font-semibold md:font-medium py-2 md:p-2 text-[#0b5be5]">Edit Balance</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, i) =>
                                    <tr key={i} className=' my-2 border text-base'>

                                        <td className=" pl-5 py-1 md:py-3 border-t-[1px] border-[#2125291a]">
                                            <p>Order Total</p>
                                            <p className=''>Refund Total</p>
                                        </td>
                                        <td className="text-end pl-2 pr-6 py-1 md:py-3 border-t-[1px] border-[#2125291a]">
                                            <p>{order?.total}</p>
                                            <p>$00535</p>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='md:w-1/3'>
                {/* Customer info */}
                <div className='bg-white flex flex-col p-4 px-5 mb-3 shadow shadow-[#00000026]'>
                    <div className='flex justify-between mb-4'>
                        <h3 className='text-base font-bold'>Customer Name</h3>
                        <p className='text-[#0b5be5] text-sm'>Edit</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                       <img className='h-9 w-9 rounded-full' src="https://yt3.ggpht.com/lkpjG1TsZVdPweMitGGfbR7YEiI7eVSkiFJK8S55BI58fLD6YdT9vNGfkapCT9Aia_I_0i2n=s88-c-k-c0x00ffffff-no-rj" alt="" />
                       <div>
                        <p className='text-sm'>Bipul Hossain</p>
                         <p className='text-xs'>01303-378890</p></div> 
                    </div>                        </div>
                <div className='bg-white flex flex-col p-4 px-5 mb-3 shadow shadow-[#00000026]'>
                    <div className='flex justify-between pb-4'>
                        <h3 className='text-base font-bold'>Contact person</h3>
                        <p className='text-[#0b5be5] text-sm'>Edit</p>
                    </div>
                    <div className=''>
                        <p>Bipul Hossain</p>
                        <p>bipul@gmail.com</p>
                        <p>000349u43</p>
                    </div>
                </div>
                <div className='bg-white flex flex-col p-4 px-5 mb-3 shadow shadow-[#00000026]'>
                    <div className='flex justify-between mb-4'>
                        <h3 className='text-base font-bold'>Shipping Address</h3>
                        <p className='text-[#0b5be5] text-sm'>Edit</p>
                    </div>
                    <div>
                        <address>Jessica Moore<br />
                            Random Federation<br />
                            115302, Moscow<br />
                            ul. Varshavskaya, 15-2-178</address>
                    </div>
                </div>
                <div className='bg-white flex flex-col p-4 px-5 mb-3 shadow shadow-[#00000026]'>
                    <div className='flex justify-between mb-4'>
                        <h3 className='text-base font-bold'>Billing Address</h3>
                        <p className='text-[#0b5be5] text-sm'>Edit</p>
                    </div>
                    <div>
                        <address>Jessica Moore<br />
                            Random Federation<br />
                            115302, Moscow<br />
                            ul. Varshavskaya, 15-2-178</address>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default DynamicOrderPage;






// "use client";
// import Link from "next/link";
// import { useQuery } from "react-query";

// const DynamicOrderPage = ({ params }) => {
//   const { data: orderInfo = [], refetch } = useQuery({
//     queryKey: ["orderData"],
//     queryFn: async () => {
//       const res = await fetch(
//          SummaryApi.userOrdersById.url,
//         {
//           cache: "no-store",
//         }
//       );
//       const data = await res.json();
//       return data.payload;
//     },
//   });
//   console.log(orderInfo);
//   const orders = orderInfo?.orders;

//   return (
//     <div>
//       <div className="pt-4">
//         <h2 className="text-xl font-medium">Order Details</h2>
//         <div className="">
//           <div className="pb-2 text-center">
//             <address className="row-span-3 text-left">
          
//               <details>
//                 <summary className="text-neutral-800">Customer Info</summary>
//                 <p>
//                   <span className="font-normal">
//                     <p className="font-semibold inline-block">Name:</p> {orderInfo?.userInfo?.fullName};
//                     <p className="font-semibold inline-block"> Phone:</p> {orderInfo?.userPhone};
//                     <p className="font-semibold inline-block"> Thana:</p> {orderInfo?.userInfo?.thana};
//                     <p className="font-semibold inline-block"> Address:</p> {orderInfo?.userInfo?.address}
//                   </span>
//                 </p>
//               </details>
 
//               <details>
//                 <summary className="text-neutral-800">Delivery Info</summary>
//                 <p>
//                 <span className="font-normal">
//                     <p className="font-semibold inline-block">Name:</p> {orderInfo?.userInfo?.fullName};
//                     <p className="font-semibold inline-block"> Phone:</p> {orderInfo?.userPhone};
//                     <p className="font-semibold inline-block"> Thana:</p> {orderInfo?.userInfo?.thana};
//                     <p className="font-semibold inline-block"> Address:</p> {orderInfo?.userInfo?.address}
//                   </span>
//                 </p>
//               </details>
//             </address>
//           </div>
//         </div>
//         <div>
//           <table className="table-auto w-full">
//             <thead>
//               <tr className="bg-blue-200 mb-4">
//                 <th className="py-1 pl-1 text-start">
//                   ORDER NO. <br /> Order Time & Date
//                 </th>
//                 <th className="py-1">PRODUCT NAME</th>
//               </tr>
//             </thead>
//             <tbody className="">
//               {orders?.map((order, i) => (
//                 <tr key={i} className="border-b-2">
//                   <td className="px-2 py-2">
//                     <p> {order?._id}</p>
//                     <p>{order?.createdAt}</p>
//                   </td>

//                   <td className="px-2 py-2">
//                     <div>
//                       {order?.products?.map((p, i) => (
//                         <p key={i}>{p?.title}</p>
//                       ))}
//                       <div className="flex justify-between">
//                         <p className="mt-1">Total: {order?.total}</p>
//                       </div>
//                     </div>
//                   </td>
//                   <hr className="border-gray-300" />
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DynamicOrderPage;
