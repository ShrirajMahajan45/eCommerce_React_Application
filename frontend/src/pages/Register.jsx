import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import {useDispatch } from "react-redux"
import { asyncRegisterUser } from "../store/actions/userActions";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const registerHandler = (user) => {
    user.id = nanoid()
    user.isAdmin = false
    user.cart = []
    dispatch(asyncRegisterUser(user))
    navigate("/login")
  };  

  return (
    <form
      className="flex flex-col text-2xl justify-start items-start gap-5"
      onSubmit={handleSubmit(registerHandler)}
    >
      <input
        {...register("username")}
        className="w-1/2 outline-0 border-b p-2 "
        type="text"
        placeholder="enter the username"
      />
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
        Register User
      </button>

      <p>
        Already have an account?{" "}
        <Link className="text-blue-400" to="/login">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
