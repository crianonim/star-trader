import {
    createStore
} from 'redux';
import rootReducer from "./reducers/rootReducer";   

const randInt = (max) => (Math.random() * max) >> 0;

const storeInit=()=>{

    const store = createStore(rootReducer, {
        money: 500,
        turn:1,
        place:"Ereb",
        planets:[
            {
                name:"Ereb",
                prices:[
                    ["fuel",5,0],
                    ["food",3,-2],
                    ["electronics",7,0],
                    ["minerals",6,0]
                ],
                routes:[
                    ["Dokav",10],
                    ["Inwe",20]
                ]
            },
            {
                name:"Dokav",
                prices:[
                    ["fuel",5,0],
                    ["food",7,0],
                    ["electronics",4,0],
                    ["minerals",6,0]
                ],
                routes:[
                    ["Ereb",10],
                ]
            },
            {
                name:"Inwe",
                prices:[
                    ["fuel",5,0],
                    ["food",6,0],
                    ["electronics",5,0],
                    ["minerals",3,0]
                ],
                routes:[
                    ["Ereb",20],
                ]
            },
        ],
        
        inventory: [
            ["fuel", 100],
            ["food", 0],
            ["electronics", 0],
            ["minerals", 20]
        ]
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}


// console.log(store.getState())
// store.dispatch({type:"INTEREST",rate:1.20})
// console.log(store.getState())

export default storeInit