import React from "react";
import ReactDOM from "react-dom";

import App from "../app";
import Store from "../state/store";

const store = new Store(window.initialState);

ReactDOM.render(<App store={store}></App>, document.getElementById("root"));
