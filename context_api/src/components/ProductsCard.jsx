import React, { useContext } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { MyStore } from "../context/MyECommerce";

const ProductsCard = ({ product }) => {
  let { setCartItems } = useContext(MyStore);

  return (
    <div className="p-4">
      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        {/* Wishlist */}
        <button className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow hover:bg-red-50">
          <Heart
            size={18}
            className="text-gray-500 hover:text-red-500 cursor-pointer"
          />
        </button>

        {/* Image */}
        <div className="h-64 overflow-hidden bg-gray-100 p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="space-y-3 p-5">
          {/* Category */}
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold capitalize text-blue-700">
            {product.category}
          </span>

          {/* Title */}
          <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
            {product.title}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="ml-1 text-sm font-medium">
                {product.rating.rate}
              </span>
            </div>

            <span className="text-sm text-gray-500">
              ({product.rating.count} Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-green-700">
              ${product.price}
            </h3>

            <button
              onClick={() => setCartItems((prev) => [...prev, product])}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 cursor-pointer"
            >
              <ShoppingCart size={18} />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
