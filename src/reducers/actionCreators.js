import 'redux'


const changePrice= (n)=>{
    const price=n+2-((Math.random()*5)>>0);
    return Math.max(1,Math.min(10,price))
}
export const createActionRandomisePrices=(dispatch,prices)=>{
    return ()=>{
        const newPrices=Object.fromEntries(Object.entries(prices).map(([item,price])=>[item,changePrice(price)]))
        console.log({newPrices});
        dispatch({type:"RANDOMISE_PRICES",prices:newPrices})
    }
}