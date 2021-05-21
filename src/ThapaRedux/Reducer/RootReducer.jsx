import {UseReducer} from './UpDown'
import {MutandDiv} from '../THAPAREDUX2/Reducer/MutandDiv'
// Reducer is our obejct
import {combineReducers} from 'redux'


 const RootReducer=combineReducers({
    // This is an object and use can also use key:value
    UseReducer,
    MutandDiv,
})

export default RootReducer