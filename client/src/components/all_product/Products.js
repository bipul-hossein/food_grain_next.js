import { getAllProducts } from "@/utils/getAllProducts";
import Card from "../card/Card";
export const dynamic = 'force-dynamic'

const Products = async () => {
const {payload} = await getAllProducts();

  return (
    <div className="mx-auto py-2 mt-10 mb-10 md:px-4 lg:px-0" >
      <h2 className="mb-5 text-4xl font-bold text-[#242424]">All Product</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
        {payload?.map((data, i) => (
          <Card key={i} icon={"new"} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Products;
