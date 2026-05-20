import { useState } from "react";
import { useParams, Link } from "react-router";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import {
  ShoppingCart,
  Heart,
  Star,
  Truck,
  Shield,
  RotateCcw,
  Minus,
  Plus,
  Share2,
} from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl mb-4">Product not found</h2>
          <Link
            to="/products"
            className="px-6 py-3 bg-[#198754] text-white rounded-xl hover:bg-[#146c43] transition-all inline-block"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const images = [product.image, product.image, product.image];

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-gray-600">
          <Link to="/" className="hover:text-[#198754]">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-[#198754]">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="relative rounded-2xl overflow-hidden mb-4 aspect-square bg-[#f8f9fa]">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#198754] hover:text-white transition-all">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-xl overflow-hidden aspect-square border-2 transition-all ${
                    selectedImage === index
                      ? "border-[#198754]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="px-4 py-2 bg-[#f8f9fa] text-[#198754] rounded-full text-sm inline-block">
                {product.category}
              </span>
            </div>

            <h1 className="text-4xl mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-[#ffc107] text-[#ffc107]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} (128 reviews)
              </span>
            </div>

            <div className="mb-6">
              <span className="text-5xl text-[#198754]">${product.price}</span>
            </div>

            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              <p className="text-gray-600 mb-2">
                Availability:{" "}
                <span className="text-[#198754]">
                  {product.stock} in stock
                </span>
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-gray-700">Quantity:</span>
              <div className="flex items-center gap-3 bg-[#f8f9fa] rounded-xl p-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#198754] hover:text-white transition-all"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-[#198754] hover:text-white transition-all"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 px-8 py-4 bg-[#198754] text-white rounded-xl hover:bg-[#146c43] transition-all flex items-center justify-center gap-2 shadow-lg">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="px-6 py-4 bg-[#f8f9fa] text-gray-700 rounded-xl hover:bg-gray-200 transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#f8f9fa] rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-6 h-6 text-[#198754]" />
                </div>
                <p className="text-sm text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#f8f9fa] rounded-xl flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-[#198754]" />
                </div>
                <p className="text-sm text-gray-600">Secure Payment</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#f8f9fa] rounded-xl flex items-center justify-center mx-auto mb-2">
                  <RotateCcw className="w-6 h-6 text-[#198754]" />
                </div>
                <p className="text-sm text-gray-600">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
