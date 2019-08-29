import React from 'react';
import {useDispatch} from 'react-redux';
import * as conditions from '../game-logic/conditions';

const ActionButton = ({children,action,payload})=>{
    const dispatch=useDispatch();
    // console.log("AB",{payload})
    const canAct=conditions[action.type]?conditions[action.type](payload):true;
     
    return ( <button disabled={!canAct} onClick={()=>{
           dispatch({type:action,payload})
        }}>{children}</button>
    )
}

export default ActionButton 