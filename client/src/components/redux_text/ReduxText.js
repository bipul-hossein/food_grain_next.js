"use client";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/features/cart/cartSlice";

const ReduxText = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.value);
  return (
    <div>
      <div className="flex justify-center items-center gap-4 my-10">
        <button
          className="text-5xl"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="text-5xl">{count}</span>
        <button
          className="text-5xl"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ReduxText;
