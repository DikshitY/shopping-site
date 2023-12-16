import ItemShow from "../components/itemShow";
import { useSelector } from "react-redux";

function WishList() {
  const wishList = useSelector((state) => state.productsData.wishList);
  console.log(wishList);
  const renderProducts = wishList.map((item) => {
    return <ItemShow key={item.id} item={item} />;
  });

  return (
    <div className="mt-16 p-4 sm:p-8">
      <div className="flex flex-wrap sm:justify-between sm:gap-8 gap-4">{renderProducts}</div>
    </div>
  );
}

export default WishList;
