export const calculatePrice=(planet,item)=>{
    const [name,base,fluct]=planet.prices.find(el=>el[0]===item);
    return (base*10+fluct);
}