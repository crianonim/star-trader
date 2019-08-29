import * as player from "../game-logic/player";
import * as trade from "../game-logic/trade";
export default (state, action) => {
  console.log("FROM PRE");
  const { type, payload } = action;
  switch (type) {
    case "TRAVEL":
      console.log("PRE", { payload });
      const { destination } = payload;
      const distance = state.planets
        .find(el => el.name === state.place)
        .routes.find(el => el[0] === destination)[1];
      const fuel = player.getItemCount(state.inventory, "fuel");
      if (distance > fuel) {
        return { ...state, actionData: { fuel, distance, valid: false } };
      }
      return { ...state, actionData: { fuel, distance, valid: true } };
    case "TRADE":
      const { amount, item } = action.payload;
      const { place, planets, money, inventory } = state;
      const planet = planets.find(el => el.name === place);
      const price = trade.calculatePrice(planet, item);

      // console.log(amount,state.inventory[item])
      //buy
      if (amount > 0) {
        if (price * amount > money) {
          console.log("Not enough money");

          return {...state,actionData:{valid:false}};
        }
      }
      //sell
      else {
        if (-amount > inventory.find(el => el[0] === item)[1]) {
          console.log("Don't have enough items.");
          return {...state,actionData:{valid:false}};
        }
      }
      return {...state,actionData:{valid:true,turns:1}}
    default:
      return state;
  }
};
