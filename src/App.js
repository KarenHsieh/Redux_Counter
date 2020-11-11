import React from "react";
import Counter from './Counter';
import "./styles.css";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

