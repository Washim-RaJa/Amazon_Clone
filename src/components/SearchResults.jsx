import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { callApi } from "../utils/CallApi";
import { ProductDetails } from './'
import { currencyConverter } from "../utils/constants";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = () => {
    const category = searchParams.get("category");
    const searchTerm = searchParams.get("searchTerm");

    callApi(`src/assets/data/search.json`).then((searchResults) => {
      const categoryResults = searchResults[category];
      if (searchTerm) {
        const results = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(results);
      } else {
        setProducts(categoryResults);
      }
    });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className="max-w-[1300px] m-auto pt-4">
      { products && products.map((product, key)=> (
        <Link key={key} to={`/product/${product.id}`}>
          <div className="h-[250px] grid grid-cols-12 rounded mt-1 bg-purple-500">
            <div className="col-span-2 p-4 bg-gray-200">
              <img src={product.image_small} alt="product_small_image" className="m-auto" />
            </div>
            <div className="col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100">
              <div className="font-medium text-black p-2">
                <ProductDetails product={product} ratings={true}/>
                <div className="text-xl xl:text-2xl pt-1">
                  {currencyConverter(product.price, "INR")}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))
      }
    </div>
  )
};

export default SearchResults;
