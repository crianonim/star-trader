import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import ActionButton from './ActionButton';
import * as trade from './game-logic/trade'

const Main = (props)=>{
    const dispatch=useDispatch();
    const {turn,place}=useSelector((state)=>state);
    const money=useSelector((state=>state.money))
    const inventory=useSelector( (state)=>state.inventory);
    const planets=useSelector( (state)=>state.planets);
    const planet=planets.find(p=>p.name===place)
    return (
        <>
        <h1>Star Trader</h1>
        <h2>Turn {turn}, You are on planet {planet.name}</h2>
        <p>Money: {money}</p>
        <h3>You have in your inventory:</h3>
        <ul>
            {inventory.map(([name,amount])=>(<li key={name}>{name} - {amount}</li>))}
        </ul>
        <h3>You can travel to:</h3>
        <ul>
        {planet.routes.map( ([name,distance])=>(<li key={name}>{name} - {distance} <ActionButton dispatch={dispatch} action="TRAVEL" payload={{destination:name,distance}} >Travel</ActionButton></li>))}
        </ul>
        <h3>You can trade here:</h3>
        <ul>
            {inventory.map(([name,amount])=>(<li key={name}>{name} - you have: {amount}  price: {trade.calculatePrice(planet,name)} 
             <ActionButton dispatch={dispatch} action="TRADE" payload={{item:name,amount:2}}>Buy</ActionButton>
             <ActionButton dispatch={dispatch} action="TRADE" payload={{item:name,amount:-2}}>Sell</ActionButton> </li>
            ))}
        </ul>



        {/* <button onClick={()=>dispatch({type:"INTEREST",rate:1.06})}>Interest</button>
        {
         inventory.fuel>=10?   
            <button onClick={actions.createActionRandomisePrices(dispatch,prices)}>Travel to a new Planet! (10 fuel)</button>
            :null
        } */}

        <div className="list">
            {/* <h4>Commodities</h4>
            <ul>

            {Object.entries(inventory).map(([item,amount])=>
                (<li key={item}>
                    {item} : ({amount}) cost: {prices[item]} 
                    <button onClick={()=>dispatch({type:"TRADE",payload:{item,amount:1,price:prices[item]}})}>Buy</button>
                    <button onClick={()=>dispatch({type:"TRADE",payload:{item,amount:-1,price:prices[item]}})}>Sell</button>
                    <ActionButton dispatch={dispatch} action="TRADE" payload={{item,amount:2}}>+Buy</ActionButton>
                    <ActionButton dispatch={dispatch} action="TRADE" payload={{item,amount:-2}}>+Sell</ActionButton>

                </li>)
            )}
            </ul> */}
        </div>
        </>
    )
}

export default Main