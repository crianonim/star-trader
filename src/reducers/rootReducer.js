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
            const price=state.prices[item]

            console.log(amount,state.inventory[item])
            //buy
            if (amount>0){
                if (price*amount>state.money){
                    console.log("Not enough money");
                    return state;
                }
            } else
            //sell
            {
                if (-amount>state.inventory[item]) {
                    console.log("Don't have enough items.")
                    return state;
                }
                
            }
            return {...state,money:state.money-price*amount,inventory:{...state.inventory,[item]:state.inventory[item]+amount}}

            break;
        default:
            return state;
    }
}

export default rootReducer;