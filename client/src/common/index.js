const backendDomain = process.env.NEXT_PUBLIC_server

const SummaryApi = {
    allProduct : {
        url : `${backendDomain}/api/products`,
        method : 'get'
    },
    userOrders: {
        url : `${backendDomain}/api/orders`,
        method : 'get'
    },
 
}


export default SummaryApi