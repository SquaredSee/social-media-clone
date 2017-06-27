import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// would normally sit in src/components/Carnitas.js
const TacoCounter = () => (
  <div style={{borderStyle: 'solid'}}>
    <div>This is the TacoCounter component</div>
    <p>
      Clicked: <span>{store.getState()}</span> times
      <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
    </p>
  </div>
)

// would normally sit in src/components/Tacos.js
const Tacos = ({ match }) => (
  <div style={{borderStyle: 'solid'}}>
    <div>This is the Taco component</div>
    <Route
      path={match.url + '/taco-counter'}
      component={TacoCounter}
    />
  </div>
)

// would normally sit in src/components/App.js
const App = () => (
    <div style={{borderStyle: 'solid'}}>
      <div>This is the App component</div>
      <Route path="/tacos" component={Tacos}/>
    </div>
)

// would normally sit in src/reducers/counter.js
const counter = (state = 0, action) => {
  console.log(`current state: ${state}`);
  console.log(`type: ${action.type}`);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}


// below is what normally sits in src/index.js

// would usually use combineReducers in src/reducers/index.js
const store = createStore(counter);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
