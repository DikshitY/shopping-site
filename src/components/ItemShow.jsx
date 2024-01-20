import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { addToWishList, removeFromWishList } from "../store";
import { Link } from "react-router-dom";

function ItemShow({ item, searchParams, type }) {
  const dispatch = useDispatch();

  const isWishList = useSelector((state) =>
    state.productsData.wishList.some((product) => product.id === item.id)
  )
    ? true
    : false;

  const handlWishClick = () => {
    if (isWishList) {
      dispatch(removeFromWishList(item));
    } else {
      dispatch(addToWishList(item));
    }
  };

  return (
    <div className="bg-white rounded-xl flex relative sm:max-w-2xl">
      <Link className="w-1/2 mr-4 sm:mr-8" to={`/${item.id}`} state={{search: searchParams, type}}>
        <div className="w-full h-full">
          <img className="h-full w-full object-cover rounded-l-xl" src={item.image} />
        </div>
      </Link>
      <div className="w-1/2 mt-4">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-slate-500 mb-2">{item.product}</p>
        <div className="flex items-center gap-2 mb-2 sm:mb-16">
          <p className="bg-green-600 px-2 text-white rounded">{item.rating}</p>
          <p className="text-slate-500">{item.idealFor}</p>
        </div>
        <p className="mb-2">$ {item.price}</p>
        <p className="font-semibold mb-2">{item.bankOffer ? "Bank Offer" : null}</p>
      </div>
      <button className="absolute bottom-2 right-2 text-xl" onClick={handlWishClick}>
        {isWishList ? <GoHeartFill className="text-red-600"/> : <GoHeart />}
      </button>
    </div>
  );
}

export default ItemShow;
