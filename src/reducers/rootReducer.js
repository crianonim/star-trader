import * as trade from '../game-logic/trade';
const rootReducer = (state, action) => {
    switch (action.type) {
        case 'INTEREST':
            return {
                ...state,
                money: (state.money * action.rate || 1.01)
            }
            break;
        case 'RANDOMISE_PRICES':

            return {
                ...state,
                inventory:{...state.inventory,fuel:state.inventory.fuel-10},
                prices: action.prices
            }

            break;
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
            return {...state,money:money-price*amount,inventory:inventory.map(el=>el[0]==item?[el[0],el[1]+amount]:el)}

            break;
        default:
            return state;
    }
}

export default rootReducer;