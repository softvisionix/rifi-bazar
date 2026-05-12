import React, { useState } from 'react';
import {
  ShoppingBag,
  Truck,
  Shield,
  CreditCard,
  Minus,
  Plus,
  Package,
  User,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Star,
} from 'lucide-react';

const packages = [
  { label: '১২ কেজি প্যাকেজ', value: 12, popular: false, saving: '৫% ছাড়' },
  { label: '২০ কেজি প্যাকেজ', value: 20, popular: true, saving: '১০% ছাড়' },
  { label: '৪০ কেজি প্যাকেজ', value: 40, popular: false, saving: '১৫% ছাড়' },
];

const Checkout = ({ selectedProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    city: '',
    notes: '',
  });

  const [selectedPackage, setSelectedPackage] = useState(20);
  const [qty, setQty] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const pricePerKg = selectedProduct?.price || 250;
  const subtotal = selectedPackage * qty * pricePerKg;
  const discount =
    selectedPackage === 20
      ? subtotal * 0.1
      : selectedPackage === 40
        ? subtotal * 0.15
        : selectedPackage === 12
          ? subtotal * 0.05
          : 0;
  const shipping = subtotal > 1000 ? 0 : 60;
  const total = subtotal - discount + shipping;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);

    const orderData = {
      ...formData,
      productName: selectedProduct?.name,
      price: pricePerKg,
      image: selectedProduct?.image,
      qty: qty,
      packageKg: selectedPackage,
      subtotal: subtotal,
      discount: discount,
      shipping: shipping,
      total: total,
      status: 'pending',
      orderDate: new Date().toISOString(),
    };

    console.log('Order Data:', orderData);

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderSuccess(true);
      setTimeout(() => setOrderSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="pb-12 md:pb-16 ">
      <div className="">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 rounded-full mb-4">
            <ShoppingBag className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-semibold text-orange-700 tracking-wide">
              চেকআউট
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            আপনার অর্ডার কনফার্ম করুন
          </h1>
          <p className="text-gray-500 text-sm md:text-base mt-2">
            দয়া করে আপনার তথ্য সঠিকভাবে পূরণ করুন
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="">
          {/* Single Card Container */}
          <div className="bg-white rounded-xs shadow-xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="p-5 md:p-6 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-amber-50">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-orange-500" />
                অর্ডার সম্পন্ন করুন
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                আপনার অর্ডার তথ্য যাচাই করে কনফার্ম করুন
              </p>
            </div>

            {/* Two Column Layout Inside Card */}
            <div className="grid lg:grid-cols-2 gap-0">
              {/* LEFT SIDE - ORDER SUMMARY */}
              <div className="border-r border-gray-100 p-5 md:p-6 space-y-6">
                {/* Product Image & Name */}
                <div className="flex gap-4 pb-4 border-b border-gray-100">
                  <img
                    src={selectedProduct?.image}
                    alt={selectedProduct?.name}
                    className="w-20 h-20 object-cover rounded-xl shadow-md"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">
                      {selectedProduct?.name}
                    </h3>
                    <p className="text-orange-600 font-semibold">
                      প্রতি কেজি: ৳{pricePerKg}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        (১,২০০+ রিভিউ)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Package Selection */}
                <div>
                  <label className="block font-semibold text-gray-700 mb-3 flex items-center gap-2">
                    <Package className="w-4 h-4 text-orange-500" />
                    প্যাকেজ সিলেক্ট করুন
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {packages.map(pkg => (
                      <button
                        key={pkg.value}
                        onClick={() => setSelectedPackage(pkg.value)}
                        className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                          selectedPackage === pkg.value
                            ? 'border-orange-500 bg-orange-50 shadow-md'
                            : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50/50'
                        }`}
                      >
                        {pkg.popular && (
                          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            জনপ্রিয়
                          </span>
                        )}
                        <p className="font-bold text-gray-800 text-sm">
                          {pkg.label}
                        </p>
                        <p className="text-xs text-green-600 mt-1">
                          {pkg.saving}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Control */}
                <div>
                  <label className="block font-semibold text-gray-700 mb-3">
                    পরিমাণ (প্যাকেজ)
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQty(prev => Math.max(1, prev - 1))}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all duration-300"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-xl font-bold text-gray-800 min-w-[40px] text-center">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty(prev => prev + 1)}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-all duration-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <span className="text-sm text-gray-500">প্যাকেজ</span>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      সাবটোটাল ({selectedPackage}kg × {qty} প্যাকেজ)
                    </span>
                    <span className="font-semibold">
                      ৳{subtotal.toLocaleString()}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600">ছাড়</span>
                      <span className="text-green-600 font-semibold">
                        - ৳{Math.round(discount).toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">ডেলিভারি চার্জ</span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-semibold">ফ্রি</span>
                    ) : (
                      <span className="font-semibold">৳{shipping}</span>
                    )}
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-800">মোট টাকা</span>
                      <span className="text-2xl font-bold text-orange-600">
                        ৳{Math.round(total).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Delivery Info Note */}
                <div className="bg-blue-50 rounded-lg p-3 flex items-start gap-2">
                  <Truck className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-blue-700">
                    অর্ডার কনফার্মেশনের ২৪ ঘন্টার মধ্যে ডেলিভারি দেওয়া হবে
                  </p>
                </div>
              </div>

              {/* RIGHT SIDE - CHECKOUT FORM */}
              <div className="p-5 md:p-6 bg-white">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-orange-500" />
                    চেকআউট ফর্ম
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    আপনার তথ্য সঠিকভাবে পূরণ করুন
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      name="name"
                      placeholder="আপনার নাম"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      name="mobile"
                      placeholder="মোবাইল নম্বর"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      name="email"
                      type="email"
                      placeholder="ইমেইল (ঐচ্ছিক)"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-4 w-4 h-4 text-gray-400" />
                    <textarea
                      name="address"
                      placeholder="ঠিকানা"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
                      required
                    />
                  </div>

                  {/* Success Message */}
                  {orderSuccess && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-2 animate-fade-in">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <p className="text-sm text-green-700">
                        অর্ডার সফল হয়েছে!
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        প্রক্রিয়াকরণ...
                      </>
                    ) : (
                      <>
                        অর্ডার কনফার্ম করুন
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Trust Badges */}
                  <div className="pt-2 flex justify-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Shield className="w-3 h-3 text-green-600" />
                      নিরাপদ পেমেন্ট
                    </span>
                    <span className="flex items-center gap-1">
                      <Truck className="w-3 h-3 text-blue-600" />
                      ফ্রি ডেলিভারি
                    </span>
                    <span className="flex items-center gap-1">
                      <Package className="w-3 h-3 text-orange-600" />
                      প্রিমিয়াম কোয়ালিটি
                    </span>
                  </div>
                </form>
              </div>
            </div>

            {/* Footer Note */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500">
                অর্ডার করার পর আমাদের টিম আপনাকে কল করে কনফার্ম করবে। ধন্যবাদ!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
