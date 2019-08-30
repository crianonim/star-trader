import React, { useState } from 'react';
import {Provider} from 'react-redux';
import getStoreInstance from './reducers/storeInit'

import Main from './components/Main';
import ToolBar from './components/ToolBar';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Container, CssBaseline, Button } from '@material-ui/core';
const store=getStoreInstance();
function App() {
  const [themeMode,setThemeMode]=useState('dark');
  const theme=createMuiTheme({palette:{type:themeMode}})
  const toggleTheme=()=>setThemeMode(themeMode==='dark'?'light':'dark')
  return (
    <Provider store={store}>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
       <ToolBar  toggleTheme={toggleTheme}/>
       <Main></Main>
     </div>
     </ThemeProvider>
    </Provider>
  );
}

export default App;
