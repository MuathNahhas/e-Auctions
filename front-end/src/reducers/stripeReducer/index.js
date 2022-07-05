const initialState = {
  amount: 0,
};

const stripeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_AMOUNT":
      return payload;

    default:
      return state;
  }
};

export default stripeReducer;
