import {ADD_TO_CART} from '../Types'


export const Action=(data) =>{
console.log(data);
    return{
     data: data,
     type: ADD_TO_CART,
    }
}