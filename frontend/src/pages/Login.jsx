import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { asyncLoginUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (user) => {
    dispatch(asyncLoginUser(user));
    navigate("/products");
  };
  return (
    <form
      className="flex flex-col text-2xl justify-start items-start gap-5"
      onSubmit={handleSubmit(loginHandler)}
    >
      <input
        {...register("email")}
        className="w-1/2 outline-0 border-b p-2 "
        type="email"
        placeholder="enter the email"
      />
      <input
        {...register("password")}
        className="w-1/2 outline-0 border-b p-2 "
        type="password"
        placeholder="enter the password"
      />
      <button className="bg-blue-400 rounded font-semibold text-white px-4 py-1">
        Login User
      </button>
      <p>
        Don't have an account?{" "}
        <Link className="text-blue-400" to="/register">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
