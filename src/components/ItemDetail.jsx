import ItemDetailShow from "./ItemDetailShow";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ItemDetail() {
  const param = useParams();
  const location = useLocation();
  const data = useSelector((state) => state.productsData.data);
  const item = data.filter((item) => item.id === param.id);

  const type = location.state?.type || "";

  const renderItem = item.map((product) => {
    return <ItemDetailShow key={product.id} product={product} />;
  });

  return (
    <div className="h-screen w-screen mt-16 p-4 sm:p-8 flex flex-col justify-between sm:justify-center  items-center">
      <Link className="text-xl self-start sm:mb-8" to={`..?${location.state.search}`} relative="path">
        &larr; <span>{`Back to the ${type} store`}</span>
      </Link>
      {renderItem}
    </div>
  );
}

export default ItemDetail;
