const initialState = {
  token: "",
  userName: "",
};

const tokenReducer = (state = initialState, { type, payload }) => {
  let obj = {};
  switch (type) {
    case "SET_TOKEN":
      obj = JSON.parse(JSON.stringify(state));
      obj.token = payload;
      return obj;

    case "SET_USER_NAME":
      obj = JSON.parse(JSON.stringify(state));
      obj.userName = payload;
      return obj;
    default:
      return state;
  }
};

export default tokenReducer;
