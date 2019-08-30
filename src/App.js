import React, { useState } from 'react';
import {Provider} from 'react-redux';
import getStoreInstance from './reducers/storeInit'

import Main from './components/Main';
import ToolBar from './components/ToolBar';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, Container, CssBaseline, Button } from '@material-ui/core';

import Drawer from './components/Drawer';
const store=getStoreInstance();
function App() {
  const [themeMode,setThemeMode]=useState('dark');
  const [drawerOpen,setDrawerOpen]=useState(false);
  const theme=createMuiTheme({palette:{type:themeMode}})
  const toggleTheme=()=>setThemeMode(themeMode==='dark'?'light':'dark')
  const handleDrawerOpen= ()=>setDrawerOpen(true);
  const handleDrawerClose=()=>setDrawerOpen(false);
  return (
    <Provider store={store}>
     <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
       <ToolBar  handleDrawerOpen={handleDrawerOpen} toggleTheme={toggleTheme}/>
       <Drawer handleDrawerClose={handleDrawerClose} open={drawerOpen}/>
       <Main></Main>
     </div>
     </ThemeProvider>
    </Provider>
  );
}

export default App;
