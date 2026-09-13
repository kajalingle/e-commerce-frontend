import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

function Navigation() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 shadow-md">
      
      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold">E-COMMERCE</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8">
        <a href="/">Home</a>
        <a href="/">Women</a>
        <a href="/">Men</a>
        <a href="/">Products</a>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        <SearchIcon />
        
        <div className="flex items-center gap-1">
          <ShoppingBagIcon />
          <span>0</span>
        </div>

        <button>Login</button>
      </div>

    </nav>
  );
}

export default Navigation;