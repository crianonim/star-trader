import React from 'react';

const ActionButton = ({children,dispatch,action,payload})=>{
    return (
        <button onClick={()=>{
            dispatch({type:action,payload})
        }}>{children}</button>
    )
}

export default ActionButton 