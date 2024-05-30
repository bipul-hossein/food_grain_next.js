import Link from "next/link";

const EmptyProductMessage = () => {
  return (
    <div>
      <div className="p-4 py-8 bg-white flex gap-4 flex-col items-center">
        <h6 className="font-semibold text-xl uppercase">
          Your Cart feels lonely.
        </h6>
        <p className="text-sm text-center px-10 -mt-2">
          Your Shopping cart lives to serve. Give it purpose - fill it with
          Organic Food or relative products and make it happy.
        </p>
        <Link href="/shop">
          <button className="bg-blue-500 rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyProductMessage;
