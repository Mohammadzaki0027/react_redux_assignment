import * as types from "./actionTypes";
const Auth = {
  isloadding: false,
  isError: false,
  isAuth: true,
  token: null,
};

const reducer = (state = Auth, action) => {
  const { type, payload } = action;

  switch (action.type) {
    case types.Loginload:
      return { ...state, isloadding: true };
    case types.LoginSu:
      return { ...state, isloadding: false, isAuth: true, token: payload };
    case types.LoginE:
      return { ...state, isloadding: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
