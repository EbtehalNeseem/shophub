import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Page Title */}
      <div className="bg-white py-12 shadow-sm">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl text-center mb-4">Our Products</h1>
          <p className="text-center text-gray-600 text-lg">
            Discover our complete collection
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#f8f9fa] border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-[#198754]" />
                <h2 className="text-2xl">Filters</h2>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="mb-4">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-[#f8f9fa] transition-colors">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === "All"}
                      onChange={() => setSelectedCategory("All")}
                      className="w-4 h-4 text-[#198754] focus:ring-[#198754]"
                    />
                    <span>All Products</span>
                  </label>
                  {categories.map((category) => (
                    <label
                      key={category.name}
                      className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-[#f8f9fa] transition-colors"
                    >
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category.name}
                        onChange={() => setSelectedCategory(category.name)}
                        className="w-4 h-4 text-[#198754] focus:ring-[#198754]"
                      />
                      <span className="text-xl mr-1">{category.icon}</span>
                      <span>{category.name}</span>
                      <span className="ml-auto text-sm text-gray-500">
                        ({category.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([0, parseInt(e.target.value)])
                    }
                    className="w-full accent-[#198754]"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h3 className="mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSortBy("featured");
                  setPriceRange([0, 2000]);
                }}
                className="w-full mt-6 px-4 py-3 bg-[#f8f9fa] text-gray-700 rounded-xl hover:bg-gray-200 transition-all"
              >
                Reset Filters
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} products
              </p>

              {/* Mobile Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="lg:hidden px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754]"
              >
                <option value="featured">Featured</option>
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-12">
                  <button className="px-4 py-2 bg-white rounded-xl border border-gray-200 hover:bg-[#f8f9fa] transition-all">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-[#198754] text-white rounded-xl shadow-lg">
                    1
                  </button>
                  <button className="px-4 py-2 bg-white rounded-xl border border-gray-200 hover:bg-[#f8f9fa] transition-all">
                    2
                  </button>
                  <button className="px-4 py-2 bg-white rounded-xl border border-gray-200 hover:bg-[#f8f9fa] transition-all">
                    3
                  </button>
                  <button className="px-4 py-2 bg-white rounded-xl border border-gray-200 hover:bg-[#f8f9fa] transition-all">
                    Next
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg">No products found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
