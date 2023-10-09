import {createStore} from "redux"
import user from './reducers/user'
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(user,enhancer())
 export default store