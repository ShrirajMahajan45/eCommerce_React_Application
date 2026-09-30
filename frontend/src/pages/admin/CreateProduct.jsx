import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { asyncCreateProduct } from "../../store/actions/productActions";

const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProductHandler = (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProduct(product));
    navigate("/products");
  };

  return (
    <form
      className="flex flex-col text-2xl justify-start items-start gap-5"
      onSubmit={handleSubmit(createProductHandler)}
    >
      <input
        {...register("image")}
        className="w-1/2 outline-0 border-b p-2 "
        type="url"
        placeholder="enter the image url"
      />
      <input
        {...register("title")}
        className="w-1/2 outline-0 border-b p-2 "
        type="text"
        placeholder="enter the product title"
      />
      <input
        {...register("price")}
        className="w-1/2 outline-0 border-b p-2 "
        type="number"
        placeholder="enter the price"
      />
      <input
        {...register("category")}
        className="w-1/2 outline-0 border-b p-2 "
        type="text"
        placeholder="enter the category"
      />
      <textarea
        {...register("description")}
        className="w-1/2 outline-0 border-b p-2 "
        type="text"
        placeholder="enter the product description here ...."
      ></textarea>

      <button className="bg-blue-400 rounded font-semibold text-white px-4 py-1">
        Create Product
      </button>
    </form>
  );
};

export default CreateProduct;
