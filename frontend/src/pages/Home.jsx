import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

const Home = () => {
  const products = useSelector((state) => state.productReducer.products)
  return (

    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 lg:px-8">

          {/* Hero Content */}
          <div className="text-white">
            <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              ✨ New Collection Available
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Find Products
              <span className="block text-indigo-200">
                You’ll Love.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-indigo-100">
              Discover quality products at amazing prices. Shop your
              favorite products and get them delivered right to your door.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-700 shadow-lg transition hover:bg-gray-100 hover:shadow-xl"
              >
                Shop Now →
              </Link>

              <Link
                to="/products"
                className="rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Explore Products
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-purple-400/30 blur-3xl"></div>

            <div className="relative rounded-3xl bg-white/10 p-6 shadow-2xl backdrop-blur">
              <img
                src={
                  products[0]?.image ||
                  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
                }
                alt="Featured product"
                className="h-[350px] w-full rounded-2xl object-contain sm:w-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y px-6 py-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">

          <div className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-xl">
              🚚
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Free Delivery
              </h3>
              <p className="text-sm text-gray-500">
                On orders over $50
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl">
              🔒
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Secure Payment
              </h3>
              <p className="text-sm text-gray-500">
                100% secure checkout
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-xl">
              ↩️
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                Easy Returns
              </h3>
              <p className="text-sm text-gray-500">
                30 day return policy
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="font-semibold text-indigo-600">
              Browse
            </p>

            <h2 className="mt-1 text-3xl font-bold text-gray-900">
              Shop by Category
            </h2>

            <p className="mt-2 text-gray-500">
              Find exactly what you're looking for.
            </p>
          </div>

          <Link
            to="/products"
            className="hidden font-semibold text-indigo-600 hover:text-indigo-700 sm:block"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {[
            {
              name: "Electronics",
              icon: "💻",
              color: "bg-blue-50",
            },
            {
              name: "Fashion",
              icon: "👕",
              color: "bg-pink-50",
            },
            {
              name: "Jewellery",
              icon: "💎",
              color: "bg-purple-50",
            },
            {
              name: "Accessories",
              icon: "🎧",
              color: "bg-orange-50",
            },
          ].map((category) => (
            <Link
              key={category.name}
              to="/products"
              className={`group rounded-2xl ${category.color} p-8 text-center transition hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className="text-5xl transition duration-300 group-hover:scale-110">
                {category.icon}
              </div>

              <h3 className="mt-4 font-bold text-gray-800">
                {category.name}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Shop now →
              </p>
            </Link>
          ))}

        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="font-semibold text-indigo-600">
                Our Collection
              </p>

              <h2 className="mt-1 text-3xl font-bold text-gray-900">
                Featured Products
              </h2>

              <p className="mt-2 text-gray-500">
                Our most popular products picked for you.
              </p>
            </div>

            <Link
              to="/products"
              className="hidden font-semibold text-indigo-600 hover:text-indigo-700 sm:block"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {products.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-50">

                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-110"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                    New
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">

                  <h3 className="line-clamp-1 font-bold text-gray-900">
                    {product.title}
                  </h3>

                  <div className="mt-2 text-sm text-yellow-500">
                    ★★★★★
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-indigo-600">
                      ${product.price}
                    </span>

                    <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition group-hover:bg-indigo-600 group-hover:text-white">
                      View
                    </span>
                  </div>

                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-700 px-8 py-14 text-center text-white shadow-xl">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to start shopping?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-indigo-100">
            Explore our collection and discover products made for you.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 font-semibold text-indigo-700 shadow-lg transition hover:bg-gray-100"
          >
            Browse All Products →
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Home;
