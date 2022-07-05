import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "../stripe/CheckoutForm";

const PUBLIC_KEY =
  "pk_test_51Jj6rRCY4xlYqVyaFXcxsdlYlVZSC0jK7IhqMLhaWf2GDTJ32VNtn1Z8dV5deUAMxJs0yKc6DoyMc3PSH1SHzMwi005IpyrS9f";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <div div className="stipeBody perent">
      <Elements stripe={stripeTestPromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Stripe;
