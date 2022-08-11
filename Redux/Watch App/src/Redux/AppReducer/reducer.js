// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "../AppReducer/actionType"
const initialState = {
  watches: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,action) => {
  const{type,payload}=action
  console.log("reducer",action);
  switch (action.type) {
    case types.GET_WATCHES_DATA_REQUEST:
      
  return{...state,isLoading:true}
  case types.GET_WATCHES_DATA_SUCCESS:
      
    return{...state,isLoading:false,watches:[...payload]}
    case types.GET_WATCHES_DATA_FAILURE:
      
      return{...state,isLoading:false,isError:false}
    default:
      return state;
  }

};

export { reducer };
