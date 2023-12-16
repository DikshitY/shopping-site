import { useSelector } from "react-redux";
import ItemShow from "../components/ItemShow";

function Cart() {
  const cart = useSelector((state) => state.productsData.cart);
  console.log(cart);
  const render = cart.map((item) => {
    return <ItemShow key={item.id} item={item} />;
  });

  return (
    <div className="mt-16 p-4 sm:p-8">
      <div className="flex flex-wrap sm:justify-between sm:gap-8 gap-4">{render}</div>
    </div>
  );
}

export default Cart;
