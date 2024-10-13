import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { callApi } from "../utils/CallApi";
import { createSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();
  
  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "search",
      search: `${
        createSearchParams({  // Create a url with provide category & searchTerm
          category: `${category}`,
          searchTerm: `${searchTerm}`
        })
      }`
    })
    setSearchTerm("");
    setCategory("All")
  }
  const getSuggestions = () => {
    callApi(`src/assets/data/suggestions.json`).then((suggestionResults) => {
      setSuggestions(suggestionResults);
    });
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center h-10 bg-amazonClone-yellow rounded">
        <select onChange={(e)=> setCategory(e.target.value)} className="p-2 h-full bg-gray-300 text-black border text-xs xl:text-sm">
          <option value="All">All</option>
          <option value="deals">Deals</option>
          <option value="amazon">Amazon</option>
          <option value="fashion">Fashion</option>
          <option value="computers">Computers</option>
          <option value="home">Home</option>
          <option value="mobiles">Mobiles</option>
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex grow items-center h-full rounded-l text-black pl-4"
        />
        <button onClick={onHandleSubmit} className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black w-[79%] absolute right-[46px] z-40 hover:border-b hover:pb-1">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return ( // will return an array of iterated suggestions if the below condition were met
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10) // will slice the obtained array with length 10
            .map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => setSearchTerm(suggestion.title)}
                className="cursor-pointer hover:bg-blue-500 hover:text-white pl-4"
              >
                {suggestion.title}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
