

const rootReducer = (state, action) => {
    switch (action.type) {
        case 'INTEREST':
            return {
                ...state, inventory: {
                    ...state.actioninventory,
                    money: state.inventory.money * action.rate || 1.01
                }
            }
        case 'RANDOMISE_PRICES':
           
            return {...state,prices:action.prices}
            
            
        default:
            return state;
    }
}

export default rootReducer;