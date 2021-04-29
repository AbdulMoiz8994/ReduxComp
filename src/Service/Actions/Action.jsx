import {ADD_TO_CART} from '../Types'



export const ADDCART=(data) =>{
    console.log(data);
   return{
       type: ADD_TO_CART,
       data: data,
   }
}
