import * as trade from '../game-logic/trade';
import {saveGame, loadGame} from '../game-logic/index';
import {initialState} from '../reducers/storeInit'
const rootReducer = (state, action) => {
    switch (action.type) {
        case 'SAVE':
            saveGame(state);
            return state;
        case 'LOAD':
            return loadGame();
        case 'RESET':
            return initialState;
        case 'INTEREST':
            return {
                ...state,
                money: (state.money * action.rate || 1.01)
            }
        case 'RANDOMISE_PRICES':

            return {
                ...state,
                inventory:{...state.inventory,fuel:state.inventory.fuel-10},
                prices: action.prices
            }

        case 'TRADE':
            const {amount,item}=action.payload;
            const {place,planets,money,inventory}=state;
            const planet=planets.find(el=>el.name===place)
            const price=trade.calculatePrice(planet,item)

            // console.log(amount,state.inventory[item])
            //buy
            if (amount>0){
                if (price*amount>money){
                    console.log("Not enough money");
                    return state;
                }
            } else
            //sell
            {
                if (-amount>inventory.find(el=>el[0]===item)[1]) {
                    console.log("Don't have enough items.")
                    return state;
                }
                
            }
            return {...state,money:money-price*amount,inventory:inventory.map(el=>el[0]===item?[el[0],el[1]+amount]:el)}

        case 'TRAVEL':
            const {destination}=action.payload
            const {fuel,distance,valid}=state.actionData
            console.log("ACTION",valid,fuel,distance)
            if (!valid) return state;
            return {...state,inventory:state.inventory.map(el=>el[0]==="fuel"?["fuel",fuel-distance]:el),place:destination}
       
        default:
            return state;
    }
}

export default rootReducer;