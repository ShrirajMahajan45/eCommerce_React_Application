import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect, useState } from "react";
const ProductCard = lazy(() => import("../components/ProductCard"));
import axios from "../api/axiosconfig";
import InfiniteScroll from "react-infinite-scroll-component";
import { loadlazyproduct } from "../store/reducers/productSlice";
import Loader from "../components/Loader";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const user = useSelector((state) => state.userReducer.users);
  // const [products, setproducts] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_start=${products.length}&_limit=6`,
      );
      if (data.length == 0) {
        sethasMore(false);
      } else {
        sethasMore(true);
        dispatch(loadlazyproduct(data));
        // setproducts([...products, ...data]);
        // setproducts((prev)=> [...prev,...data])
      }
    } catch (error) {
      console.log(error);
      sethasMore(false);
    }
  };

  // const renderProduct = products.map((product) => {
  //   return <ProductCard key={product.id} product={product} user={user} />;
  // });

  const renderProduct = products.map((product) => {
    return (
      <Suspense key={product.id} fallback={<Loader />}>
        <ProductCard product={product} user={user} />
      </Suspense>
    );
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  return products.length > 0 ? (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchProducts}
      hasMore={hasMore}
      loader={<h3>Loading...</h3>}
      endMessage={<p>You have seen everything.</p>}
    >
      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderProduct}
      </div>
    </InfiniteScroll>
  ) : (
    <div className="flex min-h-75 items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600"></div>

        <p className="text-sm font-medium text-gray-500">Loading products...</p>
      </div>
    </div>
  );
};

export default Products;
