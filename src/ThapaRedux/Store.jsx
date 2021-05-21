import RootReducer from './Reducer/RootReducer'
import {createStore} from 'redux'


const Store=createStore(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default Store;


