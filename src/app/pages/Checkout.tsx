import { useState } from "react";
import { Link } from "react-router";
import { ChevronRight, Package, Truck, CreditCard, CheckCircle } from "lucide-react";
import { products } from "../data/products";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    deliveryMethod: "standard",
  });

  const cartItems = [
    { product: products[0], quantity: 2 },
    { product: products[1], quantity: 1 },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = formData.deliveryMethod === "express" ? 25 : 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const steps = [
    { number: 1, title: "Cart", icon: Package },
    { number: 2, title: "Shipping", icon: Truck },
    { number: 3, title: "Payment", icon: CreditCard },
    { number: 4, title: "Confirmation", icon: CheckCircle },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12">
      <div className="container mx-auto px-6">
        {/* Progress Indicator */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between">
            {steps.map((s, index) => {
              const Icon = s.icon;
              const isActive = step >= s.number;
              const isCompleted = step > s.number;

              return (
                <div key={s.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${
                        isCompleted
                          ? "bg-[#198754] text-white"
                          : isActive
                          ? "bg-[#198754] text-white"
                          : "bg-white text-gray-400 border-2 border-gray-200"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`mt-2 text-sm ${
                        isActive ? "text-[#198754]" : "text-gray-400"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 flex-1 mx-2 transition-all ${
                        step > s.number ? "bg-[#198754]" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {step === 2 && (
                <form onSubmit={handleSubmit}>
                  <h2 className="text-3xl mb-8">Shipping Information</h2>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Full Name */}
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Address */}
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-gray-700">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        placeholder="123 Main Street, Apt 4B"
                        className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="block mb-2 text-gray-700">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        placeholder="New York"
                        className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* ZIP Code */}
                    <div>
                      <label className="block mb-2 text-gray-700">
                        ZIP Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.zipCode}
                        onChange={(e) =>
                          setFormData({ ...formData, zipCode: e.target.value })
                        }
                        placeholder="10001"
                        className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Country */}
                    <div className="md:col-span-2">
                      <label className="block mb-2 text-gray-700">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent cursor-pointer transition-all"
                      >
                        <option value="">Select country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="UK">United Kingdom</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                  </div>

                  {/* Delivery Method */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4">Delivery Method</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <label
                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          formData.deliveryMethod === "standard"
                            ? "border-[#198754] bg-[#198754]/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="delivery"
                          value="standard"
                          checked={formData.deliveryMethod === "standard"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              deliveryMethod: e.target.value,
                            })
                          }
                          className="hidden"
                        />
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="mb-1">Standard Shipping</p>
                            <p className="text-sm text-gray-600">5-7 business days</p>
                          </div>
                          <span className="text-[#198754]">$15.00</span>
                        </div>
                      </label>

                      <label
                        className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          formData.deliveryMethod === "express"
                            ? "border-[#198754] bg-[#198754]/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="delivery"
                          value="express"
                          checked={formData.deliveryMethod === "express"}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              deliveryMethod: e.target.value,
                            })
                          }
                          className="hidden"
                        />
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="mb-1">Express Shipping</p>
                            <p className="text-sm text-gray-600">2-3 business days</p>
                          </div>
                          <span className="text-[#198754]">$25.00</span>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Link
                      to="/cart"
                      className="flex-1 px-6 py-3 bg-[#f8f9fa] text-gray-700 rounded-xl hover:bg-gray-200 transition-all text-center"
                    >
                      Back to Cart
                    </Link>
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-[#198754] text-white rounded-xl hover:bg-[#146c43] transition-all flex items-center justify-center gap-2"
                    >
                      Continue to Payment
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-3xl mb-8">Payment</h2>
                  <p className="text-gray-600 mb-6">
                    Complete your payment to place the order
                  </p>
                  <Link
                    to="/payment"
                    className="block w-full px-6 py-4 bg-[#198754] text-white rounded-xl hover:bg-[#146c43] transition-all text-center"
                  >
                    Proceed to Payment
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl mb-6">Order Summary</h3>

              {/* Products */}
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-16 h-16 bg-[#f8f9fa] rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm mb-1">{item.product.name}</p>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-sm text-[#198754]">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <span className="text-xl">Total</span>
                <span className="text-3xl text-[#198754]">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
