import React from 'react';

const ActionButton = ({children,dispatch,action,payload,disabled})=>{
    return (
        <button disabled={disabled} onClick={()=>{
            dispatch({type:action,payload})
            if (payload.turns){
                dispatch({type:"TURN",payload:payload.turns})
            }
        }}>{children}</button>
    )
}

export default ActionButton 