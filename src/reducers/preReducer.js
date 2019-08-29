import * as player from '../game-logic/player';

export default (state,action)=>{
    console.log("FROM PRE");
    const {type,payload}=action;
    switch (type){
        case 'TRAVEL':
            console.log("PRE",{payload});
            const {destination}=payload;
            const distance=state.planets.find(el=>el.name===state.place).routes.find(el=>el[0]===destination)[1]
            const fuel=player.getItemCount(state.inventory,"fuel");
            if (distance>fuel) {
                return {...state,actionData:{fuel,distance,valid:false}}
            }
            return {...state,actionData:{fuel,distance,valid:true}};
        default: return state;
    }
}