import React from "react";

const CartOrderSummary = () => {
  return (
    /* Order Summary */

    <div className="lg:col-span-1">
      <div className="sticky top-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>

        <div className="mt-5 space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-medium text-gray-900">₹5,296</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Shipping</span>
            <span className="font-medium text-green-600">Free</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Tax</span>
            <span className="font-medium text-gray-900">₹529</span>
          </div>
        </div>

        <div className="my-5 border-t border-gray-100" />

        {/* Coupon */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Promo Code
          </label>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter code"
              className="min-w-0 flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-black"
            />

            <button
              type="button"
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-black"
            >
              Apply
            </button>
          </div>
        </div>

        <div className="my-5 border-t border-gray-100" />

        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-900">Total</span>
          <span className="text-xl font-bold text-gray-900">₹5,825</span>
        </div>

        {/* Checkout */}
        <button
          type="button"
          className="mt-5 w-full rounded-xl bg-black px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Proceed to Checkout
        </button>

        <p className="mt-3 text-center text-xs text-gray-400">
          Secure checkout • Easy returns
        </p>
      </div>
    </div>
  );
};

export default CartOrderSummary;
