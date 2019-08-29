import * as player from './player';

export const TRAVEL=({state,destination})=>{
    const distance=state.planets.find(el=>el.name===state.place).routes.find(el=>el[0]===destination)[1]
    const fuel=player.getItemCount(state.inventory,"fuel");
    if (distance>fuel) return false;
    return true;
}