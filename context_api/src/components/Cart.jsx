import React, { useContext } from "react";
import { MyStore } from "../context/MyECommerce";

const Cart = () => {
  let { cartItems } = useContext(MyStore);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
                <h2 className="text-2xl font-semibold text-gray-600">
                  Your Cart is Empty 🛒
                </h2>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-lg p-5 flex flex-col md:flex-row items-center gap-6"
                >
                  <div className="w-36 h-36 bg-gray-100 rounded-xl flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-28 object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">{item.title}</h2>

                    <p className="text-gray-500 mt-2 capitalize">
                      {item.category}
                    </p>

                    <h3 className="text-2xl font-bold text-green-700 mt-3">
                      ${item.price}
                    </h3>
                  </div>

                  {/* Static Quantity UI */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button className="px-4 py-2 bg-gray-100 cursor-default">
                        -
                      </button>

                      <span className="px-5 py-2">{item.quantity || 1}</span>

                      <button className="px-4 py-2 bg-gray-100 cursor-default">
                        +
                      </button>
                    </div>

                    <button className="w-full mt-3 border border-red-600 py-2 rounded-md font-semibold hover:bg-red-50 transition text-red-500 font-medium cursor-default">
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6 h-fit sticky top-6">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between">
                <span>Items</span>
                <span>{cartItems.length}</span>
              </div>
              {/* <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div> */}

              <hr />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-green-700">${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>

            <button className="w-full mt-3 border border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
