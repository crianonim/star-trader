import React from 'react';
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';

import Main from './Main';
const randInt=(max)=>(Math.random()*max)>>0;
const store=createStore(rootReducer,{
  prices:{
    fuel:randInt(10),
    food:randInt(10),
    electronics:randInt(10),
    minerals:randInt(10)
  },
  inventory:{
    money:1000,
    fuel:100,
    food:0,
    electronics:0,
    minerals:20
  }
},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
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
