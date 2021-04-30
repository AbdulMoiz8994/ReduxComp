import {ADD_TO_CART} from '../Types'



const initialValue={
    CardItem:[]
}

export const Reducer=(state=initialValue,action)=>{

    switch(action.type){
        case ADD_TO_CART:
            console.log(action.data);
            return{
                ...state,
                CardItem: action.data
            }
            default:
             return state 
    }
}