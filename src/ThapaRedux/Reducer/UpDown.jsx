// import React from 'react' 
// This is reducer
const initialValue=0;
 export const UseReducer=(state=initialValue,action) =>{
     switch(action.type){
         case 'INCREMENT': return state +1; 
         case 'DECREMENT': return state - 1;
           default:
               return state  
     }
 }