export const turn=(n,state)=>{
    return {...state,turn:state.turn+n,planets:state.planets.map(planet=>({...planet,prices:changePlanetFluct(planet.prices)}))}
}

const changePlanetFluct=(prices=>prices.map( price=>[price[0],price[1],changePricePluct( price[2])] ))

const changePricePluct=(fluct)=>Math.max(-10,Math.min(10,fluct+(2-rng(5))));

export const rng=(max)=>{
    return (Math.random()*max)>>0
}