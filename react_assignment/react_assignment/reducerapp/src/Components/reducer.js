export function countreducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INC": {
      let newstate = {
        ...state,
        amount: state.amount + Number(action.payload),
      };
      return newstate;
    }
    case "DNC": {
      let newstate = {
        ...state,
        amount: state.amount - action.payload,
      };
      return newstate;
    }
    default:
      return state;
  }
}

export const incrementAction = { type: "INC", payload: 1000 };
export const decrementAction = { type: "DNC", payload: 1000 };

export const incrementAction2 = { type: "INC", payload: 2000 };
export const decrementAction2= { type: "DNC", payload: 2000 };
