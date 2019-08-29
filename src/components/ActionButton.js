import React from 'react';
import Button from '@material-ui/core/Button'
import {useDispatch} from 'react-redux';
import * as conditions from '../game-logic/conditions';

const ActionButton = ({children,action,payload,variant})=>{
    const dispatch=useDispatch();
    const canAct=conditions[action]?conditions[action](payload):true;
    //  console.log(canAct,action,conditions[action])
    return ( <Button variant={variant} disabled={!canAct} onClick={()=>{
           dispatch({type:action,payload})
        }}>{children}</Button>
    )
}

export default ActionButton 