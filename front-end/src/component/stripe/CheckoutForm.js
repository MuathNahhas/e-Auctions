import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import swal from "sweetalert";
import { useSelector } from "react-redux";

import "./Stripe.css";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [valueinput, setValueInput] = useState();
  const { amount } = useSelector((state) => {
    return {
      amount: state.stripeReducer,
    };
  });

  const handleSubmit = async (data) => {
    data.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("token created", paymentMethod.card.brand);
      try {
        const { id } = paymentMethod;
        await axios
          .post("http://localhost:5000/pay", {
            amount: amount, //value of amount take from setAmount in axios bids
            id: id,
          })
          .then((result) => {
            console.log(result.data.data_payment);
            axios.post("http://localhost:5000/payments", {
              payment_type: paymentMethod.card.brand,
            });
            setValueInput("");
            swal("Payment Success");
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log("error :", error);
        swal("Payment Failed ,please check the expire of card");
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div className="containerpayment">
      <div className="cardpayment">
        <div className="Image">
          <img
            className="imgs"
            src="https://cdn.neamb.com/-/media/images/seiumb/products/finance/seiu_platinum_edition_visa_card_500x350.png?h=350&w=500&hash=1A5C762A6274777AD3BB1A08BCC1A32F"
            alt=""
          />
        </div>
        <div style={{ height: "100px", width: "100%" }}></div>
        <div style={{ padding: "10%" }}>
          <form onSubmit={handleSubmit}>
            <CardElement />
            <input type="text" placeholder="Your Name" value={valueinput} />
            <input type="text" placeholder="Your Email" value={valueinput} />
            <h2 className="select">Only amount {amount}$</h2>
            <div className="mybtn">
              <button>submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
