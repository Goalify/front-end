import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"

import reducer from "./account_setup/reducer";

const store: Store<UserState, UserAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

export default store;