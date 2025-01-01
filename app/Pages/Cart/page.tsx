"use client";

import React from "react";
import { useCart } from "../../components/CartContext";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const calculateTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="max-w-[1321px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Bag</h2>

          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-24 h-24 bg-gray-200 rounded overflow-hidden">
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      Price: ${item.price}
                    </p>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => decreaseQuantity(item)}
                        className="bg-gray-300 text-black rounded p-1"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item)}
                        className="bg-gray-300 text-black rounded p-1"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">MRP</p>
                  <button
                    onClick={() => removeFromCart(item)}
                    className="text-red-500 hover:text-red-700 mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your bag is empty.</p>
          )}
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Summary</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg font-semibold">${calculateTotal()}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg">Estimated Delivery & Handling</p>
              <p className="text-lg font-semibold text-green-500">Free</p>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between mb-6">
              <p className="text-xl font-bold">Total</p>
              <p className="text-xl font-bold">${calculateTotal()}</p>
            </div>
            <button className="w-full bg-teal-500 text-white py-3 rounded-3xl text-lg font-semibold hover:bg-teal-600">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
