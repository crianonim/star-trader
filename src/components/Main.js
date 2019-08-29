import React from 'react'
import {useSelector} from 'react-redux';
import ActionButton from './ActionButton';
import * as trade from '../game-logic/trade';
import InventoryList from './InventoryList';
import Travel from './Travel';
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
        <Travel></Travel>
        
        
        </>
    )
}

export default Main