import React from 'react';
import {render,unmountComponentAtNode} from 'react-dom';
import App from '../App';
import { act } from "react-dom/test-utils";
import ToolBar from "../components/ToolBar";
import {Provider} from 'react-redux';
import getStoreInstance from '../reducers/storeInit'
const store=getStoreInstance();


let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});



it('renders without crashing', () => {
  render(<App />, container);
  unmountComponentAtNode(container);
});

it('theme switcher reacts to clicks',()=>{
  const toggleTheme=jest.fn();
  const handleDrawerOpen=jest.fn();
  act(()=>{
    render(<Provider store={store}><ToolBar toggleTheme={toggleTheme} handleDrawerOpen={handleDrawerOpen}/></Provider>,container)
  })
  const button=container.querySelector(".themeButton")
  act(()=>{
    button.dispatchEvent(new MouseEvent("click",{bubbles:true}))
    button.dispatchEvent(new MouseEvent("click",{bubbles:true}))
    button.dispatchEvent(new MouseEvent("click",{bubbles:true}))

  })
  expect(toggleTheme).toHaveBeenCalledTimes(3)
})