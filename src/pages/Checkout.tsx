import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, CreditCard, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const addressSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),
  addressLine1: z.string().trim().min(5, "Address is too short").max(200),
  addressLine2: z.string().trim().max(200).optional(),
  city: z.string().trim().min(2, "City is required").max(100),
  state: z.string().trim().min(2, "State is required").max(100),
  pincode: z.string().trim().regex(/^\d{6}$/, "Enter a valid 6-digit pincode"),
});

type AddressForm = z.infer<typeof addressSchema>;

const UPI_ID = "tinytreasures@upi";

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const { toast } = useToast();
  
  const [step, setStep] = useState<"address" | "payment" | "success">("address");
  const [errors, setErrors] = useState<Partial<Record<keyof AddressForm, string>>>({});
  const [address, setAddress] = useState<AddressForm>({
    fullName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof AddressForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = addressSchema.safeParse(address);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof AddressForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof AddressForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    
    setStep("payment");
  };

  const handlePaymentConfirm = () => {
    setStep("success");
    clearCart();
    toast({
      title: "Order Placed!",
      description: "We'll confirm your order once payment is received.",
    });
  };

  if (items.length === 0 && step !== "success") {
    return (
      <div className="min-h-screen bg-wine-dark flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-cream mb-4">Your cart is empty</h2>
          <Button variant="gold" onClick={() => navigate("/")}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-wine-dark py-20">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Back Button */}
        {step !== "success" && (
          <button
            onClick={() => step === "address" ? navigate("/") : setStep("address")}
            className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>{step === "address" ? "Back to Shop" : "Back to Address"}</span>
          </button>
        )}

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className={`flex items-center gap-2 ${step === "address" ? "text-gold" : "text-cream/50"}`}>
            <MapPin size={20} />
            <span className="text-sm">Address</span>
          </div>
          <div className="w-12 h-px bg-gold/30" />
          <div className={`flex items-center gap-2 ${step === "payment" ? "text-gold" : "text-cream/50"}`}>
            <CreditCard size={20} />
            <span className="text-sm">Payment</span>
          </div>
          <div className="w-12 h-px bg-gold/30" />
          <div className={`flex items-center gap-2 ${step === "success" ? "text-gold" : "text-cream/50"}`}>
            <CheckCircle size={20} />
            <span className="text-sm">Done</span>
          </div>
        </div>

        {/* Address Form */}
        {step === "address" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="font-serif text-2xl text-cream mb-6">Delivery Address</h2>
            
            <form onSubmit={handleAddressSubmit} className="space-y-4">
              <div>
                <Input
                  name="fullName"
                  placeholder="Full Name"
                  value={address.fullName}
                  onChange={handleInputChange}
                  className="bg-wine/50 border-gold/20 text-cream placeholder:text-cream/40"
                />
                {errors.fullName && <p className="text-destructive text-sm mt-1">{errors.fullName}</p>}
              </div>
              
              <div>
                <Input
                  name="phone"
                  placeholder="Phone Number (10 digits)"
                  value={address.phone}
                  onChange={handleInputChange}
                  className="bg-wine/50 border-gold/20 text-cream placeholder:text-cream/40"
                />
                {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <Input
                  name="addressLine1"
                  placeholder="Address Line 1"
                  value={address.addressLine1}
                  onChange={handleInputChange}
                  className="bg-wine/50 border-gold/20 text-cream placeholder:text-cream/40"
                />
                {errors.addressLine1 && <p className="text-destructive text-sm mt-1">{errors.addressLine1}</p>}
              </div>
              
              <div>
                <Input
                  name="addressLine2"
                  placeholder="Address Line 2 (Optional)"
                  value={address.addressLine2}
                  onChange={handleInputChange}
                  className="bg-wine/50 border-gold/20 text-cream placeholder:text-cream/40"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    name="city"
                    placeholder="City"
                    value={address.city}
                    onChange={handleInputChange}
                    className="bg-wine/50 border-gold/20 text-cream placeholder:text-cream/40"
                  />
                  {errors.city && <p className="text-destructive text-sm mt-1">{errors.city}</p>}
                </div>
                <div>
                  <Input
                    name="state"
                    placeholder="State"
                    value={address.state}
                    onChange={handleInputChange}
                    className="bg-wine/50 border-gold/20 text-cream placeholder:text-cream/40"
                  />
                  {errors.state && <p className="text-destructive text-sm mt-1">{errors.state}</p>}
                </div>
              </div>
              
              <div>
                <Input
                  name="pincode"
                  placeholder="Pincode (6 digits)"
                  value={address.pincode}
                  onChange={handleInputChange}
                  className="bg-wine/50 border-gold/20 text-cream placeholder:text-cream/40"
                />
                {errors.pincode && <p className="text-destructive text-sm mt-1">{errors.pincode}</p>}
              </div>

              {/* Order Summary */}
              <div className="bg-wine/50 border border-gold/20 rounded-sm p-4 mt-6">
                <h3 className="font-serif text-lg text-cream mb-3">Order Summary</h3>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-cream/70">{item.name} × {item.quantity}</span>
                      <span className="text-cream">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                  <div className="border-t border-gold/20 pt-2 mt-2 flex justify-between">
                    <span className="text-cream font-semibold">Total</span>
                    <span className="text-gold font-serif text-lg">₹{totalPrice}</span>
                  </div>
                </div>
              </div>

              <Button variant="gold" size="lg" className="w-full mt-6">
                Continue to Payment
              </Button>
            </form>
          </motion.div>
        )}

        {/* Payment Step */}
        {step === "payment" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="font-serif text-2xl text-cream mb-6">Complete Payment</h2>
            
            <div className="bg-wine/50 border border-gold/20 rounded-sm p-6 mb-6">
              <p className="text-cream/70 mb-4">
                Please send <span className="text-gold font-serif text-xl">₹{totalPrice}</span> to the following UPI ID:
              </p>
              
              <div className="bg-wine-dark/80 border border-gold/30 rounded-sm p-4 mb-4">
                <p className="text-gold font-mono text-xl tracking-wider select-all">
                  {UPI_ID}
                </p>
              </div>
              
              <p className="text-cream/50 text-sm">
                Tap to copy • After payment, click confirm below
              </p>
            </div>

            <div className="bg-wine/30 border border-gold/10 rounded-sm p-4 mb-6 text-left">
              <h4 className="text-cream font-semibold mb-2">Delivery Address:</h4>
              <p className="text-cream/70 text-sm">
                {address.fullName}<br />
                {address.phone}<br />
                {address.addressLine1}<br />
                {address.addressLine2 && <>{address.addressLine2}<br /></>}
                {address.city}, {address.state} - {address.pincode}
              </p>
            </div>

            <Button variant="gold" size="lg" className="w-full" onClick={handlePaymentConfirm}>
              I've Made the Payment
            </Button>
            
            <p className="text-cream/40 text-xs mt-4">
              Your order will be confirmed once we verify the payment
            </p>
          </motion.div>
        )}

        {/* Success Step */}
        {step === "success" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-gold" size={40} />
            </div>
            
            <h2 className="font-serif text-3xl text-cream mb-4">Thank You!</h2>
            <p className="text-cream/70 mb-8 max-w-md mx-auto">
              Your order has been placed successfully. We'll contact you shortly to confirm your order and delivery details.
            </p>
            
            <Button variant="gold" onClick={() => navigate("/")}>
              Continue Shopping
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
