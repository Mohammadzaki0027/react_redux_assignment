import * as types from "./actionTypes";
import axios from "axios";
const Loginfunc = (payload) => (dispatch) => {
  dispatch({ type: types.Loginload });
 return axios
    .post(`https://reqres.in/api/login`, payload)
    .then((r) => {
 return dispatch({ type: types.LoginSu, payload: r.data.token });
    })
    .catch((e) => {
      dispatch({ type: types.LoginE, payload: e });
    });
};
export { Loginfunc};
