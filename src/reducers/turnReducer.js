export default (state, action) => {
  console.log("FROM TURN");
  const { type, payload } = action;
  switch (type) {
    case "TRAVEL":{
        console.log("TURN", { payload });
        const { valid,distance } = state.actionData;
        if (!valid) return state;
        return takeTurn(distance,state)
    }
    case "TRADE":{
        const { valid } = state.actionData;
        if (!valid) return state;
        return takeTurn(state.actionData.turns||1,state);
    }
    default:
      return state;
  }
};

export const takeTurn=(n,state)=>{
    let {turn,planets}=state;
    
    for (let i=0;i<n;i++){
        console.log("End of turn ",turn);
        turn++;
        planets=planets.map(planet=>({...planet,prices:changePlanetFluct(planet.prices,state)}))
    }
    return {...state,turn,planets}
}
export const rng=(max,state)=>{
    return (state.rng.next()*max)>>0
}
const changePlanetFluct=((prices,state)=>prices.map( price=>[price[0],price[1],changePricePluct( price[2],state)] ))

const changePricePluct=(fluct,state)=>Math.max(-10,Math.min(10,fluct+(2-rng(5,state))));
