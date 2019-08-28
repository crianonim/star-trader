import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import storeInit from './storeInit'

import Main from './Main';

const store=storeInit();

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
