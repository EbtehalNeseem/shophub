import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { products } from "../../data/products";
import { ArrowLeft, Upload, X } from "lucide-react";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  const [imagePreview, setImagePreview] = useState<string | null>(
    product?.image || null
  );
  const [formData, setFormData] = useState({
    name: product?.name || "",
    category: product?.category || "",
    price: product?.price.toString() || "",
    stock: product?.stock.toString() || "",
    description: product?.description || "",
  });

  if (!product) {
    return (
      <div className="p-8">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Product not found</h2>
          <Link
            to="/admin/products"
            className="px-6 py-3 bg-[#198754] text-white rounded-xl hover:bg-[#146c43] transition-all inline-block"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product updated:", formData);
    navigate("/admin/products");
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/admin/products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#198754] mb-4 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </Link>
        <h1 className="text-4xl mb-2">Edit Product</h1>
        <p className="text-gray-600">Update product information</p>
      </div>

      {/* Form */}
      <div className="max-w-4xl">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-gray-700">
                Product Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter product name"
                className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 text-gray-700">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent cursor-pointer transition-all"
              >
                <option value="">Select category</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Furniture">Furniture</option>
                <option value="Home Decor">Home Decor</option>
                <option value="Sports">Sports</option>
                <option value="Books">Books</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block mb-2 text-gray-700">
                Price ($) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                step="0.01"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                placeholder="0.00"
                className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
              />
            </div>

            {/* Stock */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-gray-700">
                Stock Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
                placeholder="0"
                className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-gray-700">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Enter product description"
                className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent resize-none transition-all"
              />
            </div>

            {/* Image Upload */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-gray-700">Product Image</label>

              {imagePreview ? (
                <div className="relative w-full aspect-video bg-[#f8f9fa] rounded-xl overflow-hidden border-2 border-gray-200">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setImagePreview(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all shadow-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <label className="w-full aspect-video bg-[#f8f9fa] border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[#198754] hover:bg-[#198754]/5 transition-all">
                  <Upload className="w-12 h-12 text-gray-400 mb-3" />
                  <p className="text-gray-600 mb-1">
                    Click to upload new image
                  </p>
                  <p className="text-gray-400 text-sm">
                    PNG, JPG, or WEBP (max. 5MB)
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
            <button
              type="submit"
              className="flex-1 px-6 py-4 bg-[#198754] text-white rounded-xl hover:bg-[#146c43] transition-all shadow-lg"
            >
              Update Product
            </button>
            <Link
              to="/admin/products"
              className="flex-1 px-6 py-4 bg-[#f8f9fa] text-gray-700 rounded-xl hover:bg-gray-200 transition-all text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
