export const setToken = (token) => {
  return {
    type: "SET_TOKEN",
    payload: token,
  };
};

export const setUserName = (userNmae) => {
  return {
    type: "SET_USER_NAME",
    payload: userNmae,
  };
};