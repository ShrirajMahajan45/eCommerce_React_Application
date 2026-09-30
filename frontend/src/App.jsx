import { Suspense, useEffect, useState } from "react";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import { asyncCurrentUser } from "./store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader"
// import { asyncLoadProducts } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  // const products = useSelector((state) => state.productReducer.products);

  // useEffect(() => {
  //   dispatch(asyncLoadProducts());
  //   dispatch(asyncCurrentUser());
  // }, []);

  useEffect(() => {
    !users && dispatch(asyncCurrentUser());
  }, [users]);

  // useEffect(() => {
  //   products.length == 0 && dispatch(asyncLoadProducts());
  // }, [products]);

  return (
    <div className="p-7">
      <Nav />
      <Suspense fallback={<h3>Loading...</h3>}>
        <MainRoutes />
      </Suspense>
    </div>
  );
};

export default App;
