import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Shield, ArrowLeft, CheckCircle } from "lucide-react";

export default function VerifyOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);
    inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.join("").length === 6) {
      console.log("OTP verified:", otp.join(""));
      setIsVerified(true);
      setTimeout(() => {
        navigate("/reset-password");
      }, 2000);
    }
  };

  const handleResend = () => {
    setTimer(60);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] via-white to-[#f8f9fa] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {!isVerified ? (
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#198754] to-[#146c43] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl mb-3">Verify Your Email</h1>
              <p className="text-gray-600 mb-2">
                We've sent a 6-digit code to
              </p>
              <p className="text-[#198754]">your.email@example.com</p>
            </div>

            {/* OTP Input */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-4 text-center text-gray-700">
                  Enter Verification Code
                </label>
                <div
                  className="flex gap-3 justify-center"
                  onPaste={handlePaste}
                >
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-14 text-center text-2xl bg-[#f8f9fa] border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#198754] focus:border-[#198754] transition-all"
                    />
                  ))}
                </div>
              </div>

              {/* Timer and Resend */}
              <div className="text-center">
                {!canResend ? (
                  <p className="text-gray-600">
                    Resend code in{" "}
                    <span className="text-[#198754]">
                      {Math.floor(timer / 60)}:
                      {(timer % 60).toString().padStart(2, "0")}
                    </span>
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={handleResend}
                    className="text-[#198754] hover:text-[#146c43] transition-colors"
                  >
                    Resend Code
                  </button>
                )}
              </div>

              <button
                type="submit"
                disabled={otp.join("").length !== 6}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#198754] to-[#146c43] text-white rounded-xl hover:shadow-2xl transition-all text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Verify Code
              </button>

              {/* Security Badge */}
              <div className="bg-[#f8f9fa] rounded-xl p-4 flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#198754]" />
                <p className="text-sm text-gray-600">
                  Your data is protected with end-to-end encryption
                </p>
              </div>

              <Link
                to="/login"
                className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#198754] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Login
              </Link>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="w-12 h-12 text-[#198754]" />
            </div>
            <h2 className="text-3xl mb-4">Verified!</h2>
            <p className="text-gray-600 mb-4">
              Your email has been successfully verified.
            </p>
            <p className="text-sm text-gray-500">Redirecting to reset password...</p>
          </div>
        )}
      </div>
    </div>
  );
}
