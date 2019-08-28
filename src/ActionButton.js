import React from 'react';

const ActionButton = ({children,dispatch,action,payload})=>{
    return (
        <button onClick={()=>{
            dispatch({type:action,payload})
            if (payload.turns){
                dispatch({type:"TURN",payload:payload.turns})
            }
        }}>{children}</button>
    )
}

export default ActionButton 