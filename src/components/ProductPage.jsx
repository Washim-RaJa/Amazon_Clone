import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { callApi } from "../utils/CallApi";
import ProductDetails from "./ProductDetails";
import { currencyConverter } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
// import { INR_CURRENCY } from "../utils/constants";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();
  

  const getProduct = () => {
    callApi(`src/assets/data/products.json`).then((productResults) =>
      setProduct(productResults[id])
    );
  };

  const addQuantityToProduct = () => {
    setProduct(product.quantity = quantity);
    return product;
  }

  useEffect(() => {
    getProduct();
  }, []);
  
  if (!product?.title) return <h1>Loading Product...</h1>;
  return (
    product && (
      <div className="h-screen bg-amazonClone-background">
        <div className="max-w-[1500px] m-auto p-4">
            <div className="grid grid-cols-10 gap-2">
                {/* Left */}
                <div className="col-span-3 p-8 rounded bg-white m-auto">
                  <img src={product.image} alt="product_small" />
                </div>
                {/* Middle */}
                <div className="col-span-5 bg-white p-4 rounded divide-y divide-gray-400">
                  <div className="mb-3">
                    <ProductDetails product={product} ratings={true}/>
                  </div>
                  <div className="text-base xl:text-lg mt-3">
                    {product.description}
                  </div>
                </div>
                {/* Right */}
                <div className="col-span-2 p-4 rounded bg-white">
                  <div className="text-xl xl:text-2xl font-semibold text-red-700 text-right">
                    {currencyConverter(product.price, "INR")}
                  </div>
                  <div className="text-base xl:text-lg font-semibold text-gray-500 text-right">
                    RRP{" "}
                    <span className="line-through">{currencyConverter(product.oldPrice, "INR")}</span>
                  </div>
                  <div className="text-sm xl:text-base font-semibold text-blue-500 mt-3">FREE Return</div>
                  <div className="text-sm xl:text-base font-semibold text-blue-500 mt-1">FREE Delivery</div>
                  <div className="text-base xl:text-lg font-semibold text-green-700 mt-1">In Stock</div>
                  <div className="text-base xl:text-lg mt-1">Quantity:{" "}
                    <select onChange={ e => setQuantity(e.target.value)} className="px-2 py-1 bg-white border rounded-md focus:border-indigo-600">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </div>
                  <Link to={"/checkout"}>
                    <button onClick={()=> dispatch(addToCart(addQuantityToProduct()))} className="btn">
                      Add to Cart
                    </button>
                  </Link>
                </div>
            </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
