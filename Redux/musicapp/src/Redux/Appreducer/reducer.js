import * as types from "./actionTypes";
const initstate = {
  musicRecord: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initstate, action) => {
  const { type, payload } = action;

  switch (action.type) {
    case types.MusicRequest:
      return { ...state, isLoading: true };
    case types.MusicSucess:
      return { ...state, isLoading: false, musicRecord: payload };
    case types.MusicFailure:
      return { ...state, isError: false }
    default:
      return state;
  }
};

export { reducer };
