import {ADD_TO_CART} from '../Types'

const initialValue={
    CardData:[]
}

export const Reducer=(state=initialValue,action) =>{
    switch(action.type){
        case ADD_TO_CART:
            console.log(action);
            return{
                ...state,
                CardData: action.data
            }
            default:
            return state
    }
}