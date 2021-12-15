import {applyMiddleware, combineReducers, createStore} from "redux";
import searchReducer from "./search-reducer";
import  thunkMiddleWare from "redux-thunk";




let reducersBundle=combineReducers({
    searchPage:searchReducer,


})
type RootReducerType= typeof reducersBundle
export type AppStateType =ReturnType<RootReducerType>
let store =createStore( reducersBundle,applyMiddleware(thunkMiddleWare));
//window.store=store
export default store

