import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asyncDeleteUser,
  asyncUpdateUser,
} from "../../store/actions/userActions";
import { useEffect } from "react";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {users} = useSelector((state) => state.userReducer);



  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const updateUserHandler = (user) => {
    dispatch(asyncUpdateUser(users.id, user));
  };
  const deleteUserHandler = () => {
    dispatch(asyncDeleteUser(users.id));
    navigate("/login");
  };

  useEffect(() => {
    if (users) {
      reset({
        username: users.username,
        email: users.email,
        password: users.password,
      });
    }
  }, [users, reset]);

  return users ? (
    <div className="flex flex-col min-h-[80vh] items-center justify-center bg-gray-50 px-4 p-10">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        {/* Profile Header */}
        <div className="mb-8 text-center">
          {/* <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-3xl font-bold text-indigo-600">
            {users.username}
          </div> */}

          <h1 className="mt-4 text-2xl font-bold text-gray-900">My Profile</h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your account information
          </p>
        </div>

        {/* User Information */}
        <div className="space-y-5">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Name
            </label>

            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900">
              {users?.username || "Not available"}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900">
              {users?.email || "Not available"}
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 tracking-widest text-gray-900">
              ••••••••
            </div>
          </div>
        </div>
      </div>

      <form
        className="flex flex-col text-2xl justify-start items-start gap-5 mt-25"
        onSubmit={handleSubmit(updateUserHandler)}
      >
        <input
          {...register("username")}
          className="w-full outline-0 border-b p-2 "
          type="text"
        />
        <input
          {...register("email")}
          className="w-full outline-0 border-b p-2 "
          type="email"
        />
        <input
          {...register("password")}
          className="w-full outline-0 border-b p-2 "
          type="password"
        />
        <div className="flex justify-center items-center text-xl gap-5">
          <button className="bg-blue-700 rounded-xl font-semibold text-white px-4 py-2">
            Update User
          </button>
          <button
            type="button"
            onClick={deleteUserHandler}
            className="bg-red-700 rounded-xl font-semibold  text-white px-4 py-2"
          >
            Delete User
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default UserProfile;
