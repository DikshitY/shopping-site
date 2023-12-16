import { useSelector } from "react-redux";
import ItemShow from "../components/ItemShow";

function Cart() {
  const cart = useSelector((state) => state.productsData.cart);

  const render = cart.map((item) => {
    return <ItemShow key={item.id} item={item} />;
  });

  let total;
  let content;
  if (cart.length === 0) {
    content = <h1 className="text-3xl font-bold">Your cart has 0 items.</h1>;
    total = 0;
  } else {
    total = cart.reduce((acc, item) => acc + Number(item.price), 0)
    content = (
      <div className="flex flex-wrap sm:justify-between sm:gap-8 gap-4">
        <h1 className="font-bold">Total Cart Cost: ${total}</h1>
        {render}
      </div>
    );
  }

  console.log(total);

  return <div className="mt-16 p-4 sm:p-8 h-full">{content}</div>;
}

export default Cart;
