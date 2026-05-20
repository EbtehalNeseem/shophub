import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export default function ProductCard({
  id,
  name,
  price,
  category,
  image,
  description,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-[#198754] text-white px-3 py-1 rounded-full text-sm shadow-lg">
          ${price}
        </div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm shadow-lg">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex gap-3">
          <Link
            to={`/products/${id}`}
            className="flex-1 px-4 py-2.5 bg-[#198754] text-white rounded-xl hover:bg-[#146c43] transition-all text-center"
          >
            View Details
          </Link>
          <button className="px-4 py-2.5 bg-[#f8f9fa] text-[#198754] rounded-xl hover:bg-[#198754] hover:text-white transition-all">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
