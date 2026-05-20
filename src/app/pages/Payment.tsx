import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  CreditCard,
  Lock,
  CheckCircle,
  ShoppingBag,
  Package,
  Shield,
} from "lucide-react";

export default function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    saveCard: false,
  });

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.substring(0, 2) + "/" + v.substring(2, 4);
    }
    return v;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] via-white to-[#f8f9fa] flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="w-16 h-16 text-[#198754]" />
          </div>
          <h1 className="text-4xl mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your order. Your payment has been processed
            successfully.
          </p>

          <div className="bg-[#f8f9fa] rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Order Number</span>
              <span className="text-xl">#ORD-2024-{Math.floor(Math.random() * 10000)}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Amount Paid</span>
              <span className="text-2xl text-[#198754]">$689.97</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Estimated Delivery</span>
              <span>5-7 business days</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              to="/orders/track"
              className="flex-1 px-6 py-4 bg-[#198754] text-white rounded-xl hover:bg-[#146c43] transition-all flex items-center justify-center gap-2"
            >
              <Package className="w-5 h-5" />
              Track Order
            </Link>
            <Link
              to="/products"
              className="flex-1 px-6 py-4 bg-[#f8f9fa] text-gray-700 rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl mb-2">Payment</h1>
            <p className="text-gray-600">Complete your secure payment</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            {/* Payment Methods */}
            <div className="mb-8">
              <h2 className="text-2xl mb-4">Payment Method</h2>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`p-4 border-2 rounded-xl transition-all ${
                    paymentMethod === "card"
                      ? "border-[#198754] bg-[#198754]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <CreditCard className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm">Card</p>
                </button>

                <button
                  onClick={() => setPaymentMethod("applepay")}
                  className={`p-4 border-2 rounded-xl transition-all ${
                    paymentMethod === "applepay"
                      ? "border-[#198754] bg-[#198754]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="w-6 h-6 mx-auto mb-2 flex items-center justify-center">

                  </div>
                  <p className="text-sm">Apple Pay</p>
                </button>

                <button
                  onClick={() => setPaymentMethod("paypal")}
                  className={`p-4 border-2 rounded-xl transition-all ${
                    paymentMethod === "paypal"
                      ? "border-[#198754] bg-[#198754]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="w-6 h-6 mx-auto mb-2">💳</div>
                  <p className="text-sm">PayPal</p>
                </button>
              </div>
            </div>

            {/* Card Payment Form */}
            {paymentMethod === "card" && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Card Number */}
                <div>
                  <label className="block mb-2 text-gray-700">
                    Card Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          cardNumber: formatCardNumber(e.target.value),
                        })
                      }
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full pl-12 pr-4 py-4 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Cardholder Name */}
                <div>
                  <label className="block mb-2 text-gray-700">
                    Cardholder Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cardName}
                    onChange={(e) =>
                      setFormData({ ...formData, cardName: e.target.value })
                    }
                    placeholder="John Doe"
                    className="w-full px-4 py-4 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
                  />
                </div>

                {/* Expiry & CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 text-gray-700">
                      Expiry Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.expiryDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          expiryDate: formatExpiryDate(e.target.value),
                        })
                      }
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full px-4 py-4 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-700">
                      CVV <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cvv}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          cvv: e.target.value.replace(/\D/g, ""),
                        })
                      }
                      placeholder="123"
                      maxLength={4}
                      className="w-full px-4 py-4 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Save Card */}
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.saveCard}
                      onChange={(e) =>
                        setFormData({ ...formData, saveCard: e.target.checked })
                      }
                      className="w-4 h-4 text-[#198754] rounded focus:ring-[#198754] cursor-pointer"
                    />
                    <span className="text-gray-700">
                      Save this card for future purchases
                    </span>
                  </label>
                </div>

                {/* Security Badges */}
                <div className="bg-[#f8f9fa] rounded-xl p-6">
                  <div className="flex items-center justify-center gap-8 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Lock className="w-5 h-5 text-[#198754]" />
                      <span className="text-sm">256-bit SSL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#198754]" />
                      <span className="text-sm">PCI Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Lock className="w-5 h-5 text-[#198754]" />
                      <span className="text-sm">Secure</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#198754] to-[#146c43] text-white rounded-xl hover:shadow-2xl transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5" />
                      Pay $689.97
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Apple Pay */}
            {paymentMethod === "applepay" && (
              <div className="py-8 text-center">
                <button className="w-full px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-all text-lg">
                   Pay with Apple Pay
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  Quick and secure payment with Apple Pay
                </p>
              </div>
            )}

            {/* PayPal */}
            {paymentMethod === "paypal" && (
              <div className="py-8 text-center">
                <button className="w-full px-6 py-4 bg-[#0070ba] text-white rounded-xl hover:bg-[#005ea6] transition-all text-lg">
                  Continue with PayPal
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  You will be redirected to PayPal to complete your purchase
                </p>
              </div>
            )}

            {/* Back Button */}
            <Link
              to="/checkout"
              className="block text-center text-gray-600 hover:text-[#198754] transition-colors mt-6"
            >
              ← Back to Checkout
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex items-center justify-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Secure Payment</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm">Money-back Guarantee</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="text-sm">Buyer Protection</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
