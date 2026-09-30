import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userActions";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const IncreaseQuantityHandler = (item, index) => {
    const copyUser = { ...user, cart: [...user.cart] };
    copyUser.cart[index] = {
      product: item.product,
      quantity: copyUser.cart[index].quantity + 1,
    };
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };
  const DecreaseQuantityHandler = (item, index) => {
    const copyUser = { ...user, cart: [...user.cart] };
    if (copyUser.cart[index].quantity > 1) {
      copyUser.cart[index] = {
        product: item.product,
        quantity: copyUser.cart[index].quantity - 1,
      };
    } else {
      const remainingCart = copyUser.cart.filter((_, i) => i !== index);

      copyUser.cart = remainingCart;
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const goToProducts = () => {
    navigate("/products");
  };
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Shopping Cart
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Review your items before checkout
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              {/* Cart Header */}
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <h2 className="font-semibold text-gray-900">Cart Items</h2>
                <span className="text-sm text-gray-500">
                  {user.cart.length}
                </span>
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-100">
                {user.cart.map((item, index) => (
                  <div key={item.product.id} className="flex gap-4 p-5">
                    {/* Product Placeholder */}
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xs font-medium text-gray-400">
                      <img
                        className="object-cover"
                        src={item.product.image}
                        alt="product image"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex min-w-0 flex-1 flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {item.product.title}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.product.description}
                            </p>
                          </div>

                          <button
                            type="button"
                            className="text-gray-400 transition hover:text-red-500"
                          >
                            ✕
                          </button>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        {/* Quantity */}
                        <div className="flex items-center rounded-lg border border-gray-200">
                          <button
                            type="button"
                            className="px-3 py-1.5 text-gray-600 hover:bg-gray-50"
                            onClick={() => DecreaseQuantityHandler(item, index)}
                          >
                            −
                          </button>

                          <span className="px-3 py-1.5 text-sm font-medium">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            className="px-3 py-1.5 text-gray-600 hover:bg-gray-50"
                            onClick={() => IncreaseQuantityHandler(item, index)}
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-semibold text-gray-900">
                          {item.product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Shopping */}
            <button
              type="button"
              className="mt-4 text-sm font-medium text-gray-700 hover:text-black"
              onClick={goToProducts}
            >
              ← Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
