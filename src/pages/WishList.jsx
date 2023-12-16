import { el } from "@faker-js/faker";
import ItemShow from "../components/ItemShow";
import { useSelector } from "react-redux";

function WishList() {
  const wishList = useSelector((state) => state.productsData.wishList);

  const renderProducts = wishList.map((item) => {
    return <ItemShow key={item.id} item={item} />;
  });

  let content;
  if(wishList.length === 0){
     content = <h1 className="text-3xl font-bold">Your wishlist has 0 items.</h1>
  }else{
    content = <div className="flex flex-wrap sm:justify-between sm:gap-8 gap-4">{renderProducts}</div>
  }

  return (
    <div className="mt-16 p-4 sm:p-8 h-full">
      {content}
    </div>
  );
}

export default WishList;
