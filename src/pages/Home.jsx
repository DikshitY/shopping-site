import { useSelector } from "react-redux";
import ItemShow from "../components/ItemShow";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const data = useSelector((state) => state.productsData.data);

  // const handleChange = (event) => {
  //   // setSearchParams(`type=${event.target.value}`); OR
  //   if (event.target.value === "all") {
  //     setSearchParams({});
  //   } else {
  //     setSearchParams({ type: event.target.value });
  //   }
  // };

  // In the above method if we there is already something in the query/search param that thing will totally be replaced by our value but if we want to have the value of the query/search param we will use the below method . . .

  const handleCategoryChange = (key) => {
    setSearchParams((prevParam) => {
      if (event.target.value === "all") {
        prevParam.delete(key);
      } else {
        prevParam.set(key, event.target.value);
      }
      return prevParam;
    });
  };

  const handleSortingChange = (key) => {
    setSearchParams((prevParam) => {
      if (event.target.value === "none") {
        prevParam.delete(key);
      } else {
        prevParam.set(key, event.target.value);
      }
      return prevParam;
    });
  };

  let filterType = searchParams.get("type");
  let sortType = searchParams.get("sort");

  let filteredData = filterType
    ? data.filter((item) => item.idealFor.toLowerCase() === filterType)
    : data;

  let dataToSort = [...filteredData];
  let displayData;

  if (sortType) {
    if (sortType === "lowToHigh") {
      displayData = dataToSort.sort(
        (a, b) => Number(a.price) - Number(b.price)
      );
    } else {
      displayData = dataToSort.sort(
        (a, b) => Number(b.price) - Number(a.price)
      );
    }
  } else {
    displayData = filteredData;
  }

  const renderData = displayData.map((item) => {
    return (
      <ItemShow
        key={item.id}
        item={item}
        type={filterType}
        searchParams={searchParams.toString()}
      />
    );
  });

  return (
    <div className="mt-16 p-4 sm:p-8">
      <div className="flex gap-8 mb-4">
        <div className="category-filter">
          <select
            className="focus:outline-none"
            onChange={() => handleCategoryChange("type")}
          >
            <option value="all">All</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="children">Children</option>
          </select>
        </div>
        <div className="sorting-filter">
          <select
            className="focus:outline-none"
            onChange={() => handleSortingChange("sort")}
          >
            <option value="none">None</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-between sm:gap-8 gap-4">{renderData}</div>
    </div>
  );
}

export default Home;
