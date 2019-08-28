import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
const Main = (props)=>{
    const dispatch=useDispatch();
    const money=useSelector( (state)=>state.money)
    return (
        <>
        <p>{money}</p>
        <button onClick={()=>dispatch({type:"INTEREST",rate:1.01})}>Interest</button>
        </>
    )
}

export default Main