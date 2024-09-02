// "use client"
// import { useSearchParams } from "next/navigation";

import Card from "@/components/card/Card";
import { getSearchProducts } from "@/utils/getSearchProducts";


const SearchPage = async({searchParams}) => { 
    const {q} = searchParams
    const {payload} = await getSearchProducts(q);
    const data = payload
    // const [data,setData] = useState([])
    console.log(q);
    const loading = false

    return (
        <div className="mx-auto py-2 mt-4 mb-10 md:px-4 lg:px-0 min-h-screen" >
        {
          loading && (
            <p className='text-lg text-center'>Loading ...</p>
          )
        }
   
        <p className='text-lg font-semibold my-3'>Search Results : {data ?  data?.length : 0}</p>
  
        {
          !data && !loading && (
             <p className='bg-white text-lg text-center p-4'>Product Not Found....</p>
          )
        }
  
        {
          data?.length !==0 && !loading && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
                {data?.map((product, i) => (
                    <Card key={i} icon={"new"} data={product} />
                ))}
                </div>
          )
        }

      </div>
    );
};

export default SearchPage;