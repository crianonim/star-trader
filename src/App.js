import React from 'react';
import {Provider} from 'react-redux';
import getStoreInstance from './reducers/storeInit'

import Main from './components/Main';

const store=getStoreInstance();

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
