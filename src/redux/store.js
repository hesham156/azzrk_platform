import {createStore} from "redux"
import element from "./reducers/element"
// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(element)
 export default store