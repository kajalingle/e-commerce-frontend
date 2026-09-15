import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navigation() {
  return (
    <div className="w-full">

      {/* Top Delivery Bar */}
      <div className="bg-indigo-600 text-white text-center py-3 text-sm font-medium">
        Get free delivery on orders over $100
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-gray-200 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="text-2xl font-bold text-gray-900">
              E-COMMERCE
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-8 h-full">

              {/* Women */}
              <div className="group h-full flex items-center">
                <button className="flex items-center gap-1 text-gray-700 hover:text-indigo-600">
                  Women
                  <KeyboardArrowDownIcon fontSize="small" />
                </button>

                {/* Women Dropdown */}
                <div className="absolute left-0 right-0 top-[116px] hidden group-hover:block bg-white border-b border-gray-200 shadow-lg z-50">

                  <div className="max-w-7xl mx-auto px-8 py-10">

                    <div className="grid grid-cols-5 gap-10">

                      <div>
                        <h3 className="font-semibold mb-5">Clothing</h3>

                        <p className="text-gray-500 mb-3 hover:text-gray-900 cursor-pointer">Tops</p>
                        <p className="text-gray-500 mb-3 hover:text-gray-900 cursor-pointer">Dresses</p>
                        <p className="text-gray-500 mb-3 hover:text-gray-900 cursor-pointer">Pants</p>
                        <p className="text-gray-500 mb-3 hover:text-gray-900 cursor-pointer">Denim</p>
                        <p className="text-gray-500 mb-3 hover:text-gray-900 cursor-pointer">Sweaters</p>
                        <p className="text-gray-500 mb-3 hover:text-gray-900 cursor-pointer">T-Shirts</p>
                        <p className="text-gray-500 mb-3 hover:text-gray-900 cursor-pointer">Jackets</p>
                        <p className="text-gray-500 mb-3 hover:text-gray-900 cursor-pointer">Activewear</p>
                        <p className="text-gray-500 hover:text-gray-900 cursor-pointer">Browse All</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-5">Accessories</h3>

                        <p className="text-gray-500 mb-3 hover:text-gray-900 cursor-pointer">Watches</p>
                        <p className="text-gray-500 mb-3 hover:text-gray-900 cursor-pointer">Wallets</p>
                        <p className="text-gray-500 mb-3 hover:text-gray-900 cursor-pointer">Bags</p>
                        <p className="text-gray-500 mb-3 hover:text-gray-900 cursor-pointer">Sunglasses</p>
                        <p className="text-gray-500 mb-3 hover:text-gray-900 cursor-pointer">Hats</p>
                        <p className="text-gray-500 hover:text-gray-900 cursor-pointer">Belts</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-5">Brands</h3>

                        <p className="text-gray-500 mb-3">Full Nelson</p>
                        <p className="text-gray-500 mb-3">My Way</p>
                        <p className="text-gray-500 mb-3">Re-Arranged</p>
                        <p className="text-gray-500 mb-3">Counterfeit</p>
                        <p className="text-gray-500">Significant Other</p>
                      </div>

                      {/* Image Card */}
                      <div>
                        <div className="h-52 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-gray-400">
                            New Arrivals
                          </span>
                        </div>

                        <h3 className="font-medium mt-3">
                          New Arrivals
                        </h3>

                        <p className="text-gray-500 text-sm mt-1">
                          Shop now
                        </p>
                      </div>

                      {/* Image Card */}
                      <div>
                        <div className="h-52 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-gray-400">
                            Basic Tees
                          </span>
                        </div>

                        <h3 className="font-medium mt-3">
                          Basic Tees
                        </h3>

                        <p className="text-gray-500 text-sm mt-1">
                          Shop now
                        </p>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              {/* Men */}
              <div className="group h-full flex items-center">
                <button className="flex items-center gap-1 text-gray-700 hover:text-indigo-600">
                  Men
                  <KeyboardArrowDownIcon fontSize="small" />
                </button>

                <div className="absolute left-0 right-0 top-[116px] hidden group-hover:block bg-white border-b border-gray-200 shadow-lg z-50">

                  <div className="max-w-7xl mx-auto px-8 py-10">

                    <div className="grid grid-cols-5 gap-10">

                      <div>
                        <h3 className="font-semibold mb-5">Clothing</h3>

                        <p className="text-gray-500 mb-3">Tops</p>
                        <p className="text-gray-500 mb-3">Pants</p>
                        <p className="text-gray-500 mb-3">Sweaters</p>
                        <p className="text-gray-500 mb-3">T-Shirts</p>
                        <p className="text-gray-500 mb-3">Jackets</p>
                        <p className="text-gray-500 mb-3">Activewear</p>
                        <p className="text-gray-500">Browse All</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-5">Accessories</h3>

                        <p className="text-gray-500 mb-3">Watches</p>
                        <p className="text-gray-500 mb-3">Wallets</p>
                        <p className="text-gray-500 mb-3">Bags</p>
                        <p className="text-gray-500 mb-3">Sunglasses</p>
                        <p className="text-gray-500 mb-3">Hats</p>
                        <p className="text-gray-500">Belts</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-5">Brands</h3>

                        <p className="text-gray-500 mb-3">Re-Arranged</p>
                        <p className="text-gray-500 mb-3">Counterfeit</p>
                        <p className="text-gray-500 mb-3">Full Nelson</p>
                        <p className="text-gray-500">My Way</p>
                      </div>

                      <div>
                        <div className="h-52 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-gray-400">
                            New Arrivals
                          </span>
                        </div>

                        <h3 className="font-medium mt-3">
                          New Arrivals
                        </h3>

                        <p className="text-gray-500 text-sm">
                          Shop now
                        </p>
                      </div>

                      <div>
                        <div className="h-52 bg-gray-100 rounded-lg flex items-center justify-center">
                          <span className="text-gray-400">
                            Artwork Tees
                          </span>
                        </div>

                        <h3 className="font-medium mt-3">
                          Artwork Tees
                        </h3>

                        <p className="text-gray-500 text-sm">
                          Shop now
                        </p>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              {/* Other Links */}
              <a
                href="/"
                className="text-gray-700 hover:text-indigo-600"
              >
                Company
              </a>

              <a
                href="/"
                className="text-gray-700 hover:text-indigo-600"
              >
                Stores
              </a>

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-6">

              <button className="text-gray-700 hover:text-indigo-600">
                Sign in
              </button>

              <button className="text-gray-700 hover:text-indigo-600">
                Create account
              </button>

              <button className="text-gray-700">
                <SearchIcon />
              </button>

              <button className="flex items-center gap-1 text-gray-700">
                <ShoppingBagIcon />
                <span>0</span>
              </button>

            </div>

          </div>

        </div>

      </nav>

    </div>
  );
}

export default Navigation;