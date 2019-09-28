import cycleList from "../game-logic/cycleList";

it("has all the properties",()=>{
    const list=cycleList([1,2,3]);
    expect(typeof list.next).toBe("function")
    expect(typeof list.copy).toBe("function")
})
it("has accepts only Arrays as initial values",()=>{
    expect(()=>cycleList([1,2,3])).not.toThrow();
    expect(()=>cycleList("bad")).toThrow();
})