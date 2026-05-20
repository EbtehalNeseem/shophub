import { Link } from "react-router";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#212529] text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#198754] rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-6 h-6" />
            </div>
            <span className="text-2xl">ShopHub</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="hover:text-[#198754] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="hover:text-[#198754] transition-colors"
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="hover:text-[#198754] transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/about"
              className="hover:text-[#198754] transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#198754] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#198754] rounded-full text-xs flex items-center justify-center">
                3
              </span>
            </Link>
            <Link
              to="/login"
              className="px-6 py-2 bg-[#198754] rounded-full hover:bg-[#146c43] transition-all shadow-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
