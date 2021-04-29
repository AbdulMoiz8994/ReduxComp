// in reactjs we have only one store but we want mutiple add delete edit etc so we use redux module in separate file  
// sara reducer humyee marge karna hoga ak single  reuder ka ander
import {combineReducers} from 'redux'

// import reducers
import {Reducer} from './Reducer'

// This is high level of components,jis ma pura comp a jayee ga
export default combineReducers({
    Reducer,
})