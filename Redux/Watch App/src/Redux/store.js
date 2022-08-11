// NOTE: use this store variable to create a store.
import {legacy_createStore,applyMiddleware, combineReducers} from "redux"
import {reducer as Appreducer} from "./AppReducer/reducer"
import {reducer as Authreducer} from "./AuthReducer/reducer"
import thunk from "redux-thunk"
const rootreducer=combineReducers({Appreducer,Authreducer})
const store = legacy_createStore(rootreducer,applyMiddleware(thunk))


export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
