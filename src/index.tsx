import * as ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Router } from "react-router-dom";

import {history} from "./core/common";
import { store } from "./redux/store";
import App from "./app";

import "./index.css";

ReactDOM.render(
  <Router history={history}>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </Router>,
  document.getElementById("root")
);
