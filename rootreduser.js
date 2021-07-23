import { combineReducers } from "redux";
//import { msgReducer } from "./Wish.Reduser";
import {counterkey, counterReducer} from "./Counter.reduser";
import { messageKey ,msgReducer} from "./message.reducer";
import {counter2reducer,counting} from "./Counter2.reduser";
let rootReducer = combineReducers({
  [messageKey]: msgReducer,
 [counterkey]: counterReducer,
 [counting]:counter2reducer,
});
export { rootReducer};

