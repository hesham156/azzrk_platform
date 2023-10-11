import {createStore} from "redux"
import {configureStore} from '@reduxjs/toolkit'
import elementSlice from "./elementSlice"
// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const store = createStore(element)
const store = configureStore({
    reducer:{
        element:elementSlice,
    }
})
 export default store