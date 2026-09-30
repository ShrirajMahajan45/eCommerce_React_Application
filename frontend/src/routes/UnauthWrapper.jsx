

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UnauthWrapper = ({ children }) => {
  const user = useSelector((state) => state.userReducer.users);

  return !user ? children : <Navigate to="/" replace />;
};

export default UnauthWrapper;