export const setAuction = (auction) => {
  return {
    type: "SET_AUCTION",
    payload: auction,
  };
};

export const setBid = (bid) => {
  return {
    type: "SET_BID",
    payload: bid,
  };
};