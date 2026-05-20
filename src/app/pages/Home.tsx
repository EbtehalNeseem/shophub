import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import {
  ShoppingBag,
  Truck,
  Shield,
  CreditCard,
  Star,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.slice(4, 8);

  return (
    <div className="bg-[#f8f9fa]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#198754] to-[#146c43] text-white py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl mb-6">
                Discover Premium Products
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Shop the latest trends with unbeatable prices and exceptional
                quality. Your satisfaction is our priority.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/products"
                  className="px-8 py-4 bg-white text-[#198754] rounded-2xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
                >
                  Shop Now
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/categories"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl hover:bg-white/20 transition-all"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
              <img
                src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxlY29tbWVyY2UlMjBwcm9kdWN0cyUyMHNob3BwaW5nfGVufDF8fHx8MTc3ODc2NjAzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Shopping"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Shop By Category</h2>
            <p className="text-gray-600 text-lg">
              Explore our wide range of product categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name}`}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all"
              >
                <div className="text-5xl mb-3">{category.icon}</div>
                <h3 className="mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.count} items</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl mb-2">Featured Products</h2>
              <p className="text-gray-600 text-lg">
                Handpicked items just for you
              </p>
            </div>
            <Link
              to="/products"
              className="px-6 py-3 bg-[#198754] text-white rounded-xl hover:bg-[#146c43] transition-all inline-flex items-center gap-2"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <TrendingUp className="w-8 h-8 text-[#198754]" />
            <h2 className="text-4xl">Best Sellers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Why Choose ShopHub</h2>
            <p className="text-gray-600 text-lg">
              We're committed to providing the best shopping experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#f8f9fa] rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-[#198754] text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-3">Free Shipping</h3>
              <p className="text-gray-600">
                Free delivery on orders over $100
              </p>
            </div>

            <div className="bg-[#f8f9fa] rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-[#198754] text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-3">Secure Payment</h3>
              <p className="text-gray-600">
                100% secure payment processing
              </p>
            </div>

            <div className="bg-[#f8f9fa] rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-[#198754] text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-3">Easy Returns</h3>
              <p className="text-gray-600">
                30-day money back guarantee
              </p>
            </div>

            <div className="bg-[#f8f9fa] rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-[#198754] text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-3">Quality Products</h3>
              <p className="text-gray-600">
                Premium quality guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">
              Read reviews from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 fill-[#ffc107] text-[#ffc107]"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "Amazing products and excellent customer service! I highly
                  recommend ShopHub for all your shopping needs."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#198754] text-white rounded-full flex items-center justify-center">
                    <span className="text-lg">JD</span>
                  </div>
                  <div>
                    <h4>John Doe</h4>
                    <p className="text-gray-600 text-sm">Verified Buyer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-[#198754] to-[#146c43] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-8 text-white/90">
              Get exclusive deals and updates delivered to your inbox
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="px-8 py-4 bg-white text-[#198754] rounded-xl hover:shadow-2xl transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
