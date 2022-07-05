require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51Jj6rRCY4xlYqVyarB02a3YTt4YKlVHIA66xcNLy7IRTg7ZRv2Lr45iRFOuEGyaV31O9H9IUQWM2JYMLwriXolfx00HiFti5NE"
);
const stripeMethod = async (req, res) => {
  const { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Auctions",
      payment_method: id,
      confirm: true,
    });
    res.status(201).json({
      message: "Payment Successful",
      success: true,
      data_payment: payment,
    });
  } catch (error) {
    res.status(400).json({
      message: "Payment Failed",
      success: false,
      error: error,
    });
  }
};
module.exports = stripeMethod;
