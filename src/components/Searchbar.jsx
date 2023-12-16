import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, filterSearch } from "../store";

function Searchbar() {
    const dispatch = useDispatch();
    const searchTerm = useSelector(state => state.searchTerm)

    const handleChange = (event) => {
        dispatch(changeSearchTerm(event.target.value))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(filterSearch(searchTerm))
    }

  return (
    <div >
      <form onSubmit={handleSubmit} className="flex justify-center items-center sm:text-lg">
        <div className="flex items-center gap-2">
          <CiSearch />
          <input className="focus:outline-none border-b-2 sm:w-auto lg:w-96" type="text" placeholder="Search for products" value={searchTerm} onChange={handleChange}/>
        </div>
        <button className="bg-slate-200 ml-4 px-4 rounded-3xl hover:bg-slate-700 hover:text-white  xl:ml-20 ">Search</button>
      </form>
    </div>
  );
}

export default Searchbar;
