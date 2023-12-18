import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import {
  addToWishList,
  removeFromWishList,
  addToCart,
  removeFromCart,
} from "../store";

function ItemDetailShow({ product }) {
  const dispatch = useDispatch();

  const isWishList = useSelector((state) =>
    state.productsData.wishList.some((item) => item.id === product.id)
  )
    ? true
    : false;

  const isCart = useSelector((state) =>
    state.productsData.cart.some((item) => item.id === product.id)
  )
    ? true
    : false;

  const handlWishClick = () => {
    if (isWishList) {
      dispatch(removeFromWishList(product));
    } else {
      dispatch(addToWishList(product));
    }
  };

  const handleCartClick = () => {
    if (isCart) {
      dispatch(removeFromCart(product));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="flex flex-col sm:flex-row bg-white sm:h-auto rounded-xl items-center border-2 border-green-500">
      <div className="sm:grow sm:h-full sm:w-1/2 border-4 border-red-600">
        <img
          className="h-full w-full object-cover rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
          src={product.image}
        />
      </div>
      <div className="relative p-4 flex flex-col sm:w-1/2">
        <h3 className="text-2xl font-semibold">{product.name}</h3>
        <p className="text-slate-500 mb-2">{product.product}</p>
        <div className="flex items-center gap-2 mb-2 sm:mb-16">
          <p className="bg-green-600 px-2 text-white rounded">
            {product.rating}
          </p>
          <p className="text-slate-500">{product.idealFor}</p>
        </div>
        <p>${product.price}</p>
        <p className="font-semibold">
          Detail: <span className="font-thin text-sm">{product.detail}</span>
        </p>
        <p className="font-semibold mb-2">
          {product.bankOffer ? "Bank Offer" : null}
        </p>
        <button
          className={`${
            isCart ? "bg-slate-400" : "bg-green-600"
          } text-white px-12 py-4 rounded-2xl w-72 text-lg self-center mt-auto`}
          onClick={handleCartClick}
        >
          {isCart ? (
            <div className="flex gap-4 items-center justify-center">
              <FiShoppingCart /> <p>Remove from Cart</p>
            </div>
          ) : (
            <div className="flex gap-4 items-center justify-center">
              <FiShoppingCart /> <p>Add to Cart</p>
            </div>
          )}
        </button>
        <button
          className="text-2xl absolute top-4 right-4"
          onClick={handlWishClick}
        >
          {isWishList ? <GoHeartFill className="text-red-600" /> : <GoHeart />}
        </button>
      </div>
    </div>
  );
}

export default ItemDetailShow;
