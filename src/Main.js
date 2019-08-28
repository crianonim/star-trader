import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import * as actions from './reducers/actionCreators';
const Main = (props)=>{
    const dispatch=useDispatch();
    const money=useSelector( (state)=>state.inventory.money);
    const prices=useSelector( (state)=>state.prices);
    return (
        <>
        <p>{money}</p>
        <button onClick={()=>dispatch({type:"INTEREST",rate:1.06})}>Interest</button>
        <button onClick={actions.createActionRandomisePrices(dispatch,prices)}>Randomise Prices</button>

        <div className="Price list">
            <ul>

            {Object.entries(prices).map(([item,price])=>
                (<li key={item}>
                    {item} : {price}
                </li>)
            )}
            </ul>
        </div>
        </>
    )
}

export default Main