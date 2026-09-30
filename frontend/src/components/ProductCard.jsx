import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";

const ProductCard = ({ product, user }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (product) => {
    const copyUser = { ...user, cart: [...user.cart] };
    const x = copyUser.cart.findIndex((c) => c.product.id == product.id);
    if (x == -1) {
      copyUser.cart.push({ product: product, quantity: 1 });
    } else {
      copyUser.cart[x] = {product: product, quantity: copyUser.cart[x].quantity + 1};
    }
    dispatch(asyncUpdateUser(copyUser.id,copyUser));
  };

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="h-64 w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h1 className="mb-2 line-clamp-1 text-xl font-bold text-gray-900">
          {product.title}
        </h1>

        <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Bottom section */}
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-indigo-600">${product.price}</p>

          <button
            onClick={() => addToCartHandler(product)}
            className="rounded-xl bg-indigo-600 px-4 py-2.5 font-medium text-white transition hover:bg-indigo-700 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
        <Link to={`/product/${product.id}`}>More Info</Link>
      </div>
    </div>
  );
};

export default ProductCard;
