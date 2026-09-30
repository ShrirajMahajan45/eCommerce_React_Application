import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { asyncLogoutUser } from "../store/actions/userActions";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-center gap-x-10 p-5  text-xl font-semibold">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      {user ? (
        <>
          {user.isAdmin && <NavLink to="/admin/create-product">Create Product</NavLink>}
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/user-profile">Profile</NavLink>
          <button className="text-red-600 font-bold" onClick={logoutHandler}>
            Log Out
          </button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Nav;
