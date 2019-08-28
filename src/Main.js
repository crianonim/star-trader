import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import * as actions from './reducers/actionCreators';
const Main = (props)=>{
    const dispatch=useDispatch();
    const money=useSelector((state=>state.money))
    const inventory=useSelector( (state)=>state.inventory);
    const prices=useSelector( (state)=>state.prices);
    return (
        <>
        <p>{money}</p>
        <button onClick={()=>dispatch({type:"INTEREST",rate:1.06})}>Interest</button>
        <button onClick={actions.createActionRandomisePrices(dispatch,prices)}>Randomise Prices</button>

        <div className="list">
            <h4>Commodities</h4>
            <ul>

            {Object.entries(inventory).map(([item,amount])=>
                (<li key={item}>
                    {item} : ({amount}) cost: {prices[item]} 
                    <button onClick={()=>dispatch({type:"TRADE",payload:{item,amount:1,price:prices[item]}})}>Buy</button>
                    <button onClick={()=>dispatch({type:"TRADE",payload:{item,amount:-1,price:prices[item]}})}>Sell</button>

                </li>)
            )}
            </ul>
        </div>
        </>
    )
}

export default Main