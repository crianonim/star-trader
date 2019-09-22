import React from 'react';
import Button from '@material-ui/core/Button'
import {useDispatch} from 'react-redux';
import * as conditions from '../game-logic/conditions';

const ActionButton = ({children,action,payload,variant,color,disabledLabel,useDispatchButton=useDispatch})=>{
    const dispatch=useDispatchButton();
    const canAct=conditions[action]?conditions[action](payload):true;
    return ( <Button variant={variant} color={color} disabled={!canAct} onClick={()=>{
           dispatch({type:action,payload})
        }}>{(disabledLabel && !canAct)?disabledLabel : children}</Button>
    )
}

export default ActionButton 