import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./counter/Counter";
import {createStore} from "redux"
    
function App() {
  return (
    <div>
          <Provider store={store}>
        <Counter/>
      </Provider>
          </div>
  );
}

export default App;
