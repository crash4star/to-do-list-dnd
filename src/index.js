import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import "./index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducer } from './store/reducer';

const store = createStore(
  reducer,
  composeWithDevTools()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();