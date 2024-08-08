
const OrderDetails = () => {
    const orders = [
        { name: 'Bipul Hossain', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending', quantity: '1' },
        { name: 'jubayer ahmed', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending', quantity: '1' },
        { name: 'Bipul Hossain', phone: '+8801303-378890', product: 'milk', price: '100', states: 'pending', quantity: '1' },
    ]

    return (
<>
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
                                            orders.map((order, i) =>
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
                                        orders.map((order, i) =>
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
                                        orders.map((order, i) =>
                                            <tr key={i} className=' my-2 border text-base'>

                                                <td className=" pl-5 py-1 md:py-3 border-t-[1px] border-[#2125291a]">
                                                    <p>Order Total</p>
                                                    <p className=''>Refund Total</p>
                                                </td>
                                                <td className="text-end pl-2 pr-6 py-1 md:py-3 border-t-[1px] border-[#2125291a]">
                                                    <p>$00535</p>
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
{/* test */}

        {/* <div className='md:w-11/12 md:mx-auto mt-10 md:px-2 md:mt-12'>
            <h2 className='text-base md:text-xl mb-5 pl-4 md:pl-0'>Recent Orders</h2>
            <table className="table-auto rounded-t-md w-full">
                <thead className='text-left'>
                    <tr className='text-center bg-blue-100'>
                        <th className="text-sm font-semibold md:font-medium py-2 md:p-2">User</th>
                        <th className="text-sm font-semibold md:font-medium py-2 md:p-2">Product</th>
                        <th className="text-sm font-semibold md:font-medium py-2 md:p-2">Price&Q.</th>  
                        <th className="text-sm font-semibold md:font-medium py-2 md:p-2">States</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, i) =>
                            <tr key={i} className=' text-center my-2 border '>
                                <td className="pl-1 rounded-l-xl py-1 bg-red-100 md:py-2 border-t-[10px] border-white">
                                    <div>
                                        <p>{order.name}</p>
                                        <p>{order.phone}</p>
                                    </div>
                                </td>
                                <td className=" bg-red-100 py-1 md:py-2 border-t-[10px] border-white">{order.product}</td>
                                <td className=" px-3 bg-red-100 py-1 md:py-2 border-t-[10px] border-white">{order.price} X 1</td>
                             
                                <td className="pr-2 rounded-r-xl md:px-3 bg-red-100 py-1 md:py-2 md:pr-4 border-t-[10px] border-white">{order.states}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div> */}
</>

    );
};

export default OrderDetails;