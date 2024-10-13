import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductDetails } from "./";
import { currencyConverter } from "../utils/constants";
import { quantityIncreement, quantityDecreement, removeFromCart } from "../redux/cartSlice";

const Checkout = () => {
  const products = useSelector((state) => state.cart.products);
  const itemNumbers = useSelector((state) => state.cart.productsNumber);
  const subTotal = useSelector((state) =>
    state.cart.products.reduce(
      (subTotal, product) => subTotal + product.price * product.quantity,
      0
    )
  );
  const dispatch = useDispatch();
  return (
    <div className="h-screen bg-amazonClone-background">
      <div className="max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8 gap-10">
          {/* Products */}
          <div className="col-span-6 bg-white">
            <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
            {products.map((product) => (
              <div key={product.id}>
                <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                  <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                    <div className="col-span-2">
                      <Link to={`/product/${product.id}`}>
                        <img
                          className="p-4 m-auto"
                          src={product.image_small}
                          alt="product-small-image"
                        />
                      </Link>
                    </div>
                    <div className="col-span-6">
                      <div className="font-medium text-black mt-2">
                        <Link to={`/product/${product.id}`}>
                          <ProductDetails product={product} ratings={false} />
                        </Link>
                        <span>{currencyConverter(product.price, "INR")}</span>
                      </div>
                      <div>
                        <button
                          onClick={() => dispatch(removeFromCart(product.id))}
                          className="bg-red-900 text-white text-sm xl:text-base font-semibold rounded px-2 py-1 mb-2"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="grid grid-cols-3 w-20 text-center">
                        <button onClick={()=> dispatch(quantityDecreement(product.id))} className="text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer">
                          -
                        </button>
                        <div className="text-lg xl:text-xl">
                          {product.quantity}
                        </div>
                        <button onClick={()=> dispatch(quantityIncreement(product.id))} className="text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-lg xl:text-xl mt-2 font-semibold">
                      {currencyConverter((product.price * product.quantity), "INR")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-lg xl:text-xl text-right mr-4 mb-4">
              Subtotal ({itemNumbers} items):{" "}
              <span className="font-semibold">
                {currencyConverter(subTotal, "INR")}
              </span>
            </div>
          </div>
          {/* Checkout */}
          <div className="h-[250px] col-span-2 bg-white rounded p-7">
            <div className="text-xs xl:text-sm text-green-800 mb-2">
              Your order qualifise for{" "}
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="text-base xl:text-lg mb-4">
              Subtotal ({itemNumbers} items):{" "}
              <span className="font-semibold">
                {currencyConverter(subTotal, "INR")}
              </span>
            </div>
            <button className="btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
