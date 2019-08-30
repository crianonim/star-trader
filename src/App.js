import React from 'react';
import {Provider} from 'react-redux';
import getStoreInstance from './reducers/storeInit'

import Main from './components/Main';
import ToolBar from './components/ToolBar';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Container, CssBaseline } from '@material-ui/core';
const store=getStoreInstance();
const theme=createMuiTheme({palette:{type:"dark"}})
function App() {
  return (
    <Provider store={store}>
     <ThemeProvider theme={theme}>
      <CssBaseline />
     <div className="App">
      <ToolBar/>
      <Main></Main>
     </div>
</ThemeProvider>
    </Provider>
  );
}

export default App;
