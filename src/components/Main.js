import React from 'react'
import {useSelector} from 'react-redux';
import ActionButton from './ActionButton';
import * as trade from '../game-logic/trade';
import InventoryList from './InventoryList';
const Main = (props)=>{
    const state=useSelector((state)=>state)
    const {turn,place}=state;
    const money=useSelector((state=>state.money))
    const inventory=useSelector( (state)=>state.inventory);
    const planets=useSelector( (state)=>state.planets);
    const planet=planets.find(p=>p.name===place)
    return (
        <>
        <InventoryList/>
        <h1>Star Trader</h1>
        <h2>Turn {turn}, You are on planet {planet.name}</h2>
        <p>Money: {money}</p>
        <h3>You have in your inventory:</h3>
        <ul>
            {inventory.map(([name,amount])=>(<li key={name}>{name} - {amount}</li>))}
        </ul>
        <h3>You can travel to:</h3>
        <ul>
        {planet.routes.map( ([name,distance])=>(<li key={name}>{name} - {distance} <ActionButton action="TRAVEL" payload={{state,destination:name}} >Travel</ActionButton></li>))}
        </ul>
        <h3>You can trade here:</h3>
        <ul>
            {inventory.map(([name,amount])=>(<li key={name}>{name} - you have: {amount}  price: {trade.calculatePrice(planet,name)} 
             <ActionButton action="TRADE" payload={{item:name,amount:1}}>Buy</ActionButton>
             <ActionButton  action="TRADE" payload={{item:name,amount:-1}}>Sell</ActionButton> </li>
            ))}
        </ul>

        <div className="list">
        </div>
        </>
    )
}

export default Main