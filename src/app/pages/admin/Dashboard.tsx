import {
  Package,
  DollarSign,
  ShoppingCart,
  TrendingUp,
  Users,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { products, categories } from "../../data/products";

export default function Dashboard() {
  const totalProducts = products.length;
  const totalValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
  const averagePrice = products.reduce((sum, p) => sum + p.price, 0) / totalProducts;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);

  const categoryStats = categories.map((category) => ({
    ...category,
    products: products.filter((p) => p.category === category.name).length,
    value: products
      .filter((p) => p.category === category.name)
      .reduce((sum, p) => sum + p.price, 0),
  }));

  return (
    <div className="p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your overview</p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Products */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 bg-[#198754]/10 rounded-xl flex items-center justify-center">
              <Package className="w-7 h-7 text-[#198754]" />
            </div>
            <span className="flex items-center gap-1 text-[#198754] text-sm">
              <ArrowUp className="w-4 h-4" />
              12%
            </span>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">Total Products</h3>
          <p className="text-3xl">{totalProducts}</p>
        </div>

        {/* Total Value */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <DollarSign className="w-7 h-7 text-blue-500" />
            </div>
            <span className="flex items-center gap-1 text-[#198754] text-sm">
              <ArrowUp className="w-4 h-4" />
              8%
            </span>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">Inventory Value</h3>
          <p className="text-3xl">${totalValue.toLocaleString()}</p>
        </div>

        {/* Average Price */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7 text-purple-500" />
            </div>
            <span className="flex items-center gap-1 text-red-500 text-sm">
              <ArrowDown className="w-4 h-4" />
              3%
            </span>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">Average Price</h3>
          <p className="text-3xl">${averagePrice.toFixed(2)}</p>
        </div>

        {/* Total Stock */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center">
              <ShoppingCart className="w-7 h-7 text-orange-500" />
            </div>
            <span className="flex items-center gap-1 text-[#198754] text-sm">
              <ArrowUp className="w-4 h-4" />
              15%
            </span>
          </div>
          <h3 className="text-gray-600 text-sm mb-1">Total Stock</h3>
          <p className="text-3xl">{totalStock}</p>
        </div>
      </div>

      {/* Category Statistics */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl mb-6">Category Statistics</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4">Category</th>
                <th className="text-left py-4 px-4">Products</th>
                <th className="text-left py-4 px-4">Total Value</th>
                <th className="text-left py-4 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {categoryStats.map((category) => (
                <tr
                  key={category.name}
                  className="border-b border-gray-100 hover:bg-[#f8f9fa] transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <span>{category.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">{category.products}</td>
                  <td className="py-4 px-4">${category.value.toFixed(2)}</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 bg-[#198754]/10 text-[#198754] rounded-full text-sm">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Low Stock Alert */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl mb-6">Low Stock Alert</h2>
          <div className="space-y-4">
            {products
              .filter((p) => p.stock < 20)
              .slice(0, 5)
              .map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-4 bg-[#f8f9fa] rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p>{product.name}</p>
                      <p className="text-sm text-gray-600">{product.category}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">
                    {product.stock} left
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl mb-6">Top Products</h2>
          <div className="space-y-4">
            {products
              .sort((a, b) => b.rating - a.rating)
              .slice(0, 5)
              .map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-4 bg-[#f8f9fa] rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p>{product.name}</p>
                      <p className="text-sm text-gray-600">${product.price}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-[#198754]/10 text-[#198754] rounded-full text-sm">
                    ⭐ {product.rating}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
