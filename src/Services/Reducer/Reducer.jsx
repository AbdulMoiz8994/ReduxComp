import {ADD_TO_CART,REMOVE_TO_CART} from '../Types'



// const initialValue={
//     CardItem:[]
// }

export const Reducer=(state=[],action)=>{

    switch(action.type){
        case ADD_TO_CART:
            console.log(action.data);
            return[
                ...state,
                {CardItem: action.data},
            ];
            case REMOVE_TO_CART:
                state.pop();
                return[
                  ...state,
                ];
            default:
             return state 
    }
}