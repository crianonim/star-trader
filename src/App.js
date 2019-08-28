import React from 'react';
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';

import Main from './Main';

const store=createStore(rootReducer,{money:1000});
console.log(store.getState())
store.dispatch({type:"INTEREST",rate:1.20})
console.log(store.getState())

function App() {
  return (

    <Provider store={store}>
     <div className="App">
       <Main></Main>
     </div>
    </Provider>
  );
}

export default App;
