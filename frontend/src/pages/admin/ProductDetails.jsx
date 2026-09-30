import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from "../../store/actions/productActions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const products = useSelector((state) => state.productReducer.products);
  const users = useSelector((state) => state.userReducer.users);

  const product = products?.find((product) => product.id == id);

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description,
    },
  });

  const updateProductHandler = (product) => {
    dispatch(asyncUpdateProduct(id, product));
  };

  const deleteProductHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate("/products");
  };

  return product ? (
    <div>
      <div className="mx-auto flex min-h-75 w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl">
        {/* Product Image */}
        <div className="flex w-full items-center justify-center bg-gray-50 p-10">
          <div className="group h-full w-full overflow-hidden rounded-2xl">
            <img
              src={product.image}
              alt={product.title}
              className="h-full max-h-137.5 w-full object-contain transition duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Product Content */}
        <div className="flex w-full flex-col justify-center p-10">
          {/* Category */}
          <span className="mb-4 w-fit rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-600">
            {product.category || "Product"}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-bold leading-tight text-gray-900">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            {/* <div className="flex text-yellow-400">★★★★★</div> */}

            <span className="text-sm text-gray-500">
              {product.rating.rate || 4} ({product.rating.count || 20} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mt-6">
            <span className="text-4xl font-bold text-indigo-600">
              ${product.price}
            </span>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              Description
            </h2>

            <p className="text-base leading-7 text-gray-600">
              {product.description}
            </p>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200"></div>

          {/* Quantity */}
          {/* <div className="flex items-center gap-4">
          <span className="font-semibold text-gray-800">Quantity</span>

          <div className="flex items-center overflow-hidden rounded-xl border border-gray-300">
            <button className="px-4 py-2 text-xl transition hover:bg-gray-100">
              −
            </button>

            <span className="px-5 py-2 font-semibold">1</span>

            <button className="px-4 py-2 text-xl transition hover:bg-gray-100">
              +
            </button>
          </div>
        </div> */}

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="flex-1 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg active:scale-95">
              Add to Cart
            </button>

            {/* <button className="rounded-xl border-2 border-gray-200 px-5 py-3.5 text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500">
            ♡
          </button> */}
          </div>

          {/* Extra Info */}
          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-xl bg-gray-50 p-3">
              <div className="text-lg">🚚</div>
              <p className="mt-1 text-xs font-medium text-gray-600">
                Free Delivery
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-3">
              <div className="text-lg">↩️</div>
              <p className="mt-1 text-xs font-medium text-gray-600">
                Easy Returns
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-3">
              <div className="text-lg">🔒</div>
              <p className="mt-1 text-xs font-medium text-gray-600">
                Secure Payment
              </p>
            </div>
          </div>
        </div>
      </div>

      {users && users.isAdmin && (
        <form
          className="flex flex-col text-2xl justify-start items-start gap-5 mt-25"
          onSubmit={handleSubmit(updateProductHandler)}
        >
          <input
            {...register("image")}
            className="w-full outline-0 border-b p-2 "
            type="url"
            placeholder="enter the image url"
          />
          <input
            {...register("title")}
            className="w-full outline-0 border-b p-2 "
            type="text"
            placeholder="enter the product title"
          />
          <input
            {...register("price")}
            className="w-full outline-0 border-b p-2 "
            type="number"
            placeholder="enter the price"
          />
          <input
            {...register("category")}
            className="w-full outline-0 border-b p-2 "
            type="text"
            placeholder="enter the category"
          />
          <textarea
            {...register("description")}
            className="w-full outline-0 border-b p-2 "
            type="text"
            placeholder="enter the product description here ...."
          ></textarea>

          <div className="flex justify-center items-center text-xl gap-5">
            <button className="bg-blue-700 rounded-xl font-semibold text-white px-4 py-2">
              Update Product
            </button>
            <button
              type="button"
              onClick={deleteProductHandler}
              className="bg-red-700 rounded-xl font-semibold  text-white px-4 py-2"
            >
              Delete Product
            </button>
          </div>
        </form>
      )}
    </div>
  ) : (
    <div className="flex min-h-75 items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600"></div>

        <p className="text-sm font-medium text-gray-500">Loading products...</p>
      </div>
    </div>
  );
};

export default ProductDetails;
