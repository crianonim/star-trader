import getStoreInstance from '../reducers/storeInit';
import * as player from './player';

export const TRAVEL=({state,destination})=>{
    console.log("TRAVEL",{state});
    const distance=state.planets.find(el=>el.name===state.place).routes.find(el=>el[0]===destination)
     const fuel=player.getItemCount(state.inventory,"fuel");
     console.log({state},distance,destination)
    return true;
}