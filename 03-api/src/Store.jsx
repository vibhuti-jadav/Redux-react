import { combineReducers, createStore } from "redux";
import { productReducer } from "./redux/products/Reducer";


const rootReducer = combineReducers({
        products:productReducer
})

// export const store = createStore(Reducer)
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// function createStore(red){
//     let obj = {
//         store : red,
//         actiondata:{},
//         getStore: function(){
//             return this.red;
//         },

//         dispatch: function(act){
//             this.action = act
//         },

//         action: function(){
//             return this.actiondata
//         }

        
//     }

//     return obj;

// }






// class createStore{

//    store;
//        action;
//     constructor(n){
//         this.store = n;
//     }

//     getStore(){
//         return this.store;
//     }

        // dispatch(n){
        //     this.action = n; 
        // }

        // action(){
        //     return this.action;
        // }
// }


// createStore store(reducer())

// let data = store.getStore


// function reducer(store={count:0}){
//     return store
// }