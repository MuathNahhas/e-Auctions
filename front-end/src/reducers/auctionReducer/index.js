
const initialState = {
  auction: {},
  bid: {},
};

let auctionReducer = (state = initialState, { type, payload }) => {
  let obj = {};

  switch (type) {
    case "SET_AUCTION":
      obj = JSON.parse(JSON.stringify(state));
      obj.auction = payload;
      return obj;

 
    case "SET_BID":
      obj = JSON.parse(JSON.stringify(state));
      obj.bid = payload;
      return obj;
    default:
      return state;
  }
};

export default auctionReducer;
 