export default (state,action)=>{
    console.log("FROM TURN");
    const {type,payload}=action;
    switch (type){
        case 'TRAVEL':
            console.log("TURN",{payload});
            const {valid,distance}=state.actionData;
            if (!valid) return state;
            return {...state,turn:state.turn+distance}
        default: return state;
    }
}