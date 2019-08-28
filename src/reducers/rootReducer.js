const rootReducer=(state,action)=>{
 if (action.type==="INTEREST"){
     return {...state,money:state.money*action.rate}
 } else {
     return state;
 }
}

export default rootReducer;