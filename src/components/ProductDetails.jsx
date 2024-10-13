import ProductBadge from "./ProductBadge"
import ProductRatings from "./ProductRatings"

const ProductDetails = ({product, ratings}) => {
  return (
    <div className="mb-1">
        <div className="text-xl xl:text-2xl mb-1 font-medium">{product.title}</div>
        <div className="text-sm xl:text-base mb-1">
            by <span className="text-blue-500">{product.brand}</span>
        </div>
        { ratings && 
            <div className="text-sm xl:text-base mb-1">
                <ProductRatings avgRating={product.avgRating} ratings={product.ratings}/>
            </div>
        }
        <div className="text-xs xl:text-sm mb-1 font-bold">{product.attribute}</div>
        <div className="">
            <ProductBadge badge={product.badge}/>
        </div>
    </div>
  )
}

export default ProductDetails