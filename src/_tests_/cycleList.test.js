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

it("copies values as expected",()=>{
    const list=cycleList([1,2,3]);
    list.next();
    list.next();
    const copiedList=list.copy();
    expect(list===copiedList).toBe(false)
    expect(copiedList.next()).toBe(list.next())
})

it("cycles values correctly",()=>{
    const list=cycleList([1,2,3]);
    expect(list.next()).toBe(1);
    expect(list.next()).toBe(2);    
    expect(list.next()).toBe(3);    
    expect(list.next()).toBe(1);
    expect(list.next()).toBe(2);    
    expect(list.next()).toBe(3);    
    expect(list.next()).toBe(1);    
})